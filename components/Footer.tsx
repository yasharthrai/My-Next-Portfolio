const Footer = () => {
  return (
    <footer className="border-t border-accent/20 bg-darker py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-gray-400 text-sm">
              <span className="text-accent">/</span> yasharth rai
            </p>
            <p className="text-gray-500 text-xs mt-2">
              product manager • data enthusiast • mountain lover
            </p>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>Built with Next.js • Minimal & Quirky</p>
            <p className="mt-2">
              Crafted with ❤️ and hosted on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:text-accent">GitHub</a>
            </p>
          </div>

          <div className="text-right">
            <p className="text-gray-400 text-sm">
              © 2026 by Yasharth Rai
            </p>
            <p className="text-gray-500 text-xs mt-2">
              All rights reserved
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent/10 text-center">
          <p className="text-gray-600 text-xs">
            "In the mountains, I find clarity. In data, I find truth." — Yasharth
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
