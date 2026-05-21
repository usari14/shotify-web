const testimonials = [
  {
    text: 'Cut our time-to-launch visuals from days to under an hour.',
    author: '— Shopify merchant using AI photo generation',
  },
  {
    text: 'Templates gave us a consistent look across 200+ SKUs.',
    author: '— DTC brand with large catalog',
  },
  {
    text: 'Shoppable video on the homepage lifted engagement on our hero collection.',
    author: '— Merchant using Shoppable Video widgets',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#00c4cc]/10 text-[#00c4cc] border border-[#00c4cc]/20">
            💬 Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
            Trusted by <span className="gradient-text">Shopify merchants</span>
          </h2>
          <p className="text-lg text-[#6b6b7b] leading-relaxed">
            See what merchants are saying about Shotify AI.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.text}
              className="bg-white rounded-2xl p-8 border border-[#e8e5e0] card-hover"
            >
              <div className="text-4xl text-[#7c5cfc]/20 font-serif mb-4">&ldquo;</div>
              <p className="text-sm text-[#6b6b7b] leading-relaxed mb-6">{t.text}</p>
              <p className="text-xs font-semibold text-[#9a9aaa]">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}