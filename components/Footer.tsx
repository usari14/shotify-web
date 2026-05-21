import { SiInstagram, SiYoutube, SiX, SiTiktok } from 'react-icons/si';
import { LuMail } from 'react-icons/lu';

const footerLinks: Record<
  string,
  { label: string; href: string }[]
> = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Templates', href: '/#templates' },
    { label: 'Shoppable Video', href: '/#shoppable-video' },
    { label: 'Instagram', href: '/#features' },
    { label: 'FAQ', href: '/#faq' },
  ],
  Resources: [
    { label: 'Help Center', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Contact', href: 'mailto:support@shotify.ai' },
    { label: 'Legal', href: '/privacy-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7c5cfc] to-[#00c4cc] flex items-center justify-center shadow-lg shadow-[#7c5cfc]/20">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#7c5cfc] to-[#00c4cc] bg-clip-text text-transparent">
                Shotify AI
              </span>
            </a>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed mb-5">
              AI product photography, shoppable video widgets, and Instagram publishing — all inside your Shopify admin. Install from the Shopify App Store.
            </p>
            <div className="flex items-center gap-3 mb-5">
              {[SiInstagram, SiYoutube, SiX, SiTiktok].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/50 hover:bg-[#7c5cfc]/20 hover:text-[#7c5cfc] transition-all">
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <a href="mailto:support@shotify.ai" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
              <LuMail size={14} />
              support@shotify.ai
            </a>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 space-y-4">
          <p className="text-xs text-white/40 leading-relaxed max-w-3xl">
            Shotify AI is a third-party Shopify application. Product images are generated using AI;
            you are responsible for reviewing accuracy, trademarks, and advertising compliance before
            publishing. Instagram and Meta are trademarks of their respective owners. Shopify is a
            trademark of Shopify Inc.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Shotify AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}