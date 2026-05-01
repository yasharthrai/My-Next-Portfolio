'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  const skillCategories = [
    {
      category: 'Product & Strategy',
      skills: [
        { name: 'Product Management', proficiency: 95, description: 'End-to-end product lifecycle management' },
        { name: 'Product Strategy', proficiency: 90, description: 'Strategic roadmap and positioning' },
        { name: 'Market Research', proficiency: 85, description: 'User research and competitive analysis' },
        { name: 'Agile Methodologies', proficiency: 90, description: 'Scrum, Kanban, and sprint planning' },
      ],
    },
    {
      category: 'Data & Analytics',
      skills: [
        { name: 'Data Analysis', proficiency: 92, description: 'Statistical analysis and insights' },
        { name: 'SQL', proficiency: 88, description: 'Complex queries and database optimization' },
        { name: 'Python', proficiency: 85, description: 'Data processing and automation' },
        { name: 'Power BI', proficiency: 90, description: 'Interactive dashboards and visualization' },
      ],
    },
    {
      category: 'Specialized Skills',
      skills: [
        { name: 'Fraud Detection', proficiency: 88, description: 'ML models and pattern recognition' },
        { name: 'Risk Analysis', proficiency: 85, description: 'Risk mitigation strategies' },
        { name: 'Google Workspace', proficiency: 90, description: 'Suite mastery and automation' },
        { name: 'Cross-functional Leadership', proficiency: 92, description: 'Team management and collaboration' },
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12" ref={ref}>
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-text-primary cursor-pointer transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <span className="text-accent inline-block">/</span> skills
          </h2>
          <div className="elegant-divider"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <div className="sticky top-20">
                <h3 className="text-xl font-bold text-accent mb-6 hover:text-accent-light transition-colors">{category.category}</h3>
              </div>
              {category.skills.map((skill, skillIdx) => {
                const isExpanded = expandedSkill === `${idx}-${skillIdx}`
                return (
                  <div
                    key={skillIdx}
                    onClick={() => setExpandedSkill(isExpanded ? null : `${idx}-${skillIdx}`)}
                    className="skill-bar group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text-secondary group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-text-secondary group-hover:text-accent transition-colors font-bold">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="w-full bg-primary-light rounded-full h-2 overflow-hidden group-hover:shadow-lg group-hover:shadow-accent/30 transition-shadow">
                      <div
                        className="bg-gradient-to-r from-accent to-accent-light h-full rounded-full transition-all duration-1000 ease-out skill-progress"
                        style={{
                          width: `${skill.proficiency}%`,
                        }}
                      ></div>
                    </div>
                    {isExpanded && (
                      <div className="mt-3 p-3 bg-primary-light border border-border rounded-md fade-in-up">
                        <p className="text-sm text-text-secondary">{skill.description}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 p-8 bg-primary-light border border-border rounded-md hover:border-accent transition-all duration-300">
          <h3 className="text-lg font-bold text-accent mb-4">Skill Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-primary border border-border rounded-md hover:border-accent transition-colors">
              <p className="text-sm text-text-secondary mb-1">Total Skills</p>
              <p className="text-2xl font-bold text-accent">12+</p>
            </div>
            <div className="p-4 bg-primary border border-border rounded-md hover:border-accent transition-colors">
              <p className="text-sm text-text-secondary mb-1">Avg Proficiency</p>
              <p className="text-2xl font-bold text-accent">89%</p>
            </div>
            <div className="p-4 bg-primary border border-border rounded-md hover:border-accent transition-colors">
              <p className="text-sm text-text-secondary mb-1">Years Exp</p>
              <p className="text-2xl font-bold text-accent">3+</p>
            </div>
            <div className="p-4 bg-primary border border-border rounded-md hover:border-accent transition-colors">
              <p className="text-sm text-text-secondary mb-1">Categories</p>
              <p className="text-2xl font-bold text-accent">3</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skill-bar {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-progress {
          animation: fillWidth 2s ease-out forwards;
        }

        @keyframes fillWidth {
          from {
            width: 0 !important;
          }
          to {
            width: inherit !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
