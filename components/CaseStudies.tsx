const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Scaling Payment Platform to 50K+ Users',
      company: 'BuildPiper',
      metrics: ['50K+ users', '25% growth', '40% time-to-market improvement'],
      description:
        'Led product strategy for fintech platform, implementing data-driven feature releases that resulted in 25% monthly user growth while reducing development cycles by 40%.',
      impact: 'Grew MAU from 35K to 50K+, improved platform adoption by 25%',
      tags: ['Product Strategy', 'Data Analysis', 'Cross-functional Leadership'],
    },
    {
      title: 'Google Health Ecosystem Dashboard',
      company: 'Globalogic',
      metrics: ['20+ KPIs', '15% adoption increase', '7 analysts led'],
      description:
        'Built comprehensive analytics dashboards monitoring 20+ features for Google Health & Home ecosystem. Led team of 7 analysts on Fitness health initiative.',
      impact: 'Achieved 15% increase in feature adoption, improved decision-making speed by 40%',
      tags: ['Analytics', 'Dashboard Development', 'Team Leadership'],
    },
    {
      title: 'Fraud Detection Accuracy Improvement',
      company: 'Amazon',
      metrics: ['10K+ transactions reviewed', '1000+ investigations', '22% accuracy boost'],
      description:
        'Developed and deployed fraud detection models analyzing 10,000+ transactions using smart compute models, significantly reducing financial risks.',
      impact: 'Reduced fraud losses by 15%, increased detection accuracy from 78% to 100%',
      tags: ['Risk Analysis', 'Data Science', 'Pattern Recognition'],
    },
  ]

  return (
    <section id="case-studies" className="py-20 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-text-primary">
          <span className="text-accent inline-block">/</span> case studies
        </h2>

        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="p-8 rounded-md border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:bg-primary-light"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-accent-light transition-colors text-text-primary">
                    {study.title}
                  </h3>
                  <p className="text-accent text-sm mt-2 font-medium">{study.company}</p>
                </div>
              </div>

              <p className="text-text-secondary mb-6">{study.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.metrics.map((metric, metricIdx) => (
                  <div key={metricIdx} className="text-center">
                    <p className="text-accent-light font-bold">{metric}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <p className="text-sm text-text-secondary mb-2">
                  <span className="font-semibold text-text-primary">Impact:</span> {study.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 text-xs bg-primary-light border border-border rounded-full text-text-secondary group-hover:border-accent group-hover:bg-accent group-hover:text-primary transition-all font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
