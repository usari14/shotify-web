import { LuCheck, LuZap } from 'react-icons/lu';

const benefits = [
  'Save money on photo shoots and freelance retouching.',
  'Ship new SKUs faster with on-brand visuals in minutes.',
  'Keep all generations in one searchable library tied to products.',
  'No exporting files manually — direct Shopify Files and product media sync.',
  'Turn the same assets into Instagram posts without switching tools.',
  'Add shoppable video to your storefront without custom theme development.',
  'Credit-based plans align cost with actual usage.',
  'Built for Shopify permissions, GDPR, and embedded admin UX merchants already know.',
];

const workflows = [
  {
    title: 'Single SKU Quick Win',
    steps: [
      'Install app and choose a plan.',
      'Dashboard → Select a Product.',
      'Pick up to 6 reference images from the product gallery.',
      'Enter a short prompt or pick a template.',
      'Generate → review 1–4 results → Apply to product.',
    ],
    best: 'New launches, hero image refresh, A/B testing a new look.',
  },
  {
    title: 'Batch Refresh with Templates',
    steps: [
      'Browse Templates → pick a style (e.g., Studio White).',
      'Select product → job queues in background.',
      'Open Jobs until status is complete.',
      'Review on generate page → apply best shot.',
      'Repeat for top sellers in your catalog.',
    ],
    best: 'Seasonal campaigns, collection-wide visual consistency.',
  },
  {
    title: 'Social + Onsite Together',
    steps: [
      'Generate and apply strong product images.',
      'Connect Instagram (Professional account).',
      'Library → open image → compose caption → Publish.',
      'Shoppable Videos → create widget with product-linked slides.',
      'Theme Editor → add block → select widget handle.',
    ],
    best: 'Brands running paid social + onsite conversion from same assets.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#ff6b6b]/10 text-[#ff6b6b] border border-[#ff6b6b]/20">
            <LuZap size={12} /> Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
            Why merchants <span className="gradient-text">choose Pixelify</span>
          </h2>
          <p className="text-lg text-[#6b6b7b] leading-relaxed">
            Designed for Shopify stores that need faster, on-brand visuals without a full photo studio.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 p-4 rounded-xl bg-[#faf9f7] border border-[#e8e5e0]">
              <LuCheck size={18} className="mt-0.5 text-[#00c4cc] shrink-0" />
              <p className="text-sm text-[#6b6b7b] leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        {/* Workflows */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7c5cfc]/10 text-[#7c5cfc] border border-[#7c5cfc]/20">
              📋 Recommended Workflows
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              Best usage patterns
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflows.map((w) => (
              <div key={w.title} className="bg-[#faf9f7] rounded-2xl p-7 border border-[#e8e5e0]">
                <h4 className="text-lg font-bold text-[#1a1a1a] mb-4">{w.title}</h4>
                <ol className="space-y-2 mb-5">
                  {w.steps.map((s, i) => (
                    <li key={i} className="flex gap-2.5 text-sm">
                      <span className="font-bold text-[#7c5cfc] shrink-0">{i + 1}.</span>
                      <span className="text-[#6b6b7b]">{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-xs text-[#9a9aaa] italic">Best for: {w.best}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}