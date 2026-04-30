'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  type?: 'up' | 'left' | 'right' | 'scale'
}

const ScrollReveal = ({ children, className = '', type = 'up' }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const classes = {
            'up': 'scroll-reveal',
            'left': 'scroll-reveal-left',
            'right': 'scroll-reveal-right',
            'scale': 'scroll-reveal-scale',
          }
          entry.target.classList.add(classes[type], 'is-visible')
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [type])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default ScrollReveal
