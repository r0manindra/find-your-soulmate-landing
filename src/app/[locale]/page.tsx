import { HeroSection } from '@/components/sections/hero';
import { GuideSection } from '@/components/sections/guide-section';
import { BooksSection } from '@/components/sections/books-section';
import { AppShowcaseSection } from '@/components/sections/app-showcase-section';
import { PricingSection } from '@/components/sections/pricing-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GuideSection />
      <BooksSection />
      <AppShowcaseSection />
      <PricingSection />
    </>
  );
}
