import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Templates from '@/components/Templates';
import ShoppableVideo from '@/components/ShoppableVideo';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <Templates />
      <ShoppableVideo />
      <Benefits />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Footer />
    </>
  );
}
