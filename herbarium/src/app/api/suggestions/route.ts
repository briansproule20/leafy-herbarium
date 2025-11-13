import { generateText } from 'ai';
import { openai } from '@/echo';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { conversationContext, model } = await req.json();

    const { text } = await generateText({
      model: openai(model),
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates 5 brief, relevant follow-up questions for a plant care chatbot. Based on the conversation context, suggest questions the user might want to ask next. Keep questions concise (under 15 words each). Return ONLY a JSON array of 5 strings, nothing else. Example: ["Question 1?", "Question 2?", "Question 3?", "Question 4?", "Question 5?"]'
        },
        {
          role: 'user',
          content: `Conversation:\n${conversationContext}\n\nGenerate 5 relevant follow-up questions as a JSON array.`
        }
      ],
    });

    // Try to parse the JSON array from the response
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      const suggestions = JSON.parse(jsonMatch[0]);
      if (Array.isArray(suggestions) && suggestions.length === 5) {
        return new Response(
          JSON.stringify({ suggestions }),
          {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
    }

    throw new Error('Invalid response format from AI');
  } catch (error) {
    console.error('Suggestions API error:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: 'Failed to generate suggestions',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
