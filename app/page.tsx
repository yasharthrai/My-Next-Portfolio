'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import AnimatedBackground from '@/components/AnimatedBackground'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'
import Experience from '@/components/Experience'
import CaseStudies from '@/components/CaseStudies'
import Blog from '@/components/Blog'
import Projects from '@/components/Projects'
import GitHubProjects from '@/components/GitHubProjects'
import Testimonials from '@/components/Testimonials'
import Certifications from '@/components/Certifications'
import Newsletter from '@/components/Newsletter'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  const [easterEggActive, setEasterEggActive] = useState(false)
  const [keySequence, setKeySequence] = useState<string[]>([])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...keySequence, e.key.toLowerCase()]
      
      // Konami code: ↑ ↑ ↓ ↓ ← → ← → b a
      if (newSequence.length > 10) {
        newSequence.shift()
      }
      setKeySequence(newSequence)

      // Check for "yasharth" easter egg
      if (newSequence.join('').includes('yasharth')) {
        setEasterEggActive(true)
        setTimeout(() => setEasterEggActive(false), 5000)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [keySequence])

  return (
    <main className="w-full relative">
      <AnimatedBackground />
      {easterEggActive && (
        <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
          <div className="text-6xl font-bold text-accent animate-spin spin-slow">
            ❤️
          </div>
          <div className="absolute top-1/4 left-1/4 text-3xl animate-bounce duration-1000">✨</div>
          <div className="absolute bottom-1/4 right-1/4 text-3xl animate-bounce duration-1000 delay-200">🏔️</div>
        </div>
      )}
      <Header />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Timeline />
      <Experience />
      <CaseStudies />
      <Blog />
      <Projects />
      <GitHubProjects />
      <Testimonials />
      <Certifications />
      <Newsletter />
      <Contact />
      <Footer />
      <ScrollToTop />
      
      {/* Hidden easter egg trigger */}
      <div className="hidden">
        <span className="text-accent">Type "yasharth" anywhere on the page for a surprise!</span>
      </div>
    </main>
  )
}
