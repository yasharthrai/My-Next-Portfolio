const Blog = () => {
  const articles = [
    {
      title: 'The Art of Data-Driven Product Decisions',
      excerpt: 'How I use SQL, Python, and Power BI to make better product calls. Real examples from scaling a 50K+ user platform.',
      date: 'Mar 15, 2026',
      readTime: '8 min read',
      category: 'Product Strategy',
      tags: ['data', 'analytics', 'product'],
    },
    {
      title: 'Fraud Detection: Beyond the Algorithm',
      excerpt: 'Building ML models is one thing; deploying them responsibly is another. Learn what I discovered investigating 1000+ fraud cases.',
      date: 'Feb 28, 2026',
      readTime: '6 min read',
      category: 'Risk & Security',
      tags: ['ml', 'security', 'risk'],
    },
    {
      title: 'Cross-functional Leadership in Fast-Moving Teams',
      excerpt: 'Managing 8+ stakeholders without authority. Lessons from leading Google Health, Amazon Risk, and BuildPiper teams.',
      date: 'Feb 10, 2026',
      readTime: '7 min read',
      category: 'Leadership',
      tags: ['leadership', 'teamwork', 'communication'],
    },
    {
      title: 'SQL Optimization Secrets That Saved 40% Query Time',
      excerpt: 'A technical deep dive into indexing, query planning, and optimization tricks that reduced our analytics dashboards load by half.',
      date: 'Jan 20, 2026',
      readTime: '10 min read',
      category: 'Technical',
      tags: ['sql', 'performance', 'database'],
    },
  ]

  return (
    <section id="blog" className="min-h-screen flex items-center py-20 px-6 border-t border-red-300">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 hover:glow-text cursor-pointer">
            <span className="text-accent inline-block hover:spin-slow">/</span> blog & insights
          </h2>
          <div className="mountain-divider hover:animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, idx) => (
            <article
              key={idx}
              className="p-6 rounded-lg border border-red-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs bg-red-900 text-accent px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="text-xs text-gray-400 bg-red-950 px-2 py-1 rounded hover:text-accent transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-red-300">
                <span className="text-xs text-gray-500">{article.readTime}</span>
                <span className="text-accent group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">More articles coming soon...</p>
          <a href="#newsletter" className="text-accent hover:text-red-300 transition-colors">
            Subscribe to get notified ↓
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
