const steps = [
  {
    step: '01',
    title: 'Connect Your Store',
    desc: 'Install Shotify AI from the Shopify App Store. Open the app from Apps in your admin — no separate dashboard to learn.',
    color: '#7c5cfc',
  },
  {
    step: '02',
    title: 'Generate Visuals',
    desc: 'Select products, choose from 8+ curated templates or write custom prompts, and generate AI product photos from your existing catalog images.',
    color: '#00c4cc',
  },
  {
    step: '03',
    title: 'Apply & Organize',
    desc: 'Push the best shots to product media (featured, gallery, or replace). Everything saves to your searchable Library tied to products.',
    color: '#ff6b6b',
  },
  {
    step: '04',
    title: 'Sell Everywhere',
    desc: 'Publish to Instagram, add shoppable video widgets to your theme, and track usage and engagement — all from inside your Shopify admin.',
    color: '#f97316',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/20">
            🚀 How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
            From idea to published in <span className="gradient-text">4 simple steps</span>
          </h2>
          <p className="text-lg text-[#6b6b7b] leading-relaxed">
            Shotify AI lives inside your Shopify admin. No switching tools, no exporting files — your entire visual workflow in one place.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className="relative group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg shadow-lg mb-5 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: s.color }}
              >
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6b6b7b] leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 -right-3 w-6 text-[#d4d4d8] text-lg">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}