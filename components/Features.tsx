import { LuSparkles, LuLibrary, LuShoppingBag, LuChartBar, LuGem, LuShield } from 'react-icons/lu';
import { SiInstagram } from 'react-icons/si';

const features = [
  {
    icon: <LuSparkles size={24} />,
    title: 'AI Product Photo Generation',
    desc: 'Generate new product images from up to 6 reference photos from your Shopify product. Custom text prompts for full creative control. Review results before applying to your store.',
    items: ['One-click template gallery', 'Custom text prompts', 'Apply as featured, add, or replace media', 'Images saved to Shopify Files & in-app Library'],
    color: 'bg-[#7c5cfc]',
    bg: 'bg-[#7c5cfc]/10',
    text: 'text-[#7c5cfc]',
    accent: 'border-[#7c5cfc]/20',
  },
  {
    icon: <SiInstagram size={24} />,
    title: 'Instagram Direct Publishing',
    desc: 'OAuth connect for Instagram Professional accounts. Publish posts with captions directly from your product Library without switching tools.',
    items: ['Business & Creator accounts', 'Publish from Library with captions', 'Background post processing queue', 'Instagram/Meta webhook support'],
    color: 'bg-[#f97316]',
    bg: 'bg-[#f97316]/10',
    text: 'text-[#f97316]',
    accent: 'border-[#f97316]/20',
  },
  {
    icon: <LuShoppingBag size={24} />,
    title: 'Shoppable Video Widgets',
    desc: 'Create widgets with product-linked slides. Publish to Shopify metaobjects and add a theme block to any page. Carousel or card grid with autoplay and product CTAs.',
    items: ['Image or video slides', 'Link slides to products', 'Theme app extension block', 'Storefront analytics tracking'],
    color: 'bg-[#00c4cc]',
    bg: 'bg-[#00c4cc]/10',
    text: 'text-[#00c4cc]',
    accent: 'border-[#00c4cc]/20',
  },
  {
    icon: <LuLibrary size={24} />,
    title: 'Product Library & Search',
    desc: 'Automatic history of every saved generation. Search by product title or prompt. Quick path back to the source product or publish flow.',
    items: ['Search by product or prompt', 'Quick publish to Instagram', 'Permanent media storage', 'Linked to Shopify products'],
    color: 'bg-[#8b5cf6]',
    bg: 'bg-[#8b5cf6]/10',
    text: 'text-[#8b5cf6]',
    accent: 'border-[#8b5cf6]/20',
  },
  {
    icon: <LuChartBar size={24} />,
    title: 'Usage Analytics',
    desc: 'Track AI photo generation usage, widget engagement on your storefront, and campaign volume trends. Date range filtering with trend charts.',
    items: ['Generation usage metrics', 'Widget performance data', 'Date range filters', 'Trend charts & patterns'],
    color: 'bg-[#ff6b6b]',
    bg: 'bg-[#ff6b6b]/10',
    text: 'text-[#ff6b6b]',
    accent: 'border-[#ff6b6b]/20',
  },
  {
    icon: <LuShield size={24} />,
    title: 'Built for Shopify',
    desc: 'Embedded admin app with Polaris UI and App Bridge. Native product picker, GDPR compliance, shop-scoped data, and secure multi-tenant architecture.',
    items: ['Polaris admin UI', 'Native product picker', 'GDPR webhook compliance', 'Shop-scoped data isolation'],
    color: 'bg-[#ec4899]',
    bg: 'bg-[#ec4899]/10',
    text: 'text-[#ec4899]',
    accent: 'border-[#ec4899]/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7c5cfc]/10 text-[#7c5cfc] border border-[#7c5cfc]/20">
            ✨ Key Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
            All-in-one visual commerce <span className="gradient-text">inside Shopify</span>
          </h2>
          <p className="text-lg text-[#6b6b7b] leading-relaxed">
            Generate product photography, manage your library, run shoppable video widgets on your
            storefront, and publish to Instagram — without leaving your Shopify admin.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`card-hover group bg-[#faf9f7] rounded-2xl p-7 border border-[#e8e5e0] hover:${f.accent}`}
            >
              <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center ${f.text} mb-5 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{f.title}</h3>
              <p className="text-sm text-[#6b6b7b] leading-relaxed mb-5">{f.desc}</p>
              <ul className="space-y-2">
                {f.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${f.color} shrink-0`} />
                    <span className="text-[#6b6b7b]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}