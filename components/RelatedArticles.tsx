import type { BlogPost } from '@/lib/blog'
import BlogPreviewCard from '@/components/BlogPreviewCard'

type RelatedArticlesProps = {
  posts: BlogPost[]
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="bg-muted py-[40px] md:py-[60px]">
      <div className="section-container max-w-container">
        <p className="mb-5 text-center text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">Related Articles</p>
        <ul className="mx-auto flex max-w-[640px] flex-col gap-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogPreviewCard post={post} compact />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
