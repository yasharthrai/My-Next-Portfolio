'use client'

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import CommandPalette from './CommandPalette'

const Header = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/Yasharth_Rai_PM_Resume.pdf'
    link.download = 'Yasharth_Rai_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <header className="fixed top-0 w-full bg-red-950/80 backdrop-blur-xl border-b border-red-300 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-bold text-accent-light group cursor-pointer">
          <span className="text-accent group-hover:spin-slow inline-block">/</span> yasharth
        </div>

        <ul className="hidden md:flex gap-8 text-sm">
          <li><a href="#about" className="hover:text-accent hover:bounce-text transition-colors duration-300">about</a></li>
          <li><a href="#skills" className="hover:text-accent hover:bounce-text transition-colors duration-300">skills</a></li>
          <li><a href="#experience" className="hover:text-accent hover:bounce-text transition-colors duration-300">experience</a></li>
          <li><a href="#case-studies" className="hover:text-accent hover:bounce-text transition-colors duration-300">cases</a></li>
          <li><a href="#projects" className="hover:text-accent hover:bounce-text transition-colors duration-300">projects</a></li>
          <li><a href="#blog" className="hover:text-accent hover:bounce-text transition-colors duration-300">blog</a></li>
          <li><a href="#testimonials" className="hover:text-accent hover:bounce-text transition-colors duration-300">testimonials</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <CommandPalette />
          <ThemeToggle />
          <button
            onClick={handleResumeDownload}
            className="hidden md:inline-block px-4 py-2 bg-accent text-red-950 rounded-lg font-semibold hover:bg-red-300 transition-all duration-300 text-sm whitespace-nowrap"
          >
            ↓ Resume
          </button>
          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}

export default Header
