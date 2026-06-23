import Link from 'next/link'
import { getSpecialtyBySlug } from '@/lib/expertData'

type BlogTagPillsProps = {
  specialtySlugs: string[]
}

const pillClass =
  'inline-flex items-center rounded-full border border-card-border bg-white px-4 py-2 text-[14px] font-medium leading-tight text-primary transition-all duration-200 ease-in-out hover:border-accent hover:bg-[#f8fafc] hover:text-accent'

export default function BlogTagPills({ specialtySlugs }: BlogTagPillsProps) {
  const tags = specialtySlugs
    .map((slug) => {
      const specialty = getSpecialtyBySlug(slug)
      if (!specialty) return null
      return { slug, name: specialty.name }
    })
    .filter((tag): tag is { slug: string; name: string } => tag !== null)

  if (tags.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link key={tag.slug} href={`/expert-witness/${tag.slug}`} className={pillClass}>
          {tag.name}
        </Link>
      ))}
    </div>
  )
}
