import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BlogMarkdown from '@/components/BlogMarkdown'
import BlogRichText from '@/components/BlogRichText'
import BlogTagPills from '@/components/BlogTagPills'
import RelatedArticles from '@/components/RelatedArticles'
import { getAllBlogSlugs, getBlogPostBySlug, getRelatedBlogPosts } from '@/lib/blog'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  if (!post) {
    return { title: 'Not Found | Blackstorm Experts' }
  }

  return {
    title: `${post.title} | Blackstorm Experts`,
    description: post.excerpt || undefined,
    keywords: post.keywords.length > 0 ? post.keywords : undefined,
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      url: `/blog/${params.slug}`,
      title: post.title,
      description: post.excerpt || undefined,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedBlogPosts(params.slug)

  return (
    <>
      <Nav />
      <main>
        <article className="bg-page pb-[60px] pt-[48px] md:pb-20 md:pt-[68px]">
          <div className="section-container max-w-container">
            <div className="mx-auto max-w-[720px]">
              <header className="mb-10 border-b border-divider pb-8">
                <nav aria-label="Breadcrumb" className="mb-4 text-[13px] leading-snug">
                  <Link href="/blog" className="text-secondary transition-colors duration-200 hover:text-primary">
                    Blog
                  </Link>
                  <span className="mx-1.5 text-secondary/70">&gt;</span>
                  <span className="text-secondary">{post.title}</span>
                </nav>
                <div className="mb-6 flex justify-end md:mb-7">
                  <time dateTime={post.date} className="text-[14px] font-medium leading-none text-secondary">
                    {post.dateFormatted}
                  </time>
                </div>
                <h1 className="text-[clamp(1.75rem,5vw,36px)] font-bold leading-[1.15] tracking-[-0.02em] text-primary">
                  {post.title}
                </h1>
              </header>

              {post.blocks && post.blocks.length > 0 ? (
                <BlogRichText blocks={post.blocks} />
              ) : (
                <BlogMarkdown content={post.content} />
              )}

              {post.specialties.length > 0 ? (
                <footer className="mt-12 border-t border-divider pt-8">
                  <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-accent">Tags</p>
                  <BlogTagPills specialtySlugs={post.specialties} />
                </footer>
              ) : null}
            </div>
          </div>
        </article>
        <RelatedArticles posts={relatedPosts} title="Related Blogs" />
      </main>
      <Footer />
    </>
  )
}
