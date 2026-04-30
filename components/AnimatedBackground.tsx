'use client'

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Grid background */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
    </div>
  )
}

export default AnimatedBackground
