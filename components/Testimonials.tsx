'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Testimonial = {
  quote: string
  name: string
  title: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Coby and his team at Blackstorm did a great job finding a very unique expert in a field that I spent months trying to find before I found them. I would highly recommend them. The experts they found were all very qualified and knowledgeable.',
    name: 'Andy C.',
    title: 'Medical Malpractice Attorney',
    location: 'Georgia',
  },
  {
    quote:
      "I can't recommend Blackstorm Experts enough! Unlike other services that inflate their rates, Blackstorm delivers top-tier expertise at reasonable prices. Their team is incredibly quick to respond and match you with exactly the right professional for your needs. It's rare to find a service that combines quality, speed, and affordability—but Blackstorm does it effortlessly. If you want results without breaking the bank, this is the service to trust.",
    name: 'Steven D.',
    title: 'Personal Injury Attorney',
    location: 'Pennsylvania',
  },
  {
    quote:
      "Blackstorm took the time to understand the case before recommending anyone. The experts they sent weren't just qualified, they made sense for what we were actually trying to prove.",
    name: 'Daniel M.',
    title: 'Personal Injury Attorney',
    location: 'Nashville, TN',
  },
  {
    quote:
      "What stood out was how targeted the candidates were. They weren't just experts in the field we needed, they were specific to the mechanism involved in our case and made sense for our fact pattern.",
    name: 'Sarah K.',
    title: 'Medical Malpractice Attorney',
    location: 'Chicago, IL',
  },
  {
    quote:
      'We had a complex case with a tight deadline. Blackstorm delivered three qualified candidates within 48 hours. One of them ended up being exactly what we needed. Incredibly fast and professional.',
    name: 'Michael T.',
    title: 'Personal Injury Attorney',
    location: 'Miami, FL',
  },
]

const AUTO_ADVANCE_MS = 6000
const SWIPE_THRESHOLD_PX = 50
const SLIDE_WIDTH_DESKTOP = 336
const SLIDE_GAP = 32

const trustItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 22 C4 17 7.5 14 12 14 C16.5 14 20 17 20 22" />
      </svg>
    ),
    title: 'Founder-Led Service',
    description: 'Every search handled personally by Coby Weiss',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="14" rx="2" />
        <path d="M8 7 V5 C8 3.9 8.9 3 10 3 H14 C15.1 3 16 3.9 16 5 V7" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="13" y2="16" />
      </svg>
    ),
    title: 'All Practice Areas',
    description: 'From med mal to commercial litigation and everything in between',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 L20 6 V12 C20 17 16.5 21 12 22 C7.5 21 4 17 4 12 V6 Z" />
        <polyline points="8.5 12 11 14.5 16 9.5" />
      </svg>
    ),
    title: 'Satisfaction Guaranteed',
    description: "We source more at no charge if you aren't satisfied",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21 C12 21 19 15.5 19 9.5 C19 5.9 16.1 3 12 3 C7.9 3 5 5.9 5 9.5 C5 15.5 12 21 12 21 Z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
    title: 'All 50 States',
    description: 'Serving litigation attorneys nationwide',
  },
]

function wrapIndex(index: number, count: number) {
  return ((index % count) + count) % count
}

function TestimonialCardContent({ testimonial }: { testimonial: Testimonial }) {
  return (
    <>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, j) => (
          <span key={j} className="text-[18px] text-star" aria-hidden>
            ★
          </span>
        ))}
      </div>

      <p className="mt-4 flex-1 text-[15px] font-normal not-italic leading-[1.75] text-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-5 border-t border-divider pt-4">
        <p className="text-[15px] font-bold text-primary">{testimonial.name}</p>
        <p className="mt-0.5 text-[13px] font-normal text-secondary">
          {testimonial.title}, {testimonial.location}
        </p>
      </div>
    </>
  )
}

function TestimonialCard({
  testimonial,
  isActive,
  onSelect,
}: {
  testimonial: Testimonial
  isActive: boolean
  onSelect?: () => void
}) {
  const cardClass = `card-elevated flex h-full w-full flex-col transition-all duration-500 ease-in-out ${
    isActive ? 'opacity-100 shadow-card-hover' : 'opacity-60 shadow-card hover:opacity-80'
  }`

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={onSelect}
        className={`${cardClass} cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`}
        aria-label={`Show testimonial from ${testimonial.name}`}
      >
        <TestimonialCardContent testimonial={testimonial} />
      </button>
    )
  }

  return (
    <div className={cardClass} aria-current={isActive ? 'true' : undefined}>
      <TestimonialCardContent testimonial={testimonial} />
    </div>
  )
}

type CarouselSlide = {
  testimonial: Testimonial
  itemIndex: number
  key: string
}

function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const count = items.length
  const hasLoop = count > 1

  const carouselSlides = useMemo<CarouselSlide[]>(() => {
    if (!hasLoop) {
      return items.map((testimonial, index) => ({
        testimonial,
        itemIndex: index,
        key: `slide-${index}`,
      }))
    }

    return [
      { testimonial: items[count - 1], itemIndex: count - 1, key: 'clone-start' },
      ...items.map((testimonial, index) => ({
        testimonial,
        itemIndex: index,
        key: `slide-${index}`,
      })),
      { testimonial: items[0], itemIndex: 0, key: 'clone-end' },
    ]
  }, [items, count, hasLoop])

  const [activeIndex, setActiveIndex] = useState(0)
  const [visualIndex, setVisualIndex] = useState(hasLoop ? 1 : 0)
  const [translateX, setTranslateX] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const isPausedRef = useRef(false)
  const touchStartX = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(activeIndex)
  const visualIndexRef = useRef(visualIndex)

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    visualIndexRef.current = visualIndex
  }, [visualIndex])

  const resetAfterClone = useCallback((targetVisualIndex: number) => {
    setTransitionEnabled(false)
    setVisualIndex(targetVisualIndex)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionEnabled(true))
    })
  }, [])

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return
      const nextIndex = wrapIndex(index, count)
      setTransitionEnabled(true)
      setActiveIndex(nextIndex)
      setVisualIndex(hasLoop ? nextIndex + 1 : nextIndex)
    },
    [count, hasLoop],
  )

  const goNext = useCallback(() => {
    if (count <= 1) return

    setTransitionEnabled(true)
    const current = activeIndexRef.current

    if (current === count - 1 && hasLoop) {
      setActiveIndex(0)
      setVisualIndex(count + 1)
      return
    }

    setActiveIndex(current + 1)
    setVisualIndex(visualIndexRef.current + 1)
  }, [count, hasLoop])

  const goPrev = useCallback(() => {
    if (count <= 1) return

    setTransitionEnabled(true)
    const current = activeIndexRef.current

    if (current === 0 && hasLoop) {
      setActiveIndex(count - 1)
      setVisualIndex(0)
      return
    }

    setActiveIndex(current - 1)
    setVisualIndex(visualIndexRef.current - 1)
  }, [count, hasLoop])

  const updateCarouselPosition = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    const isDesktop = window.matchMedia('(min-width: 768px)').matches
    const containerWidth = container.offsetWidth
    const nextSlideWidth = isDesktop
      ? SLIDE_WIDTH_DESKTOP
      : Math.min(containerWidth, 380)

    setSlideWidth(nextSlideWidth)

    const slideCenter = visualIndex * (nextSlideWidth + SLIDE_GAP) + nextSlideWidth / 2
    const containerCenter = containerWidth / 2
    setTranslateX(containerCenter - slideCenter)
  }, [visualIndex])

  useEffect(() => {
    updateCarouselPosition()

    const handleResize = () => updateCarouselPosition()
    window.addEventListener('resize', handleResize)

    const resizeObserver = new ResizeObserver(() => updateCarouselPosition())
    if (containerRef.current) resizeObserver.observe(containerRef.current)

    return () => {
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
    }
  }, [updateCarouselPosition, items.length])

  useEffect(() => {
    if (count <= 1) return

    const intervalId = window.setInterval(() => {
      if (!isPausedRef.current) goNext()
    }, AUTO_ADVANCE_MS)

    return () => window.clearInterval(intervalId)
  }, [count, goNext])

  const handleTrackTransitionEnd = () => {
    if (!hasLoop) return

    if (visualIndex === count + 1) {
      resetAfterClone(1)
    } else if (visualIndex === 0) {
      resetAfterClone(count)
    }
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return

    const touchEndX = event.changedTouches[0]?.clientX
    if (touchEndX === undefined) return

    const deltaX = touchEndX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return
    if (deltaX < 0) goNext()
    else goPrev()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goPrev()
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      goNext()
    }
  }

  if (items.length === 0) return null

  const showControls = items.length > 1

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Attorney testimonials"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {showControls && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute -left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-card-border bg-white text-primary shadow-card transition-all duration-200 ease-in-out hover:border-accent hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:-left-4 sm:h-10 sm:w-10"
            aria-label="Previous testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute -right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-card-border bg-white text-primary shadow-card transition-all duration-200 ease-in-out hover:border-accent hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:-right-4 sm:h-10 sm:w-10"
            aria-label="Next testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      <div
        ref={containerRef}
        className="overflow-hidden"
        onMouseEnter={() => {
          isPausedRef.current = true
        }}
        onMouseLeave={() => {
          isPausedRef.current = false
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex items-stretch gap-8 will-change-transform ${
            transitionEnabled ? 'transition-transform duration-700 ease-in-out' : ''
          }`}
          style={{ transform: `translateX(${translateX}px)` }}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {carouselSlides.map((slide, index) => {
            const isActive = hasLoop ? index === visualIndex : index === activeIndex

            return (
              <div
                key={slide.key}
                className="flex shrink-0 flex-col self-stretch md:min-h-[420px]"
                style={{ width: slideWidth > 0 ? slideWidth : '100%' }}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${slide.itemIndex + 1} of ${count}`}
                aria-hidden={!isActive}
              >
                <TestimonialCard
                  testimonial={slide.testimonial}
                  isActive={isActive}
                  onSelect={!isActive ? () => goTo(slide.itemIndex) : undefined}
                />
              </div>
            )
          })}
        </div>
      </div>

      {showControls && (
        <div
          className="mt-6 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Choose testimonial"
        >
          {items.map((testimonial, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={`${testimonial.name}-dot-${index}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to testimonial ${index + 1} of ${items.length}`}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                  isActive ? 'w-6 bg-accent' : 'w-2.5 bg-card-border hover:bg-secondary/40'
                }`}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="results" className="bg-muted section-padding">
      <div className="section-container max-w-container">
        <p className="section-label mb-3 text-center">What Attorneys Are Saying</p>

        <h2 className="mb-12 text-center text-[36px] font-bold leading-[1.2] tracking-[-0.02em] text-primary">
          Results That Speak for Themselves
        </h2>

        <TestimonialCarousel items={testimonials} />

        <div className="mt-12 grid grid-cols-2 gap-10 gap-y-12 md:grid-cols-4 md:gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-card-border bg-white">
                {item.icon}
              </div>
              <p className="text-[15px] font-bold text-primary">{item.title}</p>
              <p className="mt-1.5 max-w-[160px] text-[13px] font-normal leading-snug text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
