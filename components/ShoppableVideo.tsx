import { LuShoppingBag, LuSmartphone, LuPlay, LuMonitor } from 'react-icons/lu';

export default function ShoppableVideo() {
  return (
    <section id="shoppable-video" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#00c4cc]/10 text-[#00c4cc] border border-[#00c4cc]/20">
            <LuShoppingBag size={12} /> Shoppable Video Widgets
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
            Turn store visits into <span className="gradient-text">sales</span>
          </h2>
          <p className="text-lg text-[#6b6b7b] leading-relaxed">
            Create product-linked video carousels, publish to your Shopify theme in minutes, and
            track engagement — no custom theme development needed.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <LuPlay size={24} />,
              title: 'Create Widgets',
              desc: 'Upload image or video slides with titles and subtitles. Link each slide to a Shopify product for shoppable CTAs.',
              items: ['Multiple media slides', 'Product-linked CTAs', 'Staged media upload', 'Publish/unpublish toggle'],
            },
            {
              icon: <LuMonitor size={24} />,
              title: 'Theme Integration',
              desc: 'Add the Shoppable Videos app block to any template. Carousel or card grid layouts with autoplay and styling controls.',
              items: ['Carousel or card grid', 'Autoplay & captions', 'Aspect ratio control', 'Theme block — no code'],
            },
            {
              icon: <LuSmartphone size={24} />,
              title: 'Track Engagement',
              desc: 'Storefront analytics for widget interactions. Monitor views, clicks, and product taps directly from your dashboard.',
              items: ['Widget view metrics', 'Click tracking', 'Product tap data', 'Date range filtering'],
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card-hover bg-[#faf9f7] rounded-2xl p-7 border border-[#e8e5e0]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#00c4cc]/10 flex items-center justify-center text-[#00c4cc] mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
              <p className="text-sm text-[#6b6b7b] leading-relaxed mb-5">{item.desc}</p>
              <ul className="space-y-2">
                {item.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00c4cc] shrink-0" />
                    <span className="text-[#6b6b7b]">{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#faf9f7] rounded-2xl border border-[#e8e5e0] p-8 sm:p-10">
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">Storefront Setup (3 steps)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: '1', text: 'Create & publish a Shoppable Widget in Pixelify.' },
              { num: '2', text: 'Go to Shopify Admin → Themes → Customize → Add "Shoppable Videos" block.' },
              { num: '3', text: 'Select your widget handle, adjust layout, save — widget reads live metaobject data.' },
            ].map((s) => (
              <div key={s.num} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00c4cc]/10 flex items-center justify-center text-[#00c4cc] font-extrabold text-sm shrink-0">
                  {s.num}
                </div>
                <p className="text-sm text-[#6b6b7b] leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}