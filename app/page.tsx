import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import TrustSignals from '@/components/TrustSignals'
import TrustBar from '@/components/TrustBar'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import ModernApproach from '@/components/ModernApproach'
import Guarantee from '@/components/Guarantee'
import PracticeAreas from '@/components/PracticeAreas'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Blackstorm Experts',
  url: 'https://www.getblackstorm.com',
  description: 'Expert witness sourcing service for litigation attorneys',
  telephone: '352-256-1603',
  email: 'coby@blackstormexperts.com',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to find an expert witness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blackstorm Experts delivers vetted expert witness candidates within 48 to 72 hours of receiving your search request.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does expert witness sourcing cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blackstorm Experts charges a single flat rate per search with no retainer and no hidden fees. You only pay when we deliver.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if I am not satisfied with the expert witnesses provided?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are not satisfied with the candidates we provide, we go back out and source more at no additional charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of cases does Blackstorm Experts handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Blackstorm Experts sources expert witnesses across all areas of litigation including medical malpractice, personal injury, products liability, forensic economics, construction defect, employment law, and many more.',
      },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <Testimonials />
        <TrustSignals />
        <TrustBar />
        <Problem />
        <HowItWorks />
        <ModernApproach />
        <Guarantee />
        <PracticeAreas />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
