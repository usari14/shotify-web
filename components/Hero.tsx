'use client';

import { LuArrowRight, LuPlay, LuZap } from 'react-icons/lu';

const stats = [
  { value: '8+', label: 'AI Photo Styles' },
  { value: '1-Click', label: 'Apply to Products' },
  { value: 'Instagram', label: 'Direct Publishing' },
  { value: 'Shoppable', label: 'Video Widgets' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
      <div className="absolute inset-0 bg-[#faf9f7]" />
      <div className="absolute inset-0 bg-dots pointer-events-none" />

      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] blob bg-gradient-to-br from-[#7c5cfc]/15 to-[#7c5cfc]/5 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] blob bg-gradient-to-br from-[#00c4cc]/15 to-[#00c4cc]/5 pointer-events-none animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] blob bg-gradient-to-br from-[#ff6b6b]/10 to-[#ff6b6b]/3 pointer-events-none animate-float" style={{ animationDelay: '-5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-white shadow-sm border border-[#e8e5e0] text-[#7c5cfc]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00c4cc] animate-pulse-soft" />
            Built for Shopify — Embedded in Your Admin
          </span>
        </div>

        <h1 className="animate-slide-up text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#1a1a1a] leading-[1.05] max-w-5xl mx-auto">
          Studio-quality product photos, <br />
          <span className="gradient-text">shoppable video & Instagram</span>
        </h1>

        <p className="animate-slide-up mt-8 text-lg sm:text-xl text-[#6b6b7b] max-w-2xl mx-auto leading-relaxed">
          Pick a product, choose a style, generate new images, apply them to your listings, run
          shoppable video widgets on your storefront, and post to Instagram — all from one
          embedded Shopify app.
        </p>

        <div className="animate-slide-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#7c5cfc] text-white font-semibold text-base hover:bg-[#6a4ce8] transition-all shadow-xl shadow-[#7c5cfc]/25 flex items-center justify-center gap-2"
          >
            Install Shotify AI on Shopify
            <LuArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-[#e8e5e0] text-[#1a1a1a] font-semibold text-base hover:bg-[#f5f3f0] transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <LuPlay size={18} />
            See how it works
          </a>
        </div>

        <div className="animate-fade-in mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a]">{stat.value}</p>
              <p className="text-sm text-[#9a9aaa] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}