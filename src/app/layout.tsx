import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import QuoteModal from '@/components/layout/QuoteModal'
import { BUSINESS } from '@/lib/constants'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
  preload: true,
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: `${BUSINESS.name} — IT Sales, Repair & Corporate Solutions in Hyderabad`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    'Kiwi Technologies — Hyderabad\'s trusted IT partner for laptop/desktop sales & repair, CCTV installation, printer service, and corporate AMC. 5.0★ rated Google Reviews. Medipally, Hyderabad.',
  keywords: [
    'computer repair Hyderabad',
    'laptop repair Medipally',
    'CCTV installation Hyderabad',
    'computer AMC Hyderabad',
    'laptop sales Hyderabad',
    'printer repair Medipally',
    'IT support Hyderabad',
    'desktop repair Hyderabad',
    'Kiwi Technologies',
  ],
  authors: [{ name: BUSINESS.name, url: BUSINESS.domain }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BUSINESS.domain,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} — IT Sales, Repair & Corporate Solutions in Hyderabad`,
    description:
      'Trusted IT sales, repair, CCTV, and AMC solutions in Medipally, Hyderabad. 5.0★ Google Reviews.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: BUSINESS.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS.name} — Hyderabad IT Partner`,
    description: 'IT sales, repair, CCTV & AMC. 5.0★ Google Reviews. Medipally, Hyderabad.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'NJQO2oFEyrRyJs17QUlNgDNxd_tJPVoXzxJsP4EBKSw',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="NJQO2oFEyrRyJs17QUlNgDNxd_tJPVoXzxJsP4EBKSw" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0B1F3A" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Medipally, Hyderabad" />
        <meta name="geo.position" content="17.4688;78.5898" />
        <meta name="ICBM" content="17.4688, 78.5898" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${BUSINESS.domain}/#business`,
              name: BUSINESS.name,
              description: BUSINESS.tagline,
              url: BUSINESS.domain,
              telephone: BUSINESS.phone,
              email: BUSINESS.email,
              image: `${BUSINESS.domain}/og-image.jpg`,
              logo: `${BUSINESS.domain}/logo.svg`,
              priceRange: '₹₹',
              currenciesAccepted: 'INR',
              paymentAccepted: 'Cash, UPI, Card',
              address: {
                '@type': 'PostalAddress',
                streetAddress: BUSINESS.address.street,
                addressLocality: BUSINESS.address.area,
                addressRegion: BUSINESS.address.state,
                postalCode: BUSINESS.address.pin,
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 17.4688,
                longitude: 78.5898,
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: BUSINESS.rating,
                reviewCount: BUSINESS.reviewCount,
                bestRating: '5',
                worstRating: '1',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                  opens: '09:00',
                  closes: '21:30',
                },
              ],
              sameAs: [
                BUSINESS.social.google,
                BUSINESS.social.instagram,
                BUSINESS.social.facebook,
              ],
              hasMap: BUSINESS.googleMapsLink,
              serviceArea: {
                '@type': 'City',
                name: 'Hyderabad',
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <QuoteModal />
      </body>
    </html>
  )
}
