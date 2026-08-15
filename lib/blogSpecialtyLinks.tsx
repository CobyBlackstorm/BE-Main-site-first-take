import Link from 'next/link'
import { SPECIALTIES } from '@/lib/expertData'

type TextSegment =
  | { kind: 'text'; value: string }
  | { kind: 'specialty'; value: string; slug: string }
  | { kind: 'page'; value: string; href: string }
  | { kind: 'search'; value: string }

const PAGE_PHRASES: { phrase: string; href: string }[] = [
  { phrase: 'expert witness fee structures', href: '/blog/expert-witness-fees-cost-structure' },
  { phrase: 'who pays for an expert witness', href: '/blog/who-pays-for-an-expert-witness' },
  { phrase: 'how much does an expert witness cost', href: '/blog/how-much-does-an-expert-witness-cost' },
  {
    phrase: 'when do attorneys need an expert witness',
    href: '/blog/when-do-attorneys-need-an-expert-witness',
  },
  { phrase: 'can an expert witness be excluded', href: '/blog/can-an-expert-witness-be-excluded' },
  { phrase: 'what is a Daubert challenge', href: '/blog/what-is-a-daubert-challenge' },
  {
    phrase: 'what qualifies someone as an expert witness',
    href: '/blog/what-qualifies-someone-as-an-expert-witness',
  },
  {
    phrase: 'can a treating physician be an expert witness',
    href: '/blog/can-a-treating-physician-be-an-expert-witness',
  },
  { phrase: 'what is a medical expert witness', href: '/blog/what-is-a-medical-expert-witness' },
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
  { phrase: 'consulting expert vs. testifying expert', href: '/blog/testifying-vs-consulting-expert' },
  { phrase: 'consulting expert vs testifying expert', href: '/blog/testifying-vs-consulting-expert' },
  { phrase: 'what is an expert witness', href: '/blog/what-is-an-expert-witness' },
  { phrase: 'what does an expert witness do', href: '/blog/what-does-an-expert-witness-do' },
  { phrase: 'expert witness vs fact witness', href: '/blog/expert-witness-vs-fact-witness' },
  { phrase: 'voir dire expert witness', href: '/blog/voir-dire-expert-witness' },
  { phrase: 'Daubert expert witness', href: '/blog/daubert-expert-witness' },
  { phrase: 'Daubert standard', href: '/blog/daubert-expert-witness' },
  {
    phrase: 'Daubert expert exclusion vetting checklist',
    href: '/blog/daubert-expert-exclusion-vetting-checklist',
  },
  { phrase: 'expert testimony in court', href: '/blog/expert-testimony-in-court' },
  { phrase: 'rebuttal expert witness', href: '/blog/rebuttal-expert-witness' },
  { phrase: 'engineering expert witness', href: '/expert-witness/engineering' },
  { phrase: 'forensic expert witness', href: '/expert-witness/forensic' },
  { phrase: 'how to find an expert witness', href: '/how-to-find-an-expert-witness' },
  { phrase: 'expert witness consulting', href: '/expert-witness-consulting' },
  { phrase: 'medical expert witness cost', href: '/blog/medical-expert-witness-cost' },
  {
    phrase: 'professional witness vs expert witness',
    href: '/blog/professional-witness-vs-expert-witness',
  },
  { phrase: 'expert witness services compared', href: '/expert-witness-services-comparison' },
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
  { phrase: 'heart attack expert witness', href: '/heart-attack-expert-witness' },
  { phrase: 'aortic dissection expert witness', href: '/aortic-dissection-expert-witness' },
  { phrase: 'seizure expert witness', href: '/seizure-expert-witness' },
  { phrase: 'spinal cord injury expert witness', href: '/spinal-cord-injury-expert-witness' },
  { phrase: 'knee surgery expert witness', href: '/knee-surgery-expert-witness' },
  { phrase: 'hip surgery expert witness', href: '/hip-surgery-expert-witness' },
  { phrase: 'hip replacement expert witness', href: '/hip-replacement-expert-witness' },
  {
    phrase: 'hospital-acquired infection expert witness',
    href: '/hospital-acquired-infection-expert-witness',
  },
  {
    phrase: 'postoperative infection expert witness',
    href: '/postoperative-infection-expert-witness',
  },
  { phrase: 'delayed diagnosis expert witness', href: '/delayed-diagnosis-expert-witness' },
  { phrase: 'surgical error expert witness', href: '/surgical-error-expert-witness' },
  { phrase: 'medication error expert witness', href: '/medication-error-expert-witness' },
  {
    phrase: 'emergency room malpractice expert witness',
    href: '/emergency-room-malpractice-expert-witness',
  },
  {
    phrase: 'anesthesia malpractice expert witness',
    href: '/anesthesia-malpractice-expert-witness',
  },
  { phrase: 'electrical shock expert witness', href: '/electrical-shock-expert-witness' },
  { phrase: 'electrical fire expert witness', href: '/electrical-fire-expert-witness' },
  { phrase: 'power line expert witness', href: '/power-line-expert-witness' },
  { phrase: 'building collapse expert witness', href: '/building-collapse-expert-witness' },
  { phrase: 'foundation failure expert witness', href: '/foundation-failure-expert-witness' },
  { phrase: 'slip and fall expert witness', href: '/slip-and-fall-expert-witness' },
  { phrase: 'truck accident expert witness', href: '/truck-accident-expert-witness' },
  { phrase: 'trucking safety expert witness', href: '/trucking-safety-expert-witness' },
  { phrase: 'freight broker expert witness', href: '/freight-broker-expert-witness' },
  { phrase: 'trucking broker expert witness', href: '/freight-broker-expert-witness' },
  { phrase: 'injury causation expert witness', href: '/injury-causation-expert-witness' },
  { phrase: 'low-speed impact expert witness', href: '/low-speed-impact-expert-witness' },
  { phrase: 'failure to diagnose cancer expert witness', href: '/failure-to-diagnose-cancer-expert-witness' },
  { phrase: 'compartment syndrome expert witness', href: '/compartment-syndrome-expert-witness' },
  { phrase: 'cattle fencing expert witness', href: '/cattle-fencing-expert-witness' },
  { phrase: 'AI expert witness', href: '/ai-expert-witness' },
  { phrase: 'machine learning expert witness', href: '/ai-expert-witness' },
  { phrase: 'generative AI expert witness', href: '/ai-expert-witness' },
  { phrase: 'rat infestation expert witness', href: '/rat-infestation-expert-witness' },
  { phrase: 'pest control expert witness', href: '/pest-control-expert-witness' },
  { phrase: 'stroke expert witness', href: '/stroke-expert-witness' },
  { phrase: 'cruise ship expert witness', href: '/cruise-ship-expert-witness' },
  { phrase: 'spa director expert witness', href: '/spa-director-expert-witness' },
  { phrase: 'propane expert witness', href: '/propane-expert-witness' },
  { phrase: 'forensic pathologist expert witness', href: '/forensic-pathologist-expert-witness' },
  { phrase: 'forensic pathology expert witness', href: '/forensic-pathologist-expert-witness' },
  { phrase: 'psychologist expert witness', href: '/psychologist-expert-witness' },
  { phrase: 'forensic psychologist expert witness', href: '/psychologist-expert-witness' },
  { phrase: 'clinical psychologist expert witness', href: '/psychologist-expert-witness' },
  { phrase: 'neuropsychologist expert witness', href: '/psychologist-expert-witness' },
  { phrase: 'child psychologist expert witness', href: '/child-psychologist-expert-witness' },
  { phrase: 'child psychology expert witness', href: '/child-psychologist-expert-witness' },
  { phrase: 'boat accident expert witness', href: '/boat-accident-expert-witness' },
  { phrase: 'marine accident expert witness', href: '/boat-accident-expert-witness' },
  { phrase: 'trip and fall expert witness', href: '/trip-and-fall-expert-witness' },
  { phrase: 'cowboy expert witness', href: '/cowboy-expert-witness' },
  { phrase: 'ranch operations expert witness', href: '/cowboy-expert-witness' },
  { phrase: 'forklift expert witness', href: '/forklift-expert-witness' },
  { phrase: 'hand surgery expert witness', href: '/hand-surgery-expert-witness' },
  { phrase: 'handwriting expert witness', href: '/handwriting-expert-witness' },
  { phrase: 'critical care expert witness', href: '/critical-care-expert-witness' },
  { phrase: 'intensivist expert witness', href: '/critical-care-expert-witness' },
  { phrase: 'dental malpractice expert witness', href: '/dental-malpractice-expert-witness' },
  { phrase: 'dental expert witness', href: '/dental-malpractice-expert-witness' },
  { phrase: 'appendectomy expert witness', href: '/appendectomy-expert-witness' },
  { phrase: 'geriatrics expert witness', href: '/geriatrics-expert-witness' },
  { phrase: 'chiropractic expert witness', href: '/chiropractic-expert-witness' },
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
  { phrase: 'qualifying an expert witness', href: '/blog/qualifying-an-expert-witness' },
  {
    phrase: 'when your case needs two expert witnesses',
    href: '/blog/when-your-case-needs-two-expert-witnesses',
  },
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
