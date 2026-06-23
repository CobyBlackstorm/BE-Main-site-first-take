type BlogPreviewIconProps = {
  specialtySlug?: string
  compact?: boolean
}

function getIconProps(size: number) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#ffffff',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
}

function DocumentIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  )
}

function VehicleIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M5 17h14v-5H5v5z" />
      <path d="M5 12l2.5-5h9L19 12" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
    </svg>
  )
}

function MedicalIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" />
      <line x1="12" y1="8" x2="12" y2="14" />
      <line x1="9" y1="11" x2="15" y2="11" />
    </svg>
  )
}

function EngineeringIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function LegalIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M7 7l-2 6h4l-2-6z" />
      <path d="M17 7l-2 6h4l-2-6z" />
    </svg>
  )
}

function AccountingIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <rect x="7" y="5" width="10" height="4" rx="1" />
      <line x1="8" y1="12" x2="8.01" y2="12" />
      <line x1="12" y1="12" x2="12.01" y2="12" />
      <line x1="16" y1="12" x2="16.01" y2="12" />
      <line x1="8" y1="16" x2="8.01" y2="16" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
      <line x1="16" y1="16" x2="16.01" y2="16" />
    </svg>
  )
}

function LifeCareIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M9 3h6v3" />
      <rect x="5" y="5" width="14" height="16" rx="2" />
      <line x1="9" y1="11" x2="15" y2="11" />
      <line x1="9" y1="15" x2="15" y2="15" />
      <line x1="9" y1="19" x2="12" y2="19" />
      <path d="M16 17l1.5 1.5L20 16" />
    </svg>
  )
}

function FireIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

const MEDICAL_SLUGS = new Set([
  'anesthesiology',
  'cardiology',
  'emergency-medicine',
  'family-medicine',
  'internal-medicine',
  'neurology',
  'neurosurgery',
  'obstetrics-gynecology',
  'oncology',
  'orthopedic-surgery',
  'pathology',
  'pediatrics',
  'psychiatry',
  'radiology',
  'surgery',
])

const ENGINEERING_SLUGS = new Set([
  'biomechanics',
  'civil-engineering',
  'electrical-engineering',
  'mechanical-engineering',
  'structural-engineering',
])

const VEHICLE_SLUGS = new Set(['accident-reconstruction', 'automotive', 'transportation'])

const FINANCIAL_SLUGS = new Set(['forensic-accounting', 'forensic-economics'])

const LIFE_CARE_SLUGS = new Set(['life-care-planning'])

const FIRE_SLUGS = new Set(['fire-investigation'])

function getIconForSpecialty(slug: string | undefined, size: number) {
  if (!slug) return <DocumentIcon size={size} />
  if (FIRE_SLUGS.has(slug)) return <FireIcon size={size} />
  if (LIFE_CARE_SLUGS.has(slug)) return <LifeCareIcon size={size} />
  if (FINANCIAL_SLUGS.has(slug)) return <AccountingIcon size={size} />
  if (VEHICLE_SLUGS.has(slug)) return <VehicleIcon size={size} />
  if (MEDICAL_SLUGS.has(slug)) return <MedicalIcon size={size} />
  if (ENGINEERING_SLUGS.has(slug)) return <EngineeringIcon size={size} />
  if (slug.includes('law') || slug.includes('legal')) return <LegalIcon size={size} />
  return <DocumentIcon size={size} />
}

export default function BlogPreviewIcon({ specialtySlug, compact }: BlogPreviewIconProps) {
  const iconSize = compact ? 32 : 44

  return (
    <div
      className={`flex shrink-0 items-center justify-center self-stretch bg-accent ${
        compact ? 'w-[72px] sm:w-[80px]' : 'w-[96px] sm:w-[108px]'
      }`}
      aria-hidden
    >
      {getIconForSpecialty(specialtySlug, iconSize)}
    </div>
  )
}
