import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blackstorm Experts | Expert Witness Search for Litigation Attorneys',
  description:
    'Blackstorm Experts sources, vets, and delivers qualified expert witnesses to litigation attorneys in 48-72 hours. Flat rate. No retainer. Satisfaction guaranteed.',
  metadataBase: new URL('https://www.getblackstorm.com'),
  alternates: {
    canonical: 'https://www.getblackstorm.com',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Blackstorm Experts | Expert Witness Search for Litigation Attorneys',
    description:
      'Blackstorm Experts sources, vets, and delivers qualified expert witnesses to litigation attorneys in 48-72 hours. Flat rate. No retainer. Satisfaction guaranteed.',
    url: 'https://www.getblackstorm.com',
    siteName: 'Blackstorm Experts',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blackstorm Experts | Expert Witness Search for Litigation Attorneys',
    description:
      'Blackstorm Experts sources, vets, and delivers qualified expert witnesses to litigation attorneys in 48-72 hours. Flat rate. No retainer. Satisfaction guaranteed.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
