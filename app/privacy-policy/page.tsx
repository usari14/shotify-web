import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowLeft, LuExternalLink } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Privacy Policy | Shotify AI",
  description:
    "Shotify AI privacy policy — how we collect, use, and protect merchant data inside the Shopify embedded app.",
};

const lastUpdated = "May 21, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-[#1a1a1a]">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#faf9f7]/80 border-b border-black/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-sm font-medium text-black/60 hover:text-[#7c5cfc] transition-colors"
          >
            <LuArrowLeft size={16} />
            Back to Shotify AI
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c5cfc] to-[#00c4cc] flex items-center justify-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#7c5cfc] to-[#00c4cc] bg-clip-text text-transparent">
              Shotify AI
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-10">
          <p className="text-sm text-black/40 mb-2">Last updated: {lastUpdated}</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-black/60 leading-relaxed max-w-2xl">
            Shotify AI is a Shopify embedded application. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you install and
            use our application through the Shopify platform.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-10">
          {/* 1. Overview */}
          <Section title="1. Overview">
            <P>
              {`Shotify AI ("we," "our," or "us") is committed to protecting the privacy of Shopify merchants ("you" or "your") who install and use our application. This policy describes our data handling practices in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) where applicable.`}
            </P>
            <P>
              By installing Shotify AI, you agree to the collection and use of information
              in accordance with this policy. If you do not agree, please do not install or
              use the application.
            </P>
          </Section>

          {/* 2. Information We Collect */}
          <Section title="2. Information We Collect">
            <SubTitle>2.1 Information from Shopify</SubTitle>
            <P>
              When you install Shotify AI through the Shopify App Store, we receive access
              to certain data from your Shopify store via the Shopify API. This may include:
            </P>
            <UL>
              <li>
                <strong>Store information:</strong> shop domain, store name, shop owner
                email, store timezone, currency, and primary locale.
              </li>
              <li>
                <strong>Product data:</strong> product titles, descriptions, images, variants,
                inventory levels, and product metadata — as needed for AI photo generation,
                library display, and product linking within shoppable video widgets.
              </li>
              <li>
                <strong>Shopify Files:</strong> access to read and write product media for
                applying generated images to your catalog.
              </li>
              <li>
                <strong>Theme data:</strong> limited access for our theme app extension
                (Shoppable Videos block) to render widgets on your storefront.
              </li>
            </UL>

            <SubTitle>2.2 Information You Provide Directly</SubTitle>
            <UL>
              <li>
                <strong>Custom prompts:</strong> text prompts you enter for AI image generation.
              </li>
              <li>
                <strong>Instagram account data:</strong> when you connect an Instagram
                Professional account via OAuth, we receive an access token, Instagram user
                ID, and account type — used solely for publishing posts from the app.
              </li>
              <li>
                <strong>Widget content:</strong> titles, subtitles, product links, and media
                you upload for shoppable video widgets.
              </li>
              <li>
                <strong>Support communications:</strong> any information you provide when
                contacting our support team.
              </li>
            </UL>

            <SubTitle>2.3 Automatically Collected Information</SubTitle>
            <UL>
              <li>
                <strong>Usage logs:</strong> generation job status, API request timestamps,
                feature usage patterns for analytics.
              </li>
              <li>
                <strong>Storefront analytics:</strong> anonymized interaction data from
                shoppable video widgets (views, clicks, product link taps).
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser type, and session
                information when you use the embedded app within Shopify admin.
              </li>
            </UL>
          </Section>

          {/* 3. How We Use Your Information */}
          <Section title="3. How We Use Your Information">
            <P>We use the collected information for the following purposes:</P>
            <UL>
              <li>{`To provide and maintain our application's core functionality.`}</li>
              <li>
                To process AI image generation requests and deliver results to your
                Shopify product media.
              </li>
              <li>To sync shoppable video widgets to your storefront via Shopify metaobjects.</li>
              <li>To publish content to your connected Instagram account at your direction.</li>
              <li>To display generation history and usage analytics within the app.</li>
              <li>To communicate with you about your account, updates, and support requests.</li>
              <li>To improve our application, debug issues, and develop new features.</li>
              <li>To comply with legal obligations and enforce our terms of service.</li>
            </UL>
            <P>
              We do not use your data to train AI models. Your product images, custom prompts,
              and generated outputs remain your property and are not used for model improvement
              unless you explicitly opt into such a program (which does not currently exist).
            </P>
          </Section>

          {/* 4. AI Image Generation & Third-Party Services */}
          <Section title="4. AI Image Generation & Third-Party Services">
            <P>
              Shotify AI relies on the following third-party services to deliver core
              functionality. Each sub-processor is bound by data processing agreements
              consistent with this policy:
            </P>
            <UL>
              <li>
                <strong>Mantle (billing & AI credits):</strong> Handles subscription
                management, credit metering, and AI image generation processing. Mantle
                receives your shop identifier and generation requests for billing and
                processing purposes.
              </li>
              <li>
                <strong>Shopify:</strong> As a Shopify embedded app, we operate within the
                Shopify platform. All store data we access is transmitted via the Shopify
                {` API and subject to Shopify's own privacy and data handling policies.`}
              </li>
              <li>
                <strong>Meta / Instagram:</strong> {`When you connect Instagram, Meta's`}
                Graph API is used for authentication and content publishing. Your Instagram
                access token is stored securely and only used for publishing at your direction.
              </li>
              <li>
                <strong>Gadget (hosting platform):</strong> Shotify AI is built on the Gadget
                platform, which provides our application hosting, database, and
                infrastructure. Gadget processes data as our infrastructure provider under
                strict data protection terms.
              </li>
            </UL>
            <P>
              We do not sell your data to third parties. We do not share your product images
              or generation data with any party not essential to delivering the service.
            </P>
          </Section>

          {/* 5. Data Retention */}
          <Section title="5. Data Retention">
            <P>We retain your data according to the following schedule:</P>
            <UL>
              <li>
                <strong>Product data, library images, and generation history:</strong>{" "}
                Retained for the duration of your app installation plus 30 days after
                uninstallation, after which it is permanently deleted.
              </li>
              <li>
                <strong>Instagram tokens:</strong> Stored only while connected; deleted
                immediately upon disconnecting or uninstalling the app.
              </li>
              <li>
                <strong>Shoppable video widgets:</strong> Retained while published; removed
                from Shopify metaobjects upon unpublishing or app uninstallation.
              </li>
              <li>
                <strong>Analytics and usage logs:</strong> Retained in anonymized form for up
                to 24 months for business intelligence; identifiable logs deleted 90 days
                after uninstallation.
              </li>
              <li>
                <strong>Billing records:</strong> Retained as required by applicable law for
                tax and accounting purposes (typically 7 years).
              </li>
            </UL>
          </Section>

          {/* 6. Data Security */}
          <Section title="6. Data Security">
            <P>
              We implement industry-standard security measures to protect your data:
            </P>
            <UL>
              <li>
                All data transmission is encrypted using TLS (Transport Layer Security).
              </li>
              <li>
                Instagram OAuth tokens are encrypted at rest and transmitted only over
                secure channels.
              </li>
              <li>
                Shop-scoped data isolation ensures that your data is only accessible within
                the context of your Shopify store.
              </li>
              <li>
                Access to production data is restricted to authorized personnel and
                protected by multi-factor authentication.
              </li>
              <li>
                Regular security reviews and dependency updates are performed to address
                vulnerabilities.
              </li>
            </UL>
            <P>
              While we strive to protect your information, no method of electronic storage
              or transmission is 100% secure. We cannot guarantee absolute security.
            </P>
          </Section>

          {/* 7. Your Rights (GDPR & CCPA) */}
          <Section title="7. Your Rights">
            <P>
              Depending on your jurisdiction, you may have the following rights regarding
              your personal data:
            </P>
            <UL>
              <li>
                <strong>Access:</strong> Request a copy of the personal data we hold about
                your store.
              </li>
              <li>
                <strong>Rectification:</strong> Request correction of inaccurate or
                incomplete data.
              </li>
              <li>
                {`<strong>Erasure:</strong> Request deletion of your data ("right to be forgotten"). Uninstalling the app triggers automatic deletion per our retention schedule.`}
              </li>
              <li>
                <strong>Restriction:</strong> Request limitation of processing under certain
                circumstances.
              </li>
              <li>
                <strong>Portability:</strong> Request your data in a structured,
                machine-readable format.
              </li>
              <li>
                <strong>Objection:</strong> Object to processing based on legitimate
                interests.
              </li>
            </UL>
            <P>
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:support@shotify.ai"
                className="text-[#7c5cfc] hover:underline"
              >
                support@shotify.ai
              </a>
              . We will respond within 30 days as required by applicable law. You also have
              the right to lodge a complaint with your local data protection authority.
            </P>
          </Section>

          {/* 8. Cookies & Tracking */}
          <Section title="8. Cookies & Tracking">
            <P>
              {`As an embedded Shopify application, Shotify AI operates within the Shopify admin iframe and relies on Shopify's session management. We do not set our own cookies for marketing or tracking purposes.`}
            </P>
            <P>
              The shoppable video storefront component may collect anonymized interaction
              data (views, clicks) for analytics purposes. This data does not identify
              individual visitors and is only used to provide widget performance metrics
              within the app.
            </P>
            <P>
              We do not use third-party advertising cookies, tracking pixels, or
              fingerprinting technologies.
            </P>
          </Section>

          {/* 9. GDPR Webhook Compliance */}
          <Section title="9. Shopify GDPR Webhooks">
            <P>
              As a Shopify app, we subscribe to mandatory GDPR webhooks as required by
              the Shopify platform:
            </P>
            <UL>
              <li>
                <strong>Customers Data Request:</strong> We will provide any customer
                personal data we hold within the required timeframe, though we do not
                directly collect customer personal data.
              </li>
              <li>
                <strong>Customers Redact:</strong> We will delete any customer data upon
                receiving this webhook.
              </li>
              <li>
                <strong>Shop Redact:</strong> Upon app uninstallation, we receive a shop
                redact webhook and permanently delete all shop-scoped data per our retention
                policy within 48 hours.
              </li>
            </UL>
          </Section>

          {/* 10. Children's Privacy */}
          <Section title="10. Children's Privacy">
            <P>
              Shotify AI is a business-to-business application designed for Shopify
              merchants. We do not knowingly collect personal information from children
              under the age of 16. If we become aware that we have inadvertently collected
              such information, we will delete it promptly.
            </P>
          </Section>

          {/* 11. International Data Transfers */}
          <Section title="11. International Data Transfers">
            <P>
              Shotify AI is hosted on infrastructure that may process data in multiple
              regions. By using our application, you acknowledge that your data may be
              transferred to and processed in countries outside your jurisdiction. We ensure
              that any such transfers comply with applicable data protection laws through
              standard contractual clauses or equivalent safeguards.
            </P>
          </Section>

          {/* 12. Changes to This Policy */}
          <Section title="12. Changes to This Privacy Policy">
            <P>
              We may update this Privacy Policy from time to time. We will notify you of
              material changes by:
            </P>
            <UL>
              <li>Posting the updated policy within the app.</li>
              <li>Sending an email to the store owner email associated with your Shopify account.</li>
              <li>{`Updating the "Last updated" date at the top of this page.`}</li>
            </UL>
            <P>
              Continued use of Shotify AI after changes take effect constitutes acceptance
              of the revised policy.
            </P>
          </Section>

          {/* 13. Contact */}
          <Section title="13. Contact Us">
            <P>
              If you have questions about this Privacy Policy or our data practices, please
              contact us:
            </P>
            <div className="bg-white rounded-2xl border border-black/5 p-6 mt-4 space-y-3 not-prose">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold w-16 text-black/50">Email:</span>
                <a
                  href="mailto:support@shotify.ai"
                  className="text-[#7c5cfc] hover:underline inline-flex items-center gap-1"
                >
                  support@shotify.ai
                  <LuExternalLink size={12} />
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="font-semibold w-16 text-black/50 shrink-0">App:</span>
                <span>
                  {`Shotify AI — Available on the Shopify App Store. Search for "Shotify AI" in your Shopify admin.`}
                </span>
              </div>
            </div>
            <P>
              {`For data subject requests, please use the subject line "Data Subject Request" to ensure prompt routing to our compliance team.`}
            </P>
          </Section>
        </div>

        {/* Back CTA */}
        <div className="mt-16 pt-8 border-t border-black/10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c5cfc] to-[#00c4cc] text-white font-semibold text-sm shadow-lg shadow-[#7c5cfc]/20 hover:shadow-xl hover:shadow-[#7c5cfc]/30 transition-all"
          >
            <LuArrowLeft size={16} />
            Back to Shotify AI
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black/30">
            &copy; {new Date().getFullYear()} Shotify AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-[#7c5cfc] font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-black/30 hover:text-black/60 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:support@shotify.ai"
              className="text-xs text-black/30 hover:text-black/60 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Reusable Section Components ── */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 text-[#1a1a1a]">{title}</h2>
      {children}
    </section>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-semibold mb-2 mt-5 text-black/70">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] leading-relaxed text-black/65 mb-4">{children}</p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2.5 mb-4 pl-5">
      {children}
    </ul>
  );
}