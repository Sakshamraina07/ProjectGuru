import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Problem from '@/components/Problem/Problem';
import Solution from '@/components/Solution/Solution';
import Features from '@/components/Features/Features';
import Comparison from '@/components/Comparison/Comparison';
import Pricing from '@/components/Pricing/Pricing';
import Testimonials from '@/components/Testimonials/Testimonials';
import Guarantee from '@/components/Guarantee/Guarantee';
import FAQ from '@/components/FAQ/FAQ';
import FinalCTA from '@/components/FinalCTA/FinalCTA';
import Footer from '@/components/Footer/Footer';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AnimatedSection><Problem /></AnimatedSection>
      <AnimatedSection><Solution /></AnimatedSection>
      <AnimatedSection><Features /></AnimatedSection>
      <AnimatedSection><Comparison /></AnimatedSection>
      <AnimatedSection><Pricing /></AnimatedSection>
      <AnimatedSection><Testimonials /></AnimatedSection>
      <AnimatedSection><Guarantee /></AnimatedSection>
      <AnimatedSection><FAQ /></AnimatedSection>
      <AnimatedSection><FinalCTA /></AnimatedSection>
      <Footer />
    </main>
  );
}