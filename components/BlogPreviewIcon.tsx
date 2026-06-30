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

function OrthopedicIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <circle cx="12" cy="5.5" r="2.5" />
      <path d="M11.25 8v8.25" />
      <path d="M12.75 8v8.25" />
      <path d="M8.75 16.25c0 2.1 1.45 3.75 3.25 3.75s3.25-1.65 3.25-3.75" />
      <path d="M9.25 16.25h5.5" />
    </svg>
  )
}

function CardiologyIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M12 20s-6-4.2-6-9.5a3.5 3.5 0 0 1 6-2.2A3.5 3.5 0 0 1 18 10.5C18 15.8 12 20 12 20z" />
      <path d="M4 14h3l1.5-2 2 3 2-4 1.5 3H20" />
    </svg>
  )
}

function OncologyIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="9.5" cy="10.5" r="1.2" />
      <circle cx="14.5" cy="11.5" r="1.2" />
      <circle cx="11" cy="14.5" r="1.2" />
      <circle cx="13.5" cy="14" r="0.9" />
    </svg>
  )
}

function RadiologyIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <circle cx="12" cy="11" r="3.5" />
      <path d="M12 7.5v7" />
      <path d="M8.5 11h7" />
      <circle cx="14.5" cy="15.5" r="1.2" />
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

function CivilEngineeringIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M4 18h16" />
      <path d="M4 18l8-9 8 9" />
      <path d="M8 18v-3" />
      <path d="M16 18v-3" />
      <path d="M12 9v9" />
    </svg>
  )
}

function ElectricalIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  )
}

function WrongfulDeathIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M7 7l-2.5 7h5L7 7z" />
      <path d="M17 7l-2.5 7h5L17 7z" />
    </svg>
  )
}

function BiomechanicsIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <path d="M3 12h5" />
      <path d="M6.5 9.5 8.5 12 6.5 14.5" />
      <circle cx="14.5" cy="7.5" r="2" />
      <path d="M14.5 9.5v5.5" />
      <path d="M12 11.5h5" />
      <path d="M13 15l-1.75 4" />
      <path d="M16 15l1.75 4" />
    </svg>
  )
}

function ProductLiabilityIcon({ size }: { size: number }) {
  const props = getIconProps(size)
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.2" />
      <path d="M12 18.8V21" />
      <path d="M3 12h2.2" />
      <path d="M18.8 12H21" />
      <path d="M5.6 5.6l1.6 1.6" />
      <path d="M16.8 16.8l1.6 1.6" />
      <path d="M18.4 5.6l-1.6 1.6" />
      <path d="M7.2 16.8l-1.6 1.6" />
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
  'emergency-medicine',
  'family-medicine',
  'internal-medicine',
  'neurology',
  'neurosurgery',
  'obstetrics-gynecology',
  'pathology',
  'pediatrics',
  'psychiatry',
  'surgery',
])

const ENGINEERING_SLUGS = new Set([
  'mechanical-engineering',
  'structural-engineering',
])

const CIVIL_ENGINEERING_SLUGS = new Set(['civil-engineering'])

const BIOMECHANICS_SLUGS = new Set(['biomechanics'])

const ELECTRICAL_SLUGS = new Set(['electrical-engineering'])

const VEHICLE_SLUGS = new Set(['accident-reconstruction', 'automotive', 'transportation'])

const FINANCIAL_SLUGS = new Set(['forensic-accounting', 'forensic-economics'])

const LIFE_CARE_SLUGS = new Set(['life-care-planning'])

const FIRE_SLUGS = new Set(['fire-investigation'])

const WRONGFUL_DEATH_SLUGS = new Set(['wrongful-death'])

const PRODUCT_LIABILITY_SLUGS = new Set(['products-liability-engineering'])

const ORTHOPEDIC_SLUGS = new Set(['orthopedic-surgery'])

const CARDIOLOGY_SLUGS = new Set(['cardiology'])

const ONCOLOGY_SLUGS = new Set(['oncology'])

const RADIOLOGY_SLUGS = new Set(['radiology'])

function getIconForSpecialty(slug: string | undefined, size: number) {
  if (!slug) return <DocumentIcon size={size} />
  if (PRODUCT_LIABILITY_SLUGS.has(slug)) return <ProductLiabilityIcon size={size} />
  if (ORTHOPEDIC_SLUGS.has(slug)) return <OrthopedicIcon size={size} />
  if (CARDIOLOGY_SLUGS.has(slug)) return <CardiologyIcon size={size} />
  if (ONCOLOGY_SLUGS.has(slug)) return <OncologyIcon size={size} />
  if (RADIOLOGY_SLUGS.has(slug)) return <RadiologyIcon size={size} />
  if (WRONGFUL_DEATH_SLUGS.has(slug)) return <WrongfulDeathIcon size={size} />
  if (FIRE_SLUGS.has(slug)) return <FireIcon size={size} />
  if (LIFE_CARE_SLUGS.has(slug)) return <LifeCareIcon size={size} />
  if (FINANCIAL_SLUGS.has(slug)) return <AccountingIcon size={size} />
  if (ELECTRICAL_SLUGS.has(slug)) return <ElectricalIcon size={size} />
  if (CIVIL_ENGINEERING_SLUGS.has(slug)) return <CivilEngineeringIcon size={size} />
  if (BIOMECHANICS_SLUGS.has(slug)) return <BiomechanicsIcon size={size} />
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
