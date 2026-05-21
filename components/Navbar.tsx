'use client';

import { useState } from 'react';
import { LuMenu, LuX, LuExternalLink } from 'react-icons/lu';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Templates', href: '#templates' },
  { label: 'Shoppable Video', href: '#shoppable-video' },
  { label: 'Instagram', href: '#instagram' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7c5cfc] to-[#00c4cc] flex items-center justify-center shadow-lg shadow-[#7c5cfc]/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xl font-bold gradient-text">Shotify AI</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#6b6b7b] hover:text-[#1a1a1a] rounded-lg hover:bg-white/60 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <a
              href="#"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-[#7c5cfc] text-white hover:bg-[#6a4ce8] transition-all shadow-lg shadow-[#7c5cfc]/25 flex items-center gap-2"
            >
              Install on Shopify
              <LuExternalLink size={14} />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/60 transition-colors"
          >
            {open ? <LuX size={22} className="text-[#1a1a1a]" /> : <LuMenu size={22} className="text-[#1a1a1a]" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl animate-slide-down">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-[#6b6b7b] hover:text-[#1a1a1a] hover:bg-[#f5f3f0] rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white rounded-xl bg-[#7c5cfc] hover:bg-[#6a4ce8] transition-colors"
              >
                Install on Shopify
                <LuExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}