import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { SearchModalProvider } from '@/components/SearchModal'

export const metadata: Metadata = {
  title: 'Blackstorm Experts | Expert Witness Search for Litigation Attorneys',
  description:
    'Blackstorm Experts sources, vets, and delivers qualified expert witnesses to litigation attorneys in 48-72 hours. Flat rate. No payment until we deliver. Satisfaction guaranteed.',
  metadataBase: new URL('https://www.blackstormexperts.com'),
  alternates: {
    canonical: 'https://www.blackstormexperts.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Blackstorm Experts | Expert Witness Search for Litigation Attorneys',
    description:
      'Blackstorm Experts sources, vets, and delivers qualified expert witnesses to litigation attorneys in 48-72 hours. Flat rate. No payment until we deliver. Satisfaction guaranteed.',
    url: 'https://www.blackstormexperts.com',
    siteName: 'Blackstorm Experts',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blackstorm Experts | Expert Witness Search for Litigation Attorneys',
    description:
      'Blackstorm Experts sources, vets, and delivers qualified expert witnesses to litigation attorneys in 48-72 hours. Flat rate. No payment until we deliver. Satisfaction guaranteed.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <SearchModalProvider>{children}</SearchModalProvider>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-X7J6Z156Q3" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X7J6Z156Q3');
        `}
      </Script>
    </html>
  )
}
