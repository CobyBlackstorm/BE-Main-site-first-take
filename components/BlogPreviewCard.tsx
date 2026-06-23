import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'
import BlogPreviewIcon from '@/components/BlogPreviewIcon'

type BlogPreviewCardProps = {
  post: BlogPost
  compact?: boolean
}

export default function BlogPreviewCard({ post, compact }: BlogPreviewCardProps) {
  const primarySpecialty = post.specialties[0]

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex items-stretch overflow-hidden rounded-lg border border-card-border bg-white shadow-card transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:border-accent hover:shadow-card-hover ${
        compact ? 'min-h-[80px]' : 'min-h-[100px] sm:min-h-[110px]'
      }`}
    >
      <BlogPreviewIcon specialtySlug={primarySpecialty} compact={compact} />
      <div
        className={`relative flex min-w-0 flex-1 flex-col justify-center ${
          compact ? 'px-4 py-3' : 'px-5 py-3 sm:px-6 sm:py-3.5'
        }`}
      >
        <time
          dateTime={post.date}
          className={`absolute font-medium text-secondary ${
            compact ? 'right-4 top-3 text-[12px]' : 'right-5 top-3 text-[13px] sm:right-6'
          }`}
        >
          {post.dateFormatted}
        </time>
        <h2
          className={`font-semibold text-accent transition-colors duration-200 group-hover:text-accent-hover ${
            compact ? 'pr-20 text-[15px] leading-snug' : 'pr-24 text-[18px] leading-[1.3] sm:text-[19px]'
          }`}
        >
          {post.title}
        </h2>
        {!compact && post.excerpt ? (
          <p className="mt-1.5 line-clamp-2 text-[15px] leading-[1.5] text-primary sm:text-[15px]">{post.excerpt}</p>
        ) : null}
        {compact && post.excerpt ? (
          <p className="mt-1 line-clamp-1 text-[13px] leading-[1.5] text-primary">{post.excerpt}</p>
        ) : null}
      </div>
    </Link>
  )
}
