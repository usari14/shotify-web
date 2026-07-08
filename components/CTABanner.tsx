import { LuArrowRight } from 'react-icons/lu';

export default function CTABanner() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#2d2050] to-[#7c5cfc] p-12 sm:p-16 text-center shadow-2xl shadow-[#7c5cfc]/15">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#00c4cc]/10 -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#ff6b6b]/10 translate-y-1/2 -translate-x-1/2 blur-2xl" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 tracking-tight">
              Ready to upgrade your product visuals?
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Install Pixelify from the Shopify App Store and start generating studio-quality
              product photos, shoppable videos, and Instagram posts — all from your admin.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-2xl bg-white text-[#1a1a1a] font-bold text-base hover:bg-[#f5f3f0] transition-all shadow-xl"
            >
              Install free on Shopify
              <LuArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}