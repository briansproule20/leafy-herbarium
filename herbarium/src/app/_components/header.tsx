import { EchoAccount } from '@/components/echo-account-next';
import { isSignedIn } from '@/echo';
import Image from 'next/image';
import type { FC } from 'react';

interface HeaderProps {
  title?: string;
  className?: string;
}

const Header: FC<HeaderProps> = async ({
  title = 'My App',
  className = '',
}) => {
  const signedIn = await isSignedIn();

  return (
    <header
      className={`border-b border-border bg-background shadow-sm ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/herbarium trans favicon.png"
              alt="Herbarium Fieldguide"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <h1 className="font-serif text-foreground text-xl font-semibold tracking-wide">{title}</h1>
          </div>

          <nav className="flex items-center space-x-4">
            <EchoAccount />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
