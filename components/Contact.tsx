'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12 text-center" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-text-primary transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <span className="text-accent inline-block">/</span> let&rsquo;s connect
          </h2>
          <div className="elegant-divider mx-auto max-w-md"></div>
        </div>

        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto font-light text-center">
          Interested in collaborating on product initiatives, data insights, or just want to chat about mountains and data?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent mb-6">Send a Message</h3>
            {submitted ? (
              <div className="p-6 bg-emerald-900/30 border border-emerald-500/50 rounded-md text-emerald-300">
                <p className="font-semibold mb-2">✓ Message sent successfully!</p>
                <p className="text-sm">I&rsquo;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light border border-border rounded-md text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-light border border-border rounded-md text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject (optional)"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-light border border-border rounded-md text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-primary-light border border-border rounded-md text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded-md hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent mb-6">Connect With Me</h3>
            
            <div className="p-6 bg-primary-light border border-border rounded-md hover:border-accent transition-all duration-300 group cursor-pointer">
              <p className="text-sm text-text-secondary mb-2">Email</p>
              <a 
                href="mailto:raiyasharth4@gmail.com"
                className="text-lg font-semibold text-accent group-hover:text-accent-light transition-colors break-all"
              >
                raiyasharth4@gmail.com
              </a>
            </div>

            <div className="p-6 bg-primary-light border border-border rounded-md hover:border-accent transition-all duration-300 group cursor-pointer">
              <p className="text-sm text-text-secondary mb-2">Location</p>
              <p className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
                Noida, Uttar Pradesh, India
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-text-secondary">Follow & Connect</p>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/raiyasharth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border rounded-md text-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-lg font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/yasarthrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border rounded-md text-center text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-lg font-medium"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/yasarthrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-border rounded-md text-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-lg font-medium"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-primary-light border border-border rounded-md max-w-2xl mx-auto hover:border-accent hover:shadow-lg transition-all duration-300 text-center">
          <p className="text-text-secondary mb-4">
            Fun fact: I believe the best ideas come after a peaceful mountain bike ride with no distractions. 
            <span className="text-accent font-semibold"> Let&rsquo;s brainstorm over coffee or a virtual call!</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
