const Certifications = () => {
  const certifications = [
    {
      title: 'Certified Product Manager',
      issuer: 'Product School',
      year: '2024',
      icon: '📜',
    },
    {
      title: 'Advanced Data Analytics',
      issuer: 'Google Analytics Academy',
      year: '2023',
      icon: '📊',
    },
    {
      title: 'Agile & Scrum Master',
      issuer: 'Scrum Alliance',
      year: '2023',
      icon: '⚡',
    },
    {
      title: 'Risk & Fraud Prevention',
      issuer: 'Amazon AWS Training',
      year: '2022',
      icon: '🔐',
    },
    {
      title: 'SQL & Database Optimization',
      issuer: 'DataCamp',
      year: '2023',
      icon: '🗄️',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Coursera',
      year: '2022',
      icon: '🐍',
    },
  ]

  return (
    <section id="certifications" className="py-20 px-6 border-t border-red-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-accent inline-block hover:spin-slow">/</span> certifications & awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-red-300 hover:border-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{cert.icon}</div>
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{cert.issuer}</p>
              <p className="text-xs text-gray-500 bg-red-950 px-2 py-1 rounded inline-block">
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
