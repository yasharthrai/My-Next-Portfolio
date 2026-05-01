const Testimonials = () => {
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

  return (
    <section id="testimonials" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-text-primary">
          <span className="text-accent inline-block">/</span> testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-6 rounded-md border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:bg-primary-light"
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-text-secondary mb-4 italic group-hover:text-text-primary transition-colors">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-accent group-hover:text-accent-light transition-colors">
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
    </section>
  )
}

export default Testimonials
