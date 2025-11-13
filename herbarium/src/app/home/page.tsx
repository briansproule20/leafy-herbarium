import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background photo layer - blurred plant shop/bookstore */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[4px] brightness-[0.85] scale-110"
          style={{
            backgroundImage: "url('/background.png')",
          }}
        />
        {/* Color overlay to match our theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-stone-100/70 to-emerald-50/60 mix-blend-multiply" />
      </div>

      {/* Frosted/Liquid glass effect layer */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {/* Main frosted glass panel */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-amber-50/30 via-stone-50/40 to-emerald-50/30" />

        {/* Liquid glass distortion effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

        {/* Subtle noise texture for realism */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-12 sm:py-20">
        {/* Hero Section */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center min-h-[calc(100vh-12rem)]">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Decorative top line */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-800" />
              <span className="font-serif text-emerald-950 text-xs uppercase tracking-[0.3em] font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                Est. 2025
              </span>
            </div>

            {/* Main Heading with creative typography */}
            <div className="space-y-4">
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-emerald-950 animate-fade-in-up-delay-1">
                Your
                <span className="block italic font-light text-emerald-800 mt-2">
                  Botanical
                </span>
                <span className="block mt-2">
                  Companion
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="font-serif text-xl sm:text-2xl text-stone-700 leading-relaxed max-w-lg animate-fade-in-up-delay-2">
              Discover, nurture, and document your plant journey with AI-powered
              insights inspired by centuries of botanical fieldwork.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up-delay-3">
              <Link
                href="/"
                className="group relative bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 px-8 py-4 shadow-lg border border-amber-900/20 hover:scale-105 transition-all duration-200 hover:shadow-xl overflow-hidden"
              >
                {/* Parchment texture overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
                <span className="relative font-serif text-emerald-950 text-lg font-semibold tracking-wide">
                  Begin Your Journey
                </span>
              </Link>

              <Link
                href="/library"
                className="group relative bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 px-8 py-4 shadow-lg border border-amber-900/20 hover:scale-105 transition-all duration-200 hover:shadow-xl overflow-hidden"
              >
                {/* Parchment texture overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
                <span className="relative font-serif text-emerald-950 text-lg font-semibold tracking-wide">
                  Browse Library →
                </span>
              </Link>
            </div>

            {/* Feature tags */}
            <div className="grid grid-cols-2 gap-3 pt-8 max-w-md animate-fade-in-up-delay-4">
              {['Plant ID', 'Care Guides', 'Growth Tracking', 'Community'].map((tag, i) => (
                <div
                  key={tag}
                  className="relative bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 px-6 py-2 shadow-md border border-amber-900/20 transform hover:scale-105 transition-transform duration-200"
                  style={{
                    animationDelay: `${1200 + i * 100}ms`,
                    rotate: `${i % 2 === 0 ? '-1deg' : '1deg'}`
                  }}
                >
                  {/* Parchment texture overlay */}
                  <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
                  <span className="relative font-serif text-emerald-950 text-sm font-semibold tracking-wide">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image/Illustration */}
          <div className="relative animate-fade-in-scale self-start">
            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src="/herbarium trans favicon.png"
                alt="Herbarium Fieldguide"
                width={400}
                height={400}
                className="w-full h-full object-contain drop-shadow-2xl"
                priority
              />

              {/* Old parchment label */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 px-8 py-3 shadow-xl border border-amber-900/20 transform rotate-2">
                {/* Parchment texture overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiAvPjwvc3ZnPg==')]" />
                <span className="relative font-serif text-emerald-950 text-sm uppercase tracking-[0.25em] font-semibold">
                  Herbarium Fieldguide
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid gap-8 sm:grid-cols-3 mt-32 pb-20 animate-fade-in-up-delay-5">
          {[
            {
              title: 'Botanical Knowledge',
              desc: 'Access centuries of plant wisdom, reimagined for modern plant parents.',
              icon: '🌿'
            },
            {
              title: 'Personal Herbarium',
              desc: 'Document your collection with field notes and growth observations.',
              icon: '📖'
            },
            {
              title: 'AI Plant Care',
              desc: 'Get instant answers to your plant questions from our AI botanist.',
              icon: '✨'
            }
          ].map((feature, i) => (
            <div
              key={feature.title}
              className="group relative p-8 bg-gradient-to-br from-amber-50/50 to-stone-100/50 border border-emerald-900/20 backdrop-blur-sm hover:border-emerald-900/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${1600 + i * 150}ms` }}
            >
              <div className="text-5xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl text-emerald-950 mb-3">
                {feature.title}
              </h3>
              <p className="font-serif text-stone-700 leading-relaxed">
                {feature.desc}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor" className="text-emerald-900" />
        </svg>
      </div>
    </div>
  );
}
