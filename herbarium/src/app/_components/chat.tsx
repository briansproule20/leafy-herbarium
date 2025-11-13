'use client';

import { useChat } from '@ai-sdk/react';
import { CopyIcon, MessageSquare } from 'lucide-react';
import { Fragment, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Action, Actions } from '@/components/ai-elements/actions';
import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Loader } from '@/components/ai-elements/loader';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputModelSelect,
  PromptInputModelSelectContent,
  PromptInputModelSelectItem,
  PromptInputModelSelectTrigger,
  PromptInputModelSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import { Response } from '@/components/ai-elements/response';
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/sources';
import { Suggestion, Suggestions } from '@/components/ai-elements/suggestion';

const models = [
  {
    name: 'GPT 4o',
    value: 'gpt-4o',
  },
  {
    name: 'GPT 5',
    value: 'gpt-5',
  },
];

const suggestions = [
  'What are the best low-light houseplants for beginners?',
  'How do I propagate a monstera deliciosa?',
  'My fiddle leaf fig has brown spots - what should I do?',
  'When is the best time to repot succulents?',
  'How can I identify common houseplant pests and treat them naturally?',
];

const ChatBotDemo = () => {
  const [input, setInput] = useState('');
  const [model, setModel] = useState<string>(models[0].value);
  const { messages, sendMessage, status } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [dynamicSuggestions, setDynamicSuggestions] = useState<string[]>(suggestions);
  const lastMessageCountRef = useRef(0);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, status]);

  // Generate contextual suggestions after each assistant reply
  useEffect(() => {
    const generateContextualSuggestions = async () => {
      // Only generate if we have messages and the count increased
      if (messages.length > 0 && messages.length > lastMessageCountRef.current) {
        const lastMessage = messages[messages.length - 1];

        // Only generate after assistant replies
        if (lastMessage.role === 'assistant') {
          lastMessageCountRef.current = messages.length;

          try {
            const conversationContext = messages
              .slice(-4) // Last 2 exchanges (4 messages)
              .map(m => {
                const text = m.parts.find(p => p.type === 'text')?.text || '';
                return `${m.role}: ${text}`;
              })
              .join('\n');

            const response = await fetch('/api/suggestions', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                conversationContext,
                model: model,
              }),
            });

            const data = await response.json();

            if (data.suggestions && Array.isArray(data.suggestions)) {
              setDynamicSuggestions(data.suggestions);
            }
          } catch (error) {
            console.error('Failed to generate contextual suggestions:', error);
          }
        }
      }
    };

    generateContextualSuggestions();
  }, [messages, model]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(
        { text: input },
        {
          body: {
            model: model,
          },
        }
      );
      setInput('');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(
      { text: suggestion },
      {
        body: {
          model: model,
        },
      }
    );
  };

  return (
    <div className="mx-auto flex h-full max-w-4xl flex-col p-6">
      <div className="flex h-full min-h-0 flex-col">
        <Conversation className="relative min-h-0 w-full flex-1 overflow-hidden">
          <ConversationContent>
            {messages.length === 0 ? (
              <ConversationEmptyState
                icon={<MessageSquare className="size-12" />}
                title="No messages yet"
                description="Start a conversation to see messages here"
              />
            ) : (
              messages.map((message, messageIndex) => (
                <motion.div
                  key={message.id}
                  initial={{
                    opacity: 0,
                    y: 40,
                    rotateX: message.role === 'user' ? 8 : -8,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: 1.0,
                    delay: messageIndex * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{ perspective: 1200 }}
                >
                  {message.role === 'assistant' &&
                    message.parts.filter(part => part.type === 'source-url')
                      .length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: messageIndex * 0.1 + 0.2,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      >
                        <Sources>
                          <SourcesTrigger
                            count={
                              message.parts.filter(
                                part => part.type === 'source-url'
                              ).length
                            }
                          />
                          {message.parts
                            .filter(part => part.type === 'source-url')
                            .map((part, i) => (
                              <SourcesContent key={`${message.id}-${i}`}>
                                <Source
                                  key={`${message.id}-${i}`}
                                  href={part.url}
                                  title={part.url}
                                />
                              </SourcesContent>
                            ))}
                        </Sources>
                      </motion.div>
                    )}
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case 'text':
                        return (
                          <Fragment key={`${message.id}-${i}`}>
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.8,
                                delay: messageIndex * 0.1 + i * 0.15,
                                ease: [0.34, 1.56, 0.64, 1]
                              }}
                            >
                              <Message from={message.role}>
                                <MessageContent>
                                  <Response key={`${message.id}-${i}`}>
                                    {part.text}
                                  </Response>
                                </MessageContent>
                              </Message>
                            </motion.div>
                            {message.role === 'assistant' &&
                              i === messages.length - 1 && (
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: messageIndex * 0.1 + i * 0.15 + 0.3,
                                    ease: [0.34, 1.56, 0.64, 1]
                                  }}
                                >
                                  <Actions className="mt-2">
                                    <Action
                                      onClick={() =>
                                        navigator.clipboard.writeText(part.text)
                                      }
                                      label="Copy"
                                    >
                                      <CopyIcon className="size-3" />
                                    </Action>
                                  </Actions>
                                </motion.div>
                              )}
                          </Fragment>
                        );
                      case 'reasoning':
                        return (
                          <motion.div
                            key={`${message.id}-${i}`}
                            initial={{ opacity: 0, y: 20, rotateX: -10 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                              duration: 0.9,
                              delay: messageIndex * 0.1 + i * 0.15,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                          >
                            <Reasoning
                              className="w-full"
                              isStreaming={
                                status === 'streaming' &&
                                i === message.parts.length - 1 &&
                                message.id === messages.at(-1)?.id
                              }
                            >
                              <ReasoningTrigger />
                              <ReasoningContent>{part.text}</ReasoningContent>
                            </Reasoning>
                          </motion.div>
                        );
                      default:
                        return null;
                    }
                  })}
                </motion.div>
              ))
            )}
            {status === 'submitted' && <Loader />}
            <div ref={messagesEndRef} />
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>
        <Suggestions>
          <AnimatePresence mode="popLayout">
            {dynamicSuggestions.map((suggestion, i) => (
              <motion.div
                key={suggestion}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
              >
                <Suggestion
                  onClick={handleSuggestionClick}
                  suggestion={suggestion}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </Suggestions>

        <PromptInput onSubmit={handleSubmit} className="mt-4 flex-shrink-0">
          <PromptInputTextarea
            onChange={e => setInput(e.target.value)}
            value={input}
          />
          <PromptInputToolbar>
            <PromptInputTools>
              <PromptInputModelSelect
                onValueChange={value => {
                  setModel(value);
                }}
                value={model}
              >
                <PromptInputModelSelectTrigger>
                  <PromptInputModelSelectValue />
                </PromptInputModelSelectTrigger>
                <PromptInputModelSelectContent>
                  {models.map(model => (
                    <PromptInputModelSelectItem
                      key={model.value}
                      value={model.value}
                    >
                      {model.name}
                    </PromptInputModelSelectItem>
                  ))}
                </PromptInputModelSelectContent>
              </PromptInputModelSelect>
            </PromptInputTools>
            <PromptInputSubmit disabled={!input} status={status} />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
};

export default ChatBotDemo;
