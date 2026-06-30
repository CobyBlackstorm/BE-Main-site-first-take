import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  date: string
  dateFormatted: string
  excerpt: string
  keywords: string[]
  specialties: string[]
  content: string
}

function formatBlogDate(dateStr: string): string {
  const date = new Date(`${dateStr}T12:00:00`)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

function parseBlogFile(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
  const { data, content } = matter(raw)

  const specialties = Array.isArray(data.specialties)
    ? data.specialties.map(String)
    : data.specialty
      ? [String(data.specialty)]
      : []

  const keywords = Array.isArray(data.keywords)
    ? data.keywords.map(String)
    : typeof data.keywords === 'string'
      ? data.keywords.split(',').map((k) => k.trim()).filter(Boolean)
      : []

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    dateFormatted: data.date ? formatBlogDate(String(data.date)) : '',
    excerpt: String(data.excerpt ?? data.description ?? ''),
    keywords,
    specialties,
    content: content.trim(),
  }
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((filename) => filename.endsWith('.md'))
    .map(parseBlogFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    return null
  }

  return parseBlogFile(`${slug}.md`)
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((post) => post.slug)
}

export function getBlogPostsBySpecialty(specialtySlug: string): BlogPost[] {
  return getAllBlogPosts().filter((post) => post.specialties.includes(specialtySlug))
}
