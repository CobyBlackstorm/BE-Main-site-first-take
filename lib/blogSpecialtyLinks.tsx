import Link from 'next/link'
import { SPECIALTIES } from '@/lib/expertData'

type TextSegment =
  | { kind: 'text'; value: string }
  | { kind: 'specialty'; value: string; slug: string }
  | { kind: 'search'; value: string }

const SPECIALTY_PHRASES: { phrase: string; slug: string }[] = [
  { phrase: 'life care planner expert witness', slug: 'life-care-planning' },
  { phrase: 'life care planner', slug: 'life-care-planning' },
  { phrase: 'life care plan', slug: 'life-care-planning' },
  { phrase: 'catastrophic injury cases', slug: 'personal-injury' },
  { phrase: 'catastrophic injury case', slug: 'personal-injury' },
  { phrase: 'catastrophic injury matter', slug: 'personal-injury' },
  { phrase: 'catastrophic injury', slug: 'personal-injury' },
  { phrase: 'orthopedic surgery expert witness', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic expert witness', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic surgeon', slug: 'orthopedic-surgery' },
  { phrase: 'orthopedic malpractice', slug: 'orthopedic-surgery' },
  { phrase: 'medical malpractice matters', slug: 'medical-malpractice' },
  { phrase: 'medical malpractice matter', slug: 'medical-malpractice' },
  { phrase: 'wrongful death damages', slug: 'wrongful-death' },
  { phrase: 'wrongful death claims', slug: 'wrongful-death' },
  { phrase: 'wrongful death litigation', slug: 'wrongful-death' },
  { phrase: 'wrongful death cases', slug: 'wrongful-death' },
  { phrase: 'wrongful death case', slug: 'wrongful-death' },
  { phrase: 'wrongful death matter', slug: 'wrongful-death' },
  { phrase: 'electrical engineering expert witness', slug: 'electrical-engineering' },
  { phrase: 'electrical engineers', slug: 'electrical-engineering' },
  { phrase: 'electrical engineer', slug: 'electrical-engineering' },
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
  'Blackstorm Experts can connect you with a vetted life care planner expert witness in 48 to 72 hours, on either side of the case.',
  'Blackstorm Experts can connect you with a vetted orthopedic surgery expert witness in 48 to 72 hours, on either side of the case.',
  'Blackstorm Experts can connect you with a vetted forensic economist in 48 to 72 hours, on either side of the case.',
  'Blackstorm Experts can connect you with a vetted electrical engineering expert witness in 48 to 72 hours, on either side of the case.',
  'Blackstorm Experts can connect you with a vetted forensic accountant for personal injury damages in 48 to 72 hours',
  'start a search with Blackstorm Experts',
]

function findNextMatch(text: string, fromIndex: number) {
  let bestMatch: { index: number; length: number; segment: TextSegment } | null = null

  for (const { phrase, slug } of SPECIALTY_PHRASES) {
    const lowerText = text.toLowerCase()
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

    return (
      <Link key={index} href={`/expert-witness/${segment.slug}`} className={linkClass}>
        {segment.value}
      </Link>
    )
  })
}
