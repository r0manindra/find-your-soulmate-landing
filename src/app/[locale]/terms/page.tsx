import { useTranslations, useLocale } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('legal.terms');
  const locale = useLocale();

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
        <h1>{t('title')}</h1>
        <p className="text-neutral-500">{t('lastUpdated', { date: '2026-02-23' })}</p>

        <h2>{locale === 'de' ? '1. Geltungsbereich' : '1. Scope'}</h2>
        <p>
          {locale === 'de'
            ? 'Diese Allgemeinen Geschäftsbedingungen gelten für den Kauf digitaler Produkte über unsere Website flirtiq.app.'
            : 'These Terms and Conditions apply to the purchase of digital products via our website flirtiq.app.'}
        </p>

        <h2>{locale === 'de' ? '2. Vertragspartner' : '2. Contracting Party'}</h2>
        <p>
          FlirtIQ<br />
          {locale === 'de' ? 'Musterstraße 1' : 'Sample Street 1'}<br />
          12345 Berlin, {locale === 'de' ? 'Deutschland' : 'Germany'}
        </p>

        <h2>{locale === 'de' ? '3. Digitale Produkte' : '3. Digital Products'}</h2>
        <p>
          {locale === 'de'
            ? 'Nach erfolgreichem Kauf erhalten Sie einen Download-Link für das PDF-Produkt. Dieser Link ist für den persönlichen Gebrauch bestimmt.'
            : 'After successful purchase, you will receive a download link for the PDF product. This link is intended for personal use.'}
        </p>

        <h2>{locale === 'de' ? '4. Preise und Zahlung' : '4. Prices and Payment'}</h2>
        <p>
          {locale === 'de'
            ? 'Alle Preise sind Endpreise inklusive gesetzlicher Mehrwertsteuer. Die Zahlung erfolgt über Stripe.'
            : 'All prices are final prices including statutory VAT. Payment is processed via Stripe.'}
        </p>

        <h2>{locale === 'de' ? '5. Widerrufsrecht' : '5. Right of Withdrawal'}</h2>
        <p>
          {locale === 'de'
            ? 'Sie haben das Recht, binnen 30 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Kontaktieren Sie uns unter hello@flirtiq.app.'
            : 'You have the right to withdraw from this contract within 30 days without giving any reason. Contact us at hello@flirtiq.app.'}
        </p>

        <h2>{locale === 'de' ? '6. Haftung' : '6. Liability'}</h2>
        <p>
          {locale === 'de'
            ? 'Unsere Inhalte dienen ausschließlich der allgemeinen Information und Unterhaltung. Sie stellen keine professionelle Beratung dar.'
            : 'Our content is for general information and entertainment purposes only. It does not constitute professional advice.'}
        </p>
      </div>
    </section>
  );
}
