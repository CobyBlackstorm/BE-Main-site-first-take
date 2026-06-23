import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BlogPreviewCard from '@/components/BlogPreviewCard'
import { getAllBlogPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Blackstorm Experts',
  description: 'Insights and articles for litigation attorneys and expert witnesses from Blackstorm Experts.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    url: '/blog',
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Nav />
      <main>
        <section className="bg-page py-[60px] md:py-20">
          <div className="section-container max-w-container">
            <div className="mb-10 text-center md:mb-12">
              <p className="section-label mb-3">Blog</p>
              <h1 className="text-[36px] font-bold tracking-[-0.02em] text-primary">Articles &amp; Insights</h1>
            </div>
            {posts.length > 0 ? (
              <ul className="mx-auto flex max-w-[960px] flex-col gap-5">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <BlogPreviewCard post={post} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mx-auto max-w-[480px] text-center text-[17px] leading-[1.7] text-secondary">
                New articles are on the way. Check back soon.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
