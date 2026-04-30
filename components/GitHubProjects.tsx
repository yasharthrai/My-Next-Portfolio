'use client'

import { useEffect, useState } from 'react'

interface GitHubRepo {
  name: string
  description: string
  url: string
  stars: number
  language: string
  topics: string[]
}

const GitHubProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/yasarthrai/repos?sort=stars&per_page=6')
        const data = await response.json()
        const filtered = data
          .filter((repo: any) => !repo.fork && repo.description)
          .slice(0, 6)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language,
            topics: repo.topics || [],
          }))
        setRepos(filtered)
      } catch (error) {
        console.error('Error fetching repos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (loading) {
    return (
      <div className="py-20 px-6 border-t border-red-300">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-400">Loading GitHub projects...</p>
        </div>
      </div>
    )
  }

  if (repos.length === 0) {
    return null
  }

  return (
    <section className="py-20 px-6 border-t border-red-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-accent inline-block hover:spin-slow">/</span> open source projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo, idx) => (
            <a
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-lg border border-red-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 group hover:-translate-y-1 block"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors line-clamp-1">
                  {repo.name}
                </h3>
                <span className="text-xs text-gray-400 whitespace-nowrap ml-2">
                  ⭐ {repo.stars}
                </span>
              </div>

              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {repo.language && (
                  <span className="text-xs bg-red-900 text-accent px-2 py-1 rounded">
                    {repo.language}
                  </span>
                )}
                {repo.topics.slice(0, 2).map((topic, topicIdx) => (
                  <span
                    key={topicIdx}
                    className="text-xs bg-red-950 text-gray-300 px-2 py-1 rounded"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GitHubProjects
