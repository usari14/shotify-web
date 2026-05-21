import { LuCircleHelp, LuChevronDown } from 'react-icons/lu';

const faqs = [
  {
    q: 'Do I need professional photos before using Shotify AI?',
    a: 'You need at least one product image from Shopify to use as reference. More references (up to 6) usually improve consistency.',
  },
  {
    q: 'Will AI images replace my photos automatically?',
    a: 'No. You review results and choose how to apply them — as featured image, add to gallery, or replace existing media.',
  },
  {
    q: 'What image styles are included?',
    a: 'Eight+ templates across Studio, Lifestyle, Brand, and Seasonal categories, plus fully custom prompts for complete creative control.',
  },
  {
    q: 'How do credits work?',
    a: 'Templates show credit cost (most use 1 credit; premium styles may use more). Subscribe via Plans in the app; generation consumes credits per Mantle billing.',
  },
  {
    q: 'Can I use Shotify AI without Instagram?',
    a: 'Yes. Photo generation, library, and shoppable video work independently. Instagram publishing is optional.',
  },
  {
    q: 'What Instagram account do I need?',
    a: 'Instagram Professional account — either Business or Creator. Personal accounts are not supported for the Graph API publishing flow.',
  },
  {
    q: 'How do shoppable videos appear on my store?',
    a: 'Publish a widget in the app, then add the Shoppable Videos theme block in your Shopify Theme Editor and select your widget handle.',
  },
  {
    q: 'Is my data shop-specific?',
    a: 'Yes. Connections, generations, widgets, and library entries are scoped to your Shopify shop. Secure multi-tenant architecture with GDPR compliance.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#faf9f7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#7c5cfc]/10 text-[#7c5cfc] border border-[#7c5cfc]/20">
            <LuCircleHelp size={12} /> FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1a1a1a]">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group bg-white rounded-2xl border border-[#e8e5e0] overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <span className="text-sm font-semibold text-[#1a1a1a] group-open:text-[#7c5cfc]">{faq.q}</span>
                <LuChevronDown size={18} className="text-[#9a9aaa] group-open:rotate-180 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-5">
                <p className="text-sm text-[#6b6b7b] leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}