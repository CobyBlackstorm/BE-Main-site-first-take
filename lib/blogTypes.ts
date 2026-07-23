export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'listItem'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }

export type BlogFaq = {
  question: string
  answer: string
}

export type BlogPostJson = {
  slug: string
  title: string
  metaTitle?: string
  date: string
  description: string
  keywords?: string[] | string
  specialties: string[]
  faqs?: BlogFaq[]
  blocks: BlogBlock[]
}
