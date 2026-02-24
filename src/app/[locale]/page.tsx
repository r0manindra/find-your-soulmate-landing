import { HeroSection } from '@/components/sections/hero';
import { MindsetSection } from '@/components/sections/mindset-section';
import { BasicsSection } from '@/components/sections/basics-section';
import { GuideSection } from '@/components/sections/guide-section';
import { AppShowcaseSection } from '@/components/sections/app-showcase-section';
import { BooksSection } from '@/components/sections/books-section';
import { PricingSection } from '@/components/sections/pricing-section';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Charismo',
    description:
      'AI dating coach that teaches confidence, conversation, flirting and dating skills through a structured 20-chapter curriculum with 6 AI coach personalities.',
    url: 'https://charismo.app',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FlirtIQ',
    url: 'https://charismo.app',
    logo: 'https://charismo.app/icon.png',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
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
