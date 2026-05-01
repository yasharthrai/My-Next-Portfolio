'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const { ref, isVisible } = useScrollAnimation()

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Engineering Lead',
      company: 'BuildPiper',
      text: 'Yasharth has an exceptional ability to translate complex data into actionable product insights. His strategic thinking drove our biggest product victories.',
      avatar: '🚀',
    },
    {
      name: 'Priya Sharma',
      role: 'Design Director',
      company: 'Globalogic',
      text: 'Working with Yasharth was transformative. His collaboration style bridges the gap between data and creativity perfectly. Highly recommended.',
      avatar: '🎨',
    },
    {
      name: 'Marcus Johnson',
      role: 'Risk & Compliance',
      company: 'Amazon',
      text: 'Exceptional analytical mind with a detail-oriented approach to problem-solving. His fraud detection improvements were industry-leading.',
      avatar: '🔒',
    },
  ]

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 5000)
  }

  return (
    <section id="testimonials" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-text-primary transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <span className="text-accent inline-block">/</span> testimonials
          </h2>
          <div className="elegant-divider mx-auto max-w-md"></div>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-md">
            <div className="relative h-64 md:h-72">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 p-8 bg-primary-light border border-border rounded-md transition-all duration-500 transform ${
                    idx === currentIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="text-5xl mb-4">{testimonial.avatar}</div>
                  <p className="text-text-secondary italic mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-accent hover:text-accent-light transition-colors">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-12 md:-left-16 top-1/2 transform -translate-y-1/2 p-2 rounded-full border border-border text-accent hover:bg-accent hover:text-primary transition-all duration-300 hidden md:flex items-center justify-center w-10 h-10"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-12 md:-right-16 top-1/2 transform -translate-y-1/2 p-2 rounded-full border border-border text-accent hover:bg-accent hover:text-primary transition-all duration-300 hidden md:flex items-center justify-center w-10 h-10"
          >
            →
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-accent w-8'
                    : 'bg-border hover:bg-text-secondary'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-8">
          <p className="text-sm text-text-secondary">
            {currentIndex + 1} of {testimonials.length}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
