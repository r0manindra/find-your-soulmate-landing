import { useTranslations, useLocale } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('legal.privacy');
  const locale = useLocale();

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose dark:prose-invert">
        <h1>{t('title')}</h1>
        <p className="text-neutral-500">{t('lastUpdated', { date: '2026-02-23' })}</p>

        <h2>{locale === 'de' ? '1. Überblick' : '1. Overview'}</h2>
        <p>
          {locale === 'de'
            ? 'Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung informieren wir Sie darüber, wie wir Ihre Daten verarbeiten.'
            : 'Protecting your personal data is important to us. In this privacy policy, we inform you about how we process your data.'}
        </p>

        <h2>{locale === 'de' ? '2. Verantwortlicher' : '2. Controller'}</h2>
        <p>
          FlirtIQ<br />
          {locale === 'de' ? 'Musterstraße 1' : 'Sample Street 1'}<br />
          12345 Berlin, {locale === 'de' ? 'Deutschland' : 'Germany'}<br />
          E-Mail: privacy@flirtiq.app
        </p>

        <h2>{locale === 'de' ? '3. Erhobene Daten' : '3. Data Collection'}</h2>
        <p>
          {locale === 'de'
            ? 'Beim Besuch unserer Website werden automatisch Informationen erfasst (Server-Logfiles). Diese Informationen umfassen Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse und Zeitpunkt des Zugriffs.'
            : 'When visiting our website, information is automatically collected (server log files). This includes browser type, operating system, referrer URL, IP address, and time of access.'}
        </p>

        <h2>{locale === 'de' ? '4. Zahlungsabwicklung' : '4. Payment Processing'}</h2>
        <p>
          {locale === 'de'
            ? 'Für die Zahlungsabwicklung nutzen wir Stripe. Ihre Zahlungsdaten werden direkt von Stripe verarbeitet. Wir haben keinen Zugriff auf Ihre vollständigen Kreditkartendaten.'
            : 'For payment processing, we use Stripe. Your payment data is processed directly by Stripe. We do not have access to your complete credit card details.'}
        </p>

        <h2>{locale === 'de' ? '5. Cookies' : '5. Cookies'}</h2>
        <p>
          {locale === 'de'
            ? 'Unsere Website verwendet nur technisch notwendige Cookies. Diese sind für den Betrieb der Website erforderlich.'
            : 'Our website only uses technically necessary cookies. These are required for the operation of the website.'}
        </p>

        <h2>{locale === 'de' ? '6. Ihre Rechte' : '6. Your Rights'}</h2>
        <p>
          {locale === 'de'
            ? 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Kontaktieren Sie uns unter privacy@flirtiq.app.'
            : 'You have the right to access, rectify, delete, restrict processing, data portability, and object. Contact us at privacy@flirtiq.app.'}
        </p>
      </div>
    </section>
  );
}
