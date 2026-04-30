const Skills = () => {
  const skillCategories = [
    {
      category: 'Product & Strategy',
      skills: [
        { name: 'Product Management', proficiency: 95 },
        { name: 'Product Strategy', proficiency: 90 },
        { name: 'Market Research', proficiency: 85 },
        { name: 'Agile Methodologies', proficiency: 90 },
      ],
    },
    {
      category: 'Data & Analytics',
      skills: [
        { name: 'Data Analysis', proficiency: 92 },
        { name: 'SQL', proficiency: 88 },
        { name: 'Python', proficiency: 85 },
        { name: 'Power BI', proficiency: 90 },
      ],
    },
    {
      category: 'Specialized Skills',
      skills: [
        { name: 'Fraud Detection', proficiency: 88 },
        { name: 'Risk Analysis', proficiency: 85 },
        { name: 'Google Workspace', proficiency: 90 },
        { name: 'Cross-functional Leadership', proficiency: 92 },
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 px-6 border-t border-red-300">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 hover:glow-text cursor-pointer">
            <span className="text-accent inline-block hover:spin-slow">/</span> skills
          </h2>
          <div className="mountain-divider hover:animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-bold text-accent mb-6">{category.category}</h3>
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-bar group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs text-gray-500 group-hover:text-accent transition-colors">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-red-950 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-accent to-red-500 h-full rounded-full transition-all duration-1000 ease-out skill-progress"
                      style={{
                        width: `${skill.proficiency}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
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
