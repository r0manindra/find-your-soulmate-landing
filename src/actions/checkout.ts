'use server';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function createCheckoutSession(locale: string) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: locale === 'de'
              ? 'Charismo Premium — Dein KI-Dating-Coach'
              : 'Charismo Premium — Your AI Dating Coach',
            description: locale === 'de'
              ? 'Alle 20 Kapitel, 6 KI-Coaches, personalisierte Buchempfehlungen und mehr'
              : 'All 20 chapters, 6 AI coaches, personalized book recommendations, and more',
          },
          unit_amount: 499, // €4.99 in cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/course/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}#pricing`,
    locale: locale === 'de' ? 'de' : 'en',
  });

  return { url: session.url };
}
