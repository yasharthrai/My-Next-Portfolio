'use client'

import { useState } from 'react'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: '#about', label: 'about' },
    { href: '#skills', label: 'skills' },
    { href: '#experience', label: 'experience' },
    { href: '#case-studies', label: 'case studies' },
    { href: '#projects', label: 'projects' },
    { href: '#blog', label: 'blog' },
    { href: '#testimonials', label: 'testimonials' },
    { href: '#contact', label: 'contact' },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-red-900 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-red-950 border-b border-red-300 z-40">
          <nav className="flex flex-col px-6 py-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 text-sm hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
