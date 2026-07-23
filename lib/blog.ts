import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogBlock, BlogFaq, BlogPostJson } from '@/lib/blogTypes'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  metaTitle?: string
  date: string
  dateFormatted: string
  excerpt: string
  keywords: string[]
  specialties: string[]
  content: string
  blocks?: BlogBlock[]
  faqs?: BlogFaq[]
}

function formatBlogDate(dateStr: string): string {
  const date = new Date(`${dateStr}T12:00:00`)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function parseKeywords(data: Record<string, unknown>): string[] {
  if (Array.isArray(data.keywords)) {
    return data.keywords.map(String)
  }

  if (typeof data.keywords === 'string') {
    return data.keywords.split(',').map((k) => k.trim()).filter(Boolean)
  }

  return []
}

function parseSpecialties(data: Record<string, unknown>): string[] {
  if (Array.isArray(data.specialties)) {
    return data.specialties.map(String)
  }

  if (data.specialty) {
    return [String(data.specialty)]
  }

  return []
}

function parseBlogMarkdownFile(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    dateFormatted: data.date ? formatBlogDate(String(data.date)) : '',
    excerpt: String(data.excerpt ?? data.description ?? ''),
    keywords: parseKeywords(data),
    specialties: parseSpecialties(data),
    content: content.trim(),
  }
}

function parseBlogJsonFile(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
  const data = JSON.parse(raw) as BlogPostJson

  return {
    slug: data.slug,
    title: data.title,
    metaTitle: data.metaTitle,
    date: data.date,
    dateFormatted: data.date ? formatBlogDate(data.date) : '',
    excerpt: data.description,
    keywords: parseKeywords(data),
    specialties: data.specialties,
    content: '',
    blocks: data.blocks,
    faqs: data.faqs,
  }
}

function parseBlogFile(filename: string): BlogPost {
  if (filename.endsWith('.json')) {
    return parseBlogJsonFile(filename)
  }

  return parseBlogMarkdownFile(filename)
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((filename) => filename.endsWith('.md') || filename.endsWith('.json'))
    .map(parseBlogFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const markdownPath = path.join(BLOG_DIR, `${slug}.md`)
  const jsonPath = path.join(BLOG_DIR, `${slug}.json`)

  if (fs.existsSync(jsonPath)) {
    return parseBlogJsonFile(`${slug}.json`)
  }

  if (fs.existsSync(markdownPath)) {
    return parseBlogMarkdownFile(`${slug}.md`)
  }

  return null
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((post) => post.slug)
}

export function getBlogPostsBySpecialty(specialtySlug: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.specialties.includes(specialtySlug))
}

export function getRelatedBlogPosts(slug: string): BlogPost[] {
  const current = getBlogPostBySlug(slug)
  if (!current || current.specialties.length === 0) {
    return []
  }

  const currentSpecialties = new Set(current.specialties)

  return getAllBlogPosts()
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      overlap: post.specialties.filter((specialty) => currentSpecialties.has(specialty)).length,
    }))
    .filter(({ overlap }) => overlap > 0)
    .sort((a, b) => {
      if (b.overlap !== a.overlap) {
        return b.overlap - a.overlap
      }

      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime()
    })
    .slice(0, 5)
    .map(({ post }) => post)
}
