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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 hover:glow-text cursor-pointer">
            <span className="text-accent inline-block hover:spin-slow">/</span> projects
          </h2>
          <div className="mountain-divider hover:animate-pulse"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 border border-accent/30 rounded hover:border-accent/80 transition-all minimal-border-hover hover:bg-accent/5 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-accent-light group-hover:text-accent transition-colors group-hover:translate-x-2 duration-300">
                  {project.title}
                </h3>
                <span className="text-sm text-gray-400 group-hover:text-accent-light transition-colors">{project.period}</span>
              </div>

              <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 text-accent-light rounded hover:bg-accent/20 hover:border-accent/60 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
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
                  className="inline-block text-accent-light hover:text-accent transition-colors text-sm font-semibold"
                >
                  view project →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-accent/10 to-accent-light/5 border border-accent/20 rounded hover:from-accent/20 hover:to-white/5 hover:border-accent/50 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
          <h3 className="text-lg font-bold text-accent mb-3 group-hover:pulse-red">more projects</h3>
          <p className="text-gray-400 mb-4 group-hover:text-white transition-colors">
            Check out my <a href="https://github.com/yasarthrai" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent hover:scale-110 inline-block transition-transform">GitHub</a> for more projects and open source contributions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects
