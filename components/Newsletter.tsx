'use client'

import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 px-6 border-t border-border bg-gradient-to-r from-primary-light/50 to-transparent">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
          Stay updated with insights
        </h2>
        <p className="text-text-secondary mb-8 font-light">
          Get product management tips, data analysis trends, and career updates straight to your inbox.
        </p>

        {submitted ? (
          <div className="p-4 bg-emerald-900/30 border border-emerald-500/50 rounded-md text-emerald-300 text-sm font-medium">
            ✓ Thanks for subscribing! Check your email for confirmation.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-primary-light border border-border rounded-md text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-primary font-semibold rounded-md hover:bg-accent-light transition-all duration-300 whitespace-nowrap font-medium"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
