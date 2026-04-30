import DancingPerson from './DancingPerson'

const About = () => {
  const skills = [
    'Product Management',
    'Data Analysis',
    'Python & SQL',
    'Market Research',
    'Agile Methodologies',
    'Power BI',
    'Google Workspace',
    'Product Strategy',
    'Fraud Detection',
    'Risk Analysis',
  ]

  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 border-t border-red-300 relative">
      <div className="hidden md:block">
        <DancingPerson position="top-right" size="md" delay={100} />
        <DancingPerson position="bottom-left" size="md" delay={500} />
      </div>
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 hover:glow-text cursor-pointer">
            <span className="text-accent inline-block hover:spin-slow">/</span> about
          </h2>
          <div className="mountain-divider hover:animate-pulse"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-black leading-relaxed hover:text-red-700 transition-colors duration-300">
              I&rsquo;m a <span className="text-accent-light font-bold">Junior Product Manager</span> at <span className="text-accent font-bold hover:pulse-red cursor-pointer">BuildPiper</span>, where I drive product strategy and user adoption across fintech solutions. Passionate about turning complex data into clear, actionable product insights.
            </p>
            
            <p className="text-black leading-relaxed">
              With experience at <span className="text-red-700 font-semibold">Google</span> and <span className="text-red-700 font-semibold">Amazon</span>, 
              I&rsquo;ve led cross-functional teams, built product dashboards, and driven measurable impact through data-driven decision making.
            </p>

            <p className="text-black leading-relaxed">
              When I&rsquo;m not analyzing data, you&rsquo;ll find me on mountain trails exploring peaceful solitude, 
              or deep in the latest product strategy case study.
            </p>

            <div className="pt-4">
              <a 
                href="https://www.linkedin.com/in/raiyasharth/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all text-sm"
              >
                connect on linkedin
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-red-600 mb-6">core skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm border border-accent/50 text-accent-light minimal-border-hover hover:scale-110 transition-transform duration-300 cursor-pointer"
                  style={{
                    transitionDelay: `${idx * 50}ms`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-red-600 mb-4">certifications</h3>
              <ul className="space-y-3 text-sm text-black">
                <li>✓ Aha! Product Management Professional</li>
                <li>✓ Product Management Strategy - Brent Institute</li>
                <li>✓ Agile Methodologies & Market Research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
