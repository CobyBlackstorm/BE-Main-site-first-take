import Link from 'next/link'
import { SPECIALTIES } from '@/lib/expertData'

type TextSegment =
  | { kind: 'text'; value: string }
  | { kind: 'specialty'; value: string; slug: string }
  | { kind: 'page'; value: string; href: string }
  | { kind: 'search'; value: string }

const PAGE_PHRASES: { phrase: string; href: string }[] = [
  { phrase: 'expert witness fee structures', href: '/blog/expert-witness-fees-cost-structure' },
  {
    phrase: 'how to compare expert witness fees and qualifications',
    href: '/blog/how-to-compare-expert-witness-fees-and-qualifications',
  },
  {
    phrase: 'how to negotiate expert witness fees',
    href: '/blog/negotiating-expert-witness-fees',
  },
  { phrase: 'Rule 26 pre-retention checklist', href: '/blog/rule-26-expert-disclosure-pre-retention-checklist' },
  { phrase: 'expert witness deposition preparation', href: '/blog/expert-witness-deposition-preparation' },
  { phrase: 'Federal Rule of Evidence 702', href: '/blog/federal-rule-of-evidence-702' },
  { phrase: 'testifying vs consulting expert', href: '/blog/testifying-vs-consulting-expert' },
  { phrase: 'what is an expert witness', href: '/blog/what-is-an-expert-witness' },
  { phrase: 'life care planner expert witness', href: '/life-care-planner-expert-witness' },
  { phrase: 'life care plan cost calculation expert', href: '/life-care-plan-cost-calculation-expert' },
  { phrase: 'life care plan rebuttal expert', href: '/life-care-plan-rebuttal-expert' },
  { phrase: 'life care plan calculation', href: '/blog/life-care-plan-calculation-future-medical-costs' },
  { phrase: 'life care plan rebuttal', href: '/blog/life-care-plan-rebuttal-defense' },
  { phrase: 'how to challenge a life care plan', href: '/blog/how-to-challenge-a-life-care-plan' },
  {
    phrase: 'what does a life care planner testify to',
    href: '/blog/what-does-a-life-care-planner-testify-to',
  },
  {
    phrase: 'life care planner deposition outline',
    href: '/blog/life-care-planner-deposition-outline',
  },
  {
    phrase: 'certified vs nurse life care planner',
    href: '/blog/certified-vs-nurse-life-care-planner',
  },
  { phrase: 'TBI expert witness', href: '/tbi-expert-witness' },
  {
    phrase: 'forensic electrical engineer expert witness',
    href: '/forensic-electrical-engineer-expert-witness',
  },
  { phrase: 'product fire and electrical engineering', href: '/blog/product-fire-electrical-engineering-expert-witness' },
  { phrase: 'expert witness specialties', href: '/expert-witness' },
  { phrase: 'motion in limine to exclude expert testimony', href: '/blog/motion-in-limine-to-exclude-expert-testimony' },
  { phrase: 'motion in limine', href: '/blog/motion-in-limine-to-exclude-expert-testimony' },
  { phrase: 'Frye vs. Daubert', href: '/blog/frye-vs-daubert' },
  { phrase: 'Frye vs Daubert', href: '/blog/frye-vs-daubert' },
  { phrase: 'Daubert or Frye', href: '/blog/frye-vs-daubert' },
  { phrase: 'Daubert standard', href: '/blog/daubert-standard' },
  { phrase: 'qualifying an expert witness', href: '/blog/qualifying-an-expert-witness' },
  { phrase: 'expert witness search', href: '/expert-witness-search' },
].sort((a, b) => b.phrase.length - a.phrase.length)

const SPECIALTY_PHRASES: { phrase: string; slug: string }[] = [
  { phrase: 'life care planner expert witness', slug: 'life-care-planning' },
  { phrase: 'life care planners', slug: 'life-care-planning' },
  { phrase: 'life care planner', slug: 'life-care-planning' },
  { phrase: 'life care plans', slug: 'life-care-planning' },
  { phrase: 'life care plan', slug: 'life-care-planning' },
  { phrase: 'rebuttal life care planner', slug: 'life-care-planning' },
  { phrase: 'catastrophic injury cases', slug: 'personal-injury' },
  { phrase: 'catastrophic injury case', slug: 'personal-injury' },
  { phrase: 'catastrophic injury matter', slug: 'personal-injury' },
  { phrase: 'catastrophic injury', slug: 'personal-injury' },
  { phrase: 'orthopedic surgery expert witness', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic expert witness', slug: 'orthopedic-surgery' },
  { phrase: 'treating orthopedic surgeon', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic surgeon', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic malpractice', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic billing', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic treatment', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic cases', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic bills', slug: 'orthopedic-surgery' },
  { phrase: 'medical malpractice matters', slug: 'medical-malpractice' },
  { phrase: 'medical malpractice matter', slug: 'medical-malpractice' },
  { phrase: 'wrongful death damages', slug: 'wrongful-death' },
  { phrase: 'wrongful death claims', slug: 'wrongful-death' },
  { phrase: 'wrongful death litigation', slug: 'wrongful-death' },
  { phrase: 'wrongful death cases', slug: 'wrongful-death' },
  { phrase: 'wrongful death case', slug: 'wrongful-death' },
  { phrase: 'wrongful death matter', slug: 'wrongful-death' },
  { phrase: 'pharmacology expert witness', slug: 'pharmacology' },
  { phrase: 'pharmacology expert', slug: 'pharmacology' },
  { phrase: 'pharmacology cases', slug: 'pharmacology' },
  { phrase: 'pharmacology testimony', slug: 'pharmacology' },
  { phrase: 'pharmacology', slug: 'pharmacology' },
  { phrase: 'pharmacologist', slug: 'pharmacology' },
  { phrase: 'forensic toxicologist', slug: 'toxicology' },
  { phrase: 'toxicology', slug: 'toxicology' },
  { phrase: 'construction case', slug: 'construction-defect' },
  { phrase: 'fire case', slug: 'fire-investigation' },
  { phrase: 'premises case', slug: 'premises-liability-security' },
  { phrase: 'security expert', slug: 'premises-liability-security' },
  { phrase: 'fire investigation', slug: 'fire-investigation' },
  { phrase: 'civil engineers', slug: 'civil-engineering' },
  { phrase: 'civil engineer', slug: 'civil-engineering' },
  { phrase: 'electrical failure', slug: 'electrical-engineering' },
  { phrase: 'premises security', slug: 'premises-liability-security' },
  { phrase: 'trucking expert witness', slug: 'trucking-transportation' },
  { phrase: 'trucking experts', slug: 'trucking-transportation' },
  { phrase: 'trucking expert', slug: 'trucking-transportation' },
  { phrase: 'trucking safety', slug: 'trucking-transportation' },
  { phrase: 'emergency medicine expert witness', slug: 'emergency-medicine' },
  { phrase: 'emergency medicine experts', slug: 'emergency-medicine' },
  { phrase: 'emergency medicine expert', slug: 'emergency-medicine' },
  { phrase: 'emergency medicine malpractice', slug: 'emergency-medicine' },
  { phrase: 'emergency medicine cases', slug: 'emergency-medicine' },
  { phrase: 'emergency medicine', slug: 'emergency-medicine' },
  { phrase: 'emergency physician', slug: 'emergency-medicine' },
  { phrase: 'medical malpractice experts', slug: 'medical-malpractice' },
  { phrase: 'medical malpractice', slug: 'medical-malpractice' },
  { phrase: 'cardiologist', slug: 'cardiology' },
  { phrase: 'neurologist', slug: 'neurology' },
  { phrase: 'anesthesia billing', slug: 'anesthesiology' },
  { phrase: 'anesthesiologists', slug: 'anesthesiology' },
  { phrase: 'anesthesiologist', slug: 'anesthesiology' },
  { phrase: 'anesthesia', slug: 'anesthesiology' },
  { phrase: 'elder abuse expert witness', slug: 'nursing-home-elder-abuse' },
  { phrase: 'elder abuse expert', slug: 'nursing-home-elder-abuse' },
  { phrase: 'elder abuse cases', slug: 'nursing-home-elder-abuse' },
  { phrase: 'elder abuse case', slug: 'nursing-home-elder-abuse' },
  { phrase: 'elder abuse', slug: 'nursing-home-elder-abuse' },
  { phrase: 'nursing home', slug: 'nursing-home-elder-abuse' },
  { phrase: 'construction defect expert witness', slug: 'construction-defect' },
  { phrase: 'construction defect expert', slug: 'construction-defect' },
  { phrase: 'construction defect cases', slug: 'construction-defect' },
  { phrase: 'construction defect case', slug: 'construction-defect' },
  { phrase: 'construction defect litigation', slug: 'construction-defect' },
  { phrase: 'construction defect', slug: 'construction-defect' },
  { phrase: 'structural engineers', slug: 'structural-engineering' },
  { phrase: 'structural engineer', slug: 'structural-engineering' },
  { phrase: 'structural engineering', slug: 'structural-engineering' },
  { phrase: 'accident reconstruction expert witness', slug: 'accident-reconstruction' },
  { phrase: 'accident reconstruction experts', slug: 'accident-reconstruction' },
  { phrase: 'accident reconstructionist', slug: 'accident-reconstruction' },
  { phrase: 'accident reconstruction', slug: 'accident-reconstruction' },
  { phrase: 'human factors expert witness', slug: 'human-factors' },
  { phrase: 'human factors experts', slug: 'human-factors' },
  { phrase: 'human factors expert', slug: 'human-factors' },
  { phrase: 'human factors testimony', slug: 'human-factors' },
  { phrase: 'human factors analysis', slug: 'human-factors' },
  { phrase: 'human factors', slug: 'human-factors' },
  { phrase: 'biomechanics', slug: 'biomechanics' },
  { phrase: 'premises liability', slug: 'premises-liability-security' },
  { phrase: 'electrocution expert witness', slug: 'electrical-engineering' },
  { phrase: 'electrocution cases', slug: 'electrical-engineering' },
  { phrase: 'electrocution case', slug: 'electrical-engineering' },
  { phrase: 'electrical engineering expert witness', slug: 'electrical-engineering' },
  { phrase: 'electrical engineering expert', slug: 'electrical-engineering' },
  { phrase: 'electrical engineers', slug: 'electrical-engineering' },
  { phrase: 'electrical engineer', slug: 'electrical-engineering' },
  { phrase: 'electrical engineering', slug: 'electrical-engineering' },
  { phrase: 'product liability cases', slug: 'products-liability-engineering' },
  { phrase: 'product liability case', slug: 'products-liability-engineering' },
  { phrase: 'product liability litigation', slug: 'products-liability-engineering' },
  { phrase: 'product liability', slug: 'products-liability-engineering' },
  { phrase: 'fire investigator', slug: 'fire-investigation' },
  { phrase: 'fire cases', slug: 'fire-investigation' },
  { phrase: 'forensic accountants', slug: 'forensic-accounting' },
  { phrase: 'forensic accountant', slug: 'forensic-accounting' },
  { phrase: 'forensic accounting', slug: 'forensic-accounting' },
  { phrase: 'forensic economists', slug: 'forensic-economics' },
  { phrase: 'forensic economist', slug: 'forensic-economics' },
  { phrase: 'economic experts', slug: 'forensic-economics' },
  { phrase: 'economic expert', slug: 'forensic-economics' },
  { phrase: 'personal injury cases', slug: 'personal-injury' },
  { phrase: 'personal injury case', slug: 'personal-injury' },
  { phrase: 'personal injury matter', slug: 'personal-injury' },
  { phrase: 'personal injury', slug: 'personal-injury' },
  ...SPECIALTIES.map((specialty) => ({
    phrase: specialty.name.toLowerCase(),
    slug: specialty.slug,
  })),
].sort((a, b) => b.phrase.length - a.phrase.length)

const SEARCH_PHRASES = [
  'Blackstorm Experts sources vetted pharmacology, pharmacy, and toxicology experts for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted trucking safety, FMCSA compliance, and heavy vehicle reconstruction experts for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted emergency medicine experts for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted life care planners and forensic economists for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted medical billing and coding experts for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted nursing, long-term care, and elder abuse experts for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted construction and engineering experts for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted accident reconstruction experts for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted human factors experts for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted electrical engineering and electrocution experts for plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts sources vetted billing and coding experts for both plaintiff and defense counsel, typically within 48 to 72 hours.',
  'Blackstorm Experts can connect you with a vetted life care planner expert witness in 48 to 72 hours, on either side of the case.',
  'Blackstorm Experts can connect you with a vetted orthopedic surgery expert witness in 48 to 72 hours, on either side of the case.',
  'Blackstorm Experts can connect you with a vetted forensic economist in 48 to 72 hours, on either side of the case.',
  'Blackstorm Experts can connect you with a vetted electrical engineering expert witness in 48 to 72 hours, on either side of the case.',
  'Blackstorm Experts can connect you with a vetted forensic accountant for personal injury damages in 48 to 72 hours',
  'start a search with Blackstorm Experts',
]

function findNextMatch(text: string, fromIndex: number) {
  let bestMatch: { index: number; length: number; segment: TextSegment } | null = null

  const lowerText = text.toLowerCase()

  for (const { phrase, href } of PAGE_PHRASES) {
    const index = lowerText.indexOf(phrase, fromIndex)
    if (index === -1) continue

    const before = index === 0 ? '' : text[index - 1]
    const after = text[index + phrase.length] ?? ''
    const isWordBoundary = (char: string) => !char || !/[a-z0-9]/i.test(char)

    if (!isWordBoundary(before) || !isWordBoundary(after)) {
      continue
    }

    const candidate = {
      index,
      length: phrase.length,
      segment: {
        kind: 'page' as const,
        value: text.slice(index, index + phrase.length),
        href,
      },
    }

    if (!bestMatch || candidate.index < bestMatch.index) {
      bestMatch = candidate
    }
  }

  for (const { phrase, slug } of SPECIALTY_PHRASES) {
    const index = lowerText.indexOf(phrase, fromIndex)
    if (index === -1) continue

    const before = index === 0 ? '' : text[index - 1]
    const after = text[index + phrase.length] ?? ''
    const isWordBoundary = (char: string) => !char || !/[a-z0-9]/i.test(char)

    if (!isWordBoundary(before) || !isWordBoundary(after)) {
      continue
    }

    const candidate = {
      index,
      length: phrase.length,
      segment: {
        kind: 'specialty' as const,
        value: text.slice(index, index + phrase.length),
        slug,
      },
    }

    if (!bestMatch || candidate.index < bestMatch.index) {
      bestMatch = candidate
    }
  }

  for (const phrase of SEARCH_PHRASES) {
    const index = text.indexOf(phrase, fromIndex)
    if (index === -1) continue

    const candidate = {
      index,
      length: phrase.length,
      segment: {
        kind: 'search' as const,
        value: phrase,
      },
    }

    if (!bestMatch || candidate.index < bestMatch.index) {
      bestMatch = candidate
    }
  }

  return bestMatch
}

export function splitTextWithSpecialtyLinks(text: string): TextSegment[] {
  const segments: TextSegment[] = []
  let cursor = 0

  while (cursor < text.length) {
    const match = findNextMatch(text, cursor)
    if (!match) {
      segments.push({ kind: 'text', value: text.slice(cursor) })
      break
    }

    if (match.index > cursor) {
      segments.push({ kind: 'text', value: text.slice(cursor, match.index) })
    }

    segments.push(match.segment)
    cursor = match.index + match.length
  }

  return segments
}

const linkClass =
  'font-medium text-accent underline-offset-2 transition-colors hover:text-accent-hover hover:underline'

export function renderLinkedText(text: string) {
  return splitTextWithSpecialtyLinks(text).map((segment, index) => {
    if (segment.kind === 'text') {
      return <span key={index}>{segment.value}</span>
    }

    if (segment.kind === 'search') {
      return (
        <a key={index} href="#" data-open-search-modal className={linkClass}>
          {segment.value}
        </a>
      )
    }

    if (segment.kind === 'page') {
      return (
        <Link key={index} href={segment.href} className={linkClass}>
          {segment.value}
        </Link>
      )
    }

    return (
      <Link key={index} href={`/expert-witness/${segment.slug}`} className={linkClass}>
        {segment.value}
      </Link>
    )
  })
}
