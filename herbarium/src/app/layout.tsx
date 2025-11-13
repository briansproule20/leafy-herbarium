import Header from '@/app/_components/header';
import { Providers } from '@/providers';
import type { Metadata } from 'next';
import { Crimson_Text, Lora, Geist_Mono } from 'next/font/google';
import './globals.css';

const crimsonText = Crimson_Text({
  variable: '--font-crimson',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Herbarium Fieldguide',
  description: 'A botanical fieldguide for plant enthusiasts and nature lovers',
  icons: {
    icon: '/herbarium trans favicon.png',
    apple: '/herbarium trans favicon.png',
  },
  openGraph: {
    title: 'Herbarium Fieldguide',
    description: 'A botanical fieldguide for plant enthusiasts and nature lovers',
    images: ['/herbarium trans favicon.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Herbarium Fieldguide',
    description: 'A botanical fieldguide for plant enthusiasts and nature lovers',
    images: ['/herbarium trans favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonText.variable} ${lora.variable} ${geistMono.variable} flex h-screen flex-col antialiased`}
      >
        <Providers>
          <Header title="Herbarium Fieldguide" />
          <div className="min-h-0 flex-1">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
