import type { BlogBlock } from '@/lib/blogTypes'
import { renderLinkedText } from '@/lib/blogSpecialtyLinks'

type BlogRichTextProps = {
  blocks: BlogBlock[]
}

export default function BlogRichText({ blocks }: BlogRichTextProps) {
  return (
    <div className="blog-prose text-[17px] leading-[1.85] text-primary">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          if (block.level === 3) {
            return (
              <h3 key={index} className="mb-3 mt-8 text-[20px] font-semibold tracking-[-0.01em] text-primary">
                {block.text}
              </h3>
            )
          }

          return (
            <h2
              key={index}
              className={`mb-4 text-[24px] font-bold tracking-[-0.02em] text-primary ${
                index === 0 ? 'mt-0' : 'mt-10'
              }`}
            >
              {block.text}
            </h2>
          )
        }

        return (
          <p key={index} className="mb-6 last:mb-0">
            {renderLinkedText(block.text)}
          </p>
        )
      })}
    </div>
  )
}
