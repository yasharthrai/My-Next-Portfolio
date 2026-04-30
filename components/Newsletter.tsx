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
    <section className="py-20 px-6 border-t border-red-300 bg-gradient-to-r from-red-950/50 to-transparent">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay updated with insights
        </h2>
        <p className="text-gray-400 mb-8">
          Get product management tips, data analysis trends, and career updates straight to your inbox.
        </p>

        {submitted ? (
          <div className="p-4 bg-green-950 border border-green-500 rounded-lg text-green-300 text-sm">
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
              className="flex-1 px-4 py-3 bg-red-950 border border-red-300 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-red-950 font-semibold rounded-lg hover:bg-red-300 transition-all duration-300 whitespace-nowrap"
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
