const templates = [
  {
    name: 'Studio White',
    desc: 'Clean white seamless studio shot',
    badge: 'Popular',
    gradient: 'from-[#f5f5f5] to-[#e0e0e0]',
  },
  {
    name: 'Gradient Haze',
    desc: 'Soft pastel gradient, dreamy light',
    badge: 'New',
    gradient: 'from-[#fce4ec] to-[#e8eaf6]',
  },
  {
    name: 'Natural Outdoor',
    desc: 'Lifestyle outdoor, golden hour greenery',
    gradient: 'from-[#e8f5e9] to-[#fff8e1]',
  },
  {
    name: 'Coffee Table',
    desc: 'Warm wooden table, cozy lifestyle props',
    gradient: 'from-[#efebe9] to-[#d7ccc8]',
  },
  {
    name: 'Flat Lay',
    desc: 'Overhead editorial flat lay',
    badge: 'Popular',
    gradient: 'from-[#fafafa] to-[#eceff1]',
  },
  {
    name: 'Dark Luxury',
    desc: 'Moody charcoal/black premium lighting',
    badge: 'Premium',
    gradient: 'from-[#37474f] to-[#263238]',
  },
  {
    name: 'Holiday Festive',
    desc: 'Seasonal lights and warm holiday accents',
    badge: 'Seasonal',
    gradient: 'from-[#b71c1c] to-[#1b5e20]',
  },
  {
    name: 'Summer Vibes',
    desc: 'Bright beach-inspired summer aesthetic',
    badge: 'Seasonal',
    gradient: 'from-[#fff9c4] to-[#b3e5fc]',
  },
];

const categories = ['Studio', 'Lifestyle', 'Brand', 'Seasonal'];

export default function Templates() {
  return (
    <section id="templates" className="py-24 sm:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#00c4cc]/10 text-[#00c4cc] border border-[#00c4cc]/20">
            📐 Template Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
            8+ curated styles for <span className="gradient-text">e-commerce</span>
          </h2>
          <p className="text-lg text-[#6b6b7b] leading-relaxed">
            Pre-built prompts optimized for e-commerce. Credit-aware templates — pick a product,
            enqueue generation, and review results before applying.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-[#e8e5e0] text-[#6b6b7b]"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {templates.map((tpl) => (
            <div
              key={tpl.name}
              className="card-hover group bg-white rounded-2xl border border-[#e8e5e0] overflow-hidden cursor-pointer"
            >
              <div
                className={`relative h-36 sm:h-40 bg-gradient-to-br ${tpl.gradient} flex items-center justify-center`}
              >
                <span className="text-4xl opacity-30 select-none">📷</span>
                {tpl.badge && (
                  <span
                    className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      tpl.badge === 'Premium'
                        ? 'bg-amber-400 text-amber-900'
                        : tpl.badge === 'New'
                        ? 'bg-[#7c5cfc] text-white'
                        : tpl.badge === 'Seasonal'
                        ? 'bg-orange-400 text-white'
                        : 'bg-[#00c4cc] text-white'
                    }`}
                  >
                    {tpl.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-sm text-[#1a1a1a] mb-0.5">{tpl.name}</h4>
                <p className="text-xs text-[#9a9aaa]">{tpl.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}