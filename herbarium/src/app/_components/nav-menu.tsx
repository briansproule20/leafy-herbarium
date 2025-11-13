'use client';

import Link from 'next/link';
import { Menu, Home, MessageSquare } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function NavMenu() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      title: 'Home',
      href: '/home',
      icon: Home,
      description: 'Return to the botanical fieldguide',
    },
    {
      title: 'Chat',
      href: '/',
      icon: MessageSquare,
      description: 'Ask questions about your plants',
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent transition-colors"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[350px] bg-background/95 backdrop-blur-md border-l border-border"
      >
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-serif text-2xl text-foreground">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-start gap-4 rounded-md p-4 hover:bg-accent transition-all duration-200 border border-transparent hover:border-border"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="font-serif text-base font-semibold leading-none text-foreground">
                    {item.title}
                  </p>
                  <p className="font-serif text-muted-foreground text-sm leading-snug">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Decorative element */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="border-t border-border pt-6">
            <p className="font-serif text-muted-foreground text-xs uppercase tracking-widest text-center">
              Herbarium Fieldguide
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
