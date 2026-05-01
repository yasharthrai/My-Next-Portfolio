'use client'

import { useState } from 'react'
import Modal from './Modal'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const { ref, isVisible } = useScrollAnimation()

  const projects = [
    {
      title: "Uber's Smart Real-Time Pricing Strategy",
      period: 'Jan 2025 - Present',
      description: 'Case study analyzing Uber\'s dynamic pricing mechanisms and market impact.',
      longDescription: 'This comprehensive case study explores Uber\'s innovative dynamic pricing model. Through detailed market research and analysis of pricing algorithms, I examine how Uber balances supply and demand, customer acquisition, and profitability. The study includes insights from behavioral economics, competitive analysis, and strategic recommendations for optimization.',
      skills: ['Market Research', 'Data Analysis', 'Product Strategy', 'Agile'],
      link: 'https://github.com/yasarthrai/Uber-Pricing-Case-Study',
      impact: '25% improvement in pricing model efficiency',
      timeline: '8 weeks',
      challenge: 'Understanding complex pricing mechanisms in a multi-sided marketplace',
      solution: 'Built predictive models and conducted comparative analysis across markets'
    },
    {
      title: 'Google Health & Home Dashboard',
      period: '2025',
      description: 'Product dashboard monitoring 20+ key features across Google\'s ecosystem.',
      longDescription: 'Engineered a comprehensive dashboard system for Google\'s Health & Home ecosystem. This involved real-time data visualization, predictive analytics for feature adoption, and integration with multiple data sources.',
      skills: ['Data Visualization', 'Product Analytics', 'Dashboard Design'],
      link: '#',
      impact: '15% increase in feature adoption',
      timeline: '12 weeks',
      challenge: 'Real-time monitoring of 20+ complex metrics across diverse platforms',
      solution: 'Implemented automated dashboards with anomaly detection and alerts'
    },
    {
      title: 'Fraud Detection ML Model',
      period: '2024',
      description: 'Developed ML models achieving 22% improvement in fraud detection accuracy.',
      longDescription: 'Built an end-to-end ML pipeline for fraud detection with Python, incorporating feature engineering, model selection, and deployment. Used ensemble methods to achieve 99.5% accuracy.',
      skills: ['Machine Learning', 'Python', 'SQL', 'Data Analysis'],
      link: '#',
      impact: '99.5% accuracy achieved',
      timeline: '16 weeks',
      challenge: 'Detecting sophisticated fraud patterns while minimizing false positives',
      solution: 'Deployed ensemble ML models with real-time scoring under 100ms latency'
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-text-primary cursor-pointer transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <span className="text-accent inline-block">/</span> projects
          </h2>
          <div className="elegant-divider"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group p-8 border border-border rounded-md hover:border-accent transition-all minimal-border hover:shadow-lg hover:bg-primary-light cursor-pointer transform hover:scale-[1.02] duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-accent group-hover:text-accent-light transition-colors group-hover:translate-x-2 duration-300">
                  {project.title}
                </h3>
                <span className="text-sm text-text-secondary group-hover:text-accent transition-colors">{project.period}</span>
              </div>

              <p className="text-text-secondary mb-6 group-hover:text-text-primary transition-colors">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-accent/10 border border-border text-accent-light rounded-md hover:bg-accent/20 hover:border-accent transition-all duration-300 font-medium"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(project)
                  }}
                  className="text-accent hover:text-accent-light transition-colors text-sm font-semibold group-hover:translate-x-1 duration-300"
                >
                  view details →
                </button>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-accent-light hover:text-accent transition-colors text-sm font-semibold"
                  >
                    github ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Section */}
        <div className="mt-16 p-8 bg-primary-light border border-border rounded-md hover:border-accent hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:scale-[1.01]">
          <h3 className="text-lg font-bold text-accent mb-3 group-hover:text-accent-light transition-colors">more projects</h3>
          <p className="text-text-secondary mb-4 group-hover:text-text-primary transition-colors">
            Explore more on my <a href="https://github.com/yasarthrai" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent font-semibold transition-colors">GitHub</a>
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-accent mb-2">Overview</h3>
              <p className="text-text-secondary leading-relaxed">{selectedProject.longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-2">Challenge</h3>
              <p className="text-text-secondary">{selectedProject.challenge}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-2">Solution</h3>
              <p className="text-text-secondary">{selectedProject.solution}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-primary border border-border rounded-md">
                <p className="text-sm text-text-secondary mb-1">Impact</p>
                <p className="text-accent font-bold">{selectedProject.impact}</p>
              </div>
              <div className="p-4 bg-primary border border-border rounded-md">
                <p className="text-sm text-text-secondary mb-1">Timeline</p>
                <p className="text-accent font-bold">{selectedProject.timeline}</p>
              </div>
              <div className="p-4 bg-primary border border-border rounded-md">
                <p className="text-sm text-text-secondary mb-1">Skills Used</p>
                <p className="text-accent font-bold">{selectedProject.skills.length}+</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-accent mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills.map((skill: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-accent/10 border border-accent text-accent-light rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.link !== '#' && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-3 bg-accent text-primary font-semibold rounded-md hover:bg-accent-light transition-all duration-300"
              >
                View on GitHub
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Projects
