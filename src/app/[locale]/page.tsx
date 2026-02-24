import { HeroSection } from '@/components/sections/hero';
import { MindsetSection } from '@/components/sections/mindset-section';
import { BasicsSection } from '@/components/sections/basics-section';
import { GuideSection } from '@/components/sections/guide-section';
import { AppShowcaseSection } from '@/components/sections/app-showcase-section';
import { BooksSection } from '@/components/sections/books-section';
import { PricingSection } from '@/components/sections/pricing-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MindsetSection />
      <BasicsSection />
      <GuideSection />
      <AppShowcaseSection />
      <BooksSection />
      <PricingSection />
    </>
  );
}
