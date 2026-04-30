'use client'

import { useEffect, useState } from 'react'

interface Command {
  id: string
  name: string
  description: string
  action: () => void
  category: string
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const commands: Command[] = [
    {
      id: 'home',
      name: 'Go to Home',
      description: 'Navigate to hero section',
      action: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation',
    },
    {
      id: 'about',
      name: 'Go to About',
      description: 'Jump to about section',
      action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation',
    },
    {
      id: 'experience',
      name: 'Go to Experience',
      description: 'View your work experience',
      action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation',
    },
    {
      id: 'projects',
      name: 'Go to Projects',
      description: 'Check out your projects',
      action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation',
    },
    {
      id: 'blog',
      name: 'Go to Blog',
      description: 'Read the latest articles',
      action: () => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation',
    },
    {
      id: 'contact',
      name: 'Go to Contact',
      description: 'Get in touch',
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      category: 'Navigation',
    },
    {
      id: 'scroll-top',
      name: 'Scroll to Top',
      description: 'Go back to the top',
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      category: 'Utils',
    },
    {
      id: 'linkedin',
      name: 'Open LinkedIn',
      description: 'Visit LinkedIn profile',
      action: () => window.open('https://www.linkedin.com/in/raiyasharth/', '_blank'),
      category: 'Social',
    },
    {
      id: 'github',
      name: 'Open GitHub',
      description: 'Visit GitHub profile',
      action: () => window.open('https://github.com/yasarthrai', '_blank'),
      category: 'Social',
    },
  ]

  const filtered = search
    ? commands.filter((cmd) => cmd.name.toLowerCase().includes(search.toLowerCase()))
    : []

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleCommand = (command: Command) => {
    command.action()
    setIsOpen(false)
    setSearch('')
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-400 border border-red-300 rounded-lg hover:border-accent hover:text-accent transition-all"
        title="Press Cmd+K"
      >
        ⌘K
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl bg-red-950 border border-red-300 rounded-lg shadow-2xl">
            <input
              autoFocus
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-6 py-4 bg-transparent border-b border-red-300 focus:outline-none text-white placeholder-gray-500"
            />

            <div className="max-h-96 overflow-y-auto">
              {filtered.length > 0 ? (
                filtered.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleCommand(cmd)}
                    className="w-full px-6 py-3 text-left hover:bg-red-900 transition-colors border-b border-red-300 last:border-0"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-white">{cmd.name}</p>
                        <p className="text-sm text-gray-400">{cmd.description}</p>
                      </div>
                      <span className="text-xs text-accent bg-red-900 px-2 py-1 rounded">
                        {cmd.category}
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-6 py-12 text-center text-gray-400">
                  {search ? 'No commands found' : 'Start typing to search...'}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CommandPalette
