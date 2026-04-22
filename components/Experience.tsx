const Experience = () => {
  const experiences = [
    {
      title: 'Junior Project Manager (Tech)',
      company: 'ByOpeTech',
      period: 'Current',
      location: 'Uttar Pradesh, India',
      type: 'Full-time',
      achievements: [
        'Leading product initiatives across tech ecosystem with focus on user adoption',
        'Driving 15%+ growth in feature adoption through data-driven enhancements',
        'Managing cross-functional teams of 7+ analysts for strategic projects',
        'Implementing agile methodologies for faster product iteration',
      ],
    },
    {
      title: 'Analyst',
      company: 'Globalogic',
      period: 'May 2025 - Feb 2026',
      location: 'On-site',
      type: '10 months',
      achievements: [
        'Built and maintained product dashboards monitoring 20+ key features for Google Health & Home ecosystem',
        'Conducted in-depth research on Google LR algorithm implementation, optimizing cache management for enhanced device performance',
        'Collaborated with Google partners to leverage data insights for feature enhancement, driving 15% increase in feature adoption',
        'Led team of 7 analysts on Google Fitness health initiative, achieving 15% growth in feature utilization',
        'Improved user satisfaction scores by 10% through data-driven product recommendations',
      ],
    },
    {
      title: 'Risk Analyst',
      company: 'Amazon (Contract)',
      period: 'Previous Role',
      location: 'India',
      type: 'Full-time',
      achievements: [
        'Checked over 10,000 transactions using smart compute models, reducing financial risks by 15%',
        'Worked closely with legal, cybersecurity, and risk teams to apply knowledge in risk mitigation',
        'Carried out over 1,000 fraud investigations, making fraud detection 22% more accurate',
        'Developed strong analytical skills in pattern recognition and anomaly detection',
      ],
    },
  ]

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 px-6 border-t border-accent/20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-accent">/</span> experience
          </h2>
          <div className="mountain-divider"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="p-6 border border-accent/30 rounded hover:border-accent/60 transition-all minimal-border-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent-light">{exp.title}</h3>
                  <p className="text-accent">{exp.company}</p>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <p>{exp.period}</p>
                  <p>{exp.type}</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{exp.location}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex gap-3">
                    <span className="text-accent-light flex-shrink-0">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-accent/5 border border-accent/20 rounded">
          <h3 className="text-lg font-bold text-accent mb-4">education</h3>
          <div>
            <p className="text-accent-light font-semibold">B.S. in Mathematics</p>
            <p className="text-gray-400">Veer Bahadur Singh Purvanchal University, Jaunpur</p>
            <p className="text-sm text-gray-500">August 2018 - September 2021</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
