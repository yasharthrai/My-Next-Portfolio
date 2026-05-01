const Stats = () => {
  const stats = [
    { value: '50K+', label: 'Users Managed' },
    { value: '25%', label: 'Growth Achieved' },
    { value: '8+', label: 'Stakeholders Led' },
    { value: '40%', label: 'Time-to-Market Reduction' },
    { value: '1000+', label: 'Fraud Cases Investigated' },
    { value: '15%', label: 'Accuracy Improvement' },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary-light to-transparent border-t border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-text-primary">
          <span className="text-accent inline-block">/</span> impact by numbers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-md border border-border hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer hover:bg-primary-light"
            >
              <div className="text-4xl font-bold text-accent mb-2 group-hover:text-accent-light transition-colors">
                {stat.value}
              </div>
              <div className="text-text-secondary group-hover:text-text-primary transition-colors font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
