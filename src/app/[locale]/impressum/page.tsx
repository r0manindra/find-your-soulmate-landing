import { useTranslations, useLocale } from 'next-intl';

export default function ImpressumPage() {
  const t = useTranslations('legal.impressum');
  const locale = useLocale();

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
        <h1>{t('title')}</h1>
        <p>{t('content')}</p>

        <h2>{locale === 'de' ? 'Kontakt' : 'Contact'}</h2>
        <p>
          FlirtIQ<br />
          {locale === 'de' ? 'Musterstraße 1' : 'Sample Street 1'}<br />
          12345 Berlin<br />
          {locale === 'de' ? 'Deutschland' : 'Germany'}
        </p>
        <p>
          E-Mail: hello@flirtiq.app
        </p>

        <h2>{locale === 'de' ? 'Verantwortlich für den Inhalt' : 'Responsible for Content'}</h2>
        <p>
          {locale === 'de'
            ? 'Verantwortlich gemäß § 55 Abs. 2 RStV'
            : 'Responsible according to § 55 Abs. 2 RStV'}
        </p>
      </div>
    </section>
  );
}
