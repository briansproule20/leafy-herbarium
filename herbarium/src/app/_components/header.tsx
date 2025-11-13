import { EchoAccount } from '@/components/echo-account-next';
import { isSignedIn } from '@/echo';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { NavMenu } from './nav-menu';

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
      className={`relative border-b border-emerald-900/20 shadow-lg bg-gradient-to-r from-amber-50/80 via-stone-50/85 to-emerald-50/80 backdrop-blur-sm ${className}`}
    >
      {/* Liquid glass overlay effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/home"
            className="flex items-center gap-3 group transition-opacity hover:opacity-80"
          >
            <Image
              src="/herbarium trans favicon.png"
              alt="Herbarium Fieldguide"
              width={40}
              height={40}
              className="h-10 w-10 transition-transform group-hover:scale-105"
            />
            <h1 className="font-serif text-foreground text-xl font-semibold tracking-wide">
              {title}
            </h1>
          </Link>

          <nav className="flex items-center space-x-2">
            <EchoAccount />
            <NavMenu />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
