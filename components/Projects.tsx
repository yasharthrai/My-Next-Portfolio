const Projects = () => {
  const projects = [
    {
      title: "Uber's Smart Real-Time Pricing Strategy",
      period: 'Jan 2025 - Present',
      description: 'Case study analyzing Uber\'s dynamic pricing mechanisms and market impact. Using market research and agile methodologies to understand pricing challenges and user behavior.',
      skills: ['Market Research', 'Data Analysis', 'Product Strategy', 'Agile'],
      link: 'https://github.com/yasarthrai/Uber-Pricing-Case-Study',
    },
    {
      title: 'Google Health & Home Dashboard',
      period: '2025',
      description: 'Product dashboard monitoring 20+ key features across Google\'s Health & Home ecosystem. Real-time insights into device behavior patterns and user adoption metrics.',
      skills: ['Data Visualization', 'Product Analytics', 'Dashboard Design'],
      link: '#',
    },
    {
      title: 'Fraud Detection ML Model',
      period: '2024',
      description: 'Developed and deployed machine learning models for fraud detection, achieving 22% improvement in accuracy. Analyzed over 1,000 fraud cases for pattern recognition.',
      skills: ['Machine Learning', 'Python', 'SQL', 'Data Analysis'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6 border-t border-accent/20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text-primary cursor-pointer">
            <span className="text-accent inline-block">/</span> projects
          </h2>
          <div className="elegant-divider"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 border border-border rounded-md hover:border-accent transition-all minimal-border hover:shadow-lg hover:bg-primary-light cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-accent group-hover:text-accent-light transition-colors group-hover:translate-x-2 duration-300">
                  {project.title}
                </h3>
                <span className="text-sm text-text-secondary group-hover:text-accent transition-colors">{project.period}</span>
              </div>

              <p className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-accent/10 border border-border text-accent-light rounded-md hover:bg-accent/20 hover:border-accent hover:text-accent-light transition-all duration-300 cursor-pointer font-medium"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-accent hover:text-accent-light transition-colors text-sm font-semibold"
                >
                  view project →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary-light border border-border rounded-md hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer group">
          <h3 className="text-lg font-bold text-accent mb-3">more projects</h3>
          <p className="text-text-secondary mb-4 group-hover:text-text-primary transition-colors">
            Check out my <a href="https://github.com/yasarthrai" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent inline-block transition-colors">GitHub</a> for more projects and open source contributions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
