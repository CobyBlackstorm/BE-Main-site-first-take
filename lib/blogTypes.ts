export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }

export type BlogPostJson = {
  slug: string
  title: string
  date: string
  description: string
  keywords?: string[] | string
  specialties: string[]
  blocks: BlogBlock[]
}
