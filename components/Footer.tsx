const Footer = () => {
  return (
    <footer className="border-t border-red-300 bg-red-950/30 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-white text-sm">
              <span className="text-accent inline-block">/</span> yasharth rai
            </p>
            <p className="text-gray-400 text-xs mt-2">
              product manager • data enthusiast • mountain lover
            </p>
          </div>

          <div className="text-center text-gray-300 text-sm">
            <p>Built with Next.js • Minimal & Quirky</p>
            <p className="mt-2">
              Crafted with ❤️ and hosted on <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-red-300">GitHub</a>
            </p>
          </div>

          <div className="text-right">
            <p className="text-white text-sm">
              © 2026 by Yasharth Rai
            </p>
            <p className="text-gray-400 text-xs mt-2">
              All rights reserved
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-red-300 text-center">
          <p className="text-gray-400 text-xs">
            "In the mountains, I find clarity. In data, I find truth." — Yasharth
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
