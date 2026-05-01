const Timeline = () => {
  const timelineEvents = [
    {
      year: '2025 - Present',
      title: 'Junior Product Manager',
      company: 'BuildPiper',
      description: 'Leading product strategy for fintech platform with 50K+ users',
      metrics: ['50K+ users', '25% growth', '40% TTM reduction'],
      icon: '📈',
    },
    {
      year: '2025',
      title: 'Analyst',
      company: 'Globalogic',
      description: 'Built dashboards for Google Health & Home ecosystem',
      metrics: ['20+ KPIs', '15% adoption', '7 team members led'],
      icon: '📊',
    },
    {
      year: '2024',
      title: 'Risk Analyst',
      company: 'Amazon',
      description: 'Fraud detection and risk mitigation specialist',
      metrics: ['10K+ transactions', '1000+ cases', '22% accuracy boost'],
      icon: '🔐',
    },
  ]

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-text-primary">
          <span className="text-accent inline-block">/</span> career timeline
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-border"></div>

          {/* Timeline events */}
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex-1 md:flex-1">
                  <div className="p-6 rounded-md border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:bg-primary-light">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{event.icon}</span>
                      <span className="text-xs bg-accent text-primary px-3 py-1 rounded-full font-semibold">
                        {event.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors text-text-primary">
                      {event.title}
                    </h3>
                    <p className="text-accent-light text-sm mb-3 font-medium">{event.company}</p>
                    <p className="text-text-secondary mb-4">{event.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {event.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-xs bg-primary-light border border-border px-2 py-1 rounded text-text-secondary font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex flex-1 justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-primary z-10"></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 md:flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
