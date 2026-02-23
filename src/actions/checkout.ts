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
              ? 'Find Your Soulmate — Der komplette Guide (PDF)'
              : 'Find Your Soulmate — The Complete Guide (PDF)',
            description: locale === 'de'
              ? '20 Kapitel mit Übungen, Journal-Prompts und mehr'
              : '20 chapters with exercises, journal prompts, and more',
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
