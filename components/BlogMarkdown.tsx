import ReactMarkdown from 'react-markdown'

type BlogMarkdownProps = {
  content: string
}

export default function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className="blog-prose text-[17px] leading-[1.85] text-primary">
      <ReactMarkdown
        components={{
          h2: ({ children }) => (
            <h2 className="mb-4 mt-10 text-[24px] font-bold tracking-[-0.02em] text-primary first:mt-0">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-[20px] font-semibold tracking-[-0.01em] text-primary">{children}</h3>
          ),
          p: ({ children }) => <p className="mb-6 last:mb-0">{children}</p>,
          ul: ({ children }) => <ul className="mb-6 list-disc space-y-2 pl-6 last:mb-0">{children}</ul>,
          ol: ({ children }) => <ol className="mb-6 list-decimal space-y-2 pl-6 last:mb-0">{children}</ol>,
          li: ({ children }) => <li>{children}</li>,
          a: ({ href, children }) => {
            if (href === '#request-expert') {
              return (
                <a
                  href="#"
                  data-open-search-modal
                  className="font-medium text-accent underline-offset-2 transition-colors hover:text-accent-hover hover:underline"
                >
                  {children}
                </a>
              )
            }

            return (
              <a href={href} className="font-medium text-accent underline-offset-2 transition-colors hover:text-accent-hover hover:underline">
                {children}
              </a>
            )
          },
          strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
