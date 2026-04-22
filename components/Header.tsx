const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-accent/20 z-50">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-bold text-accent-light">
          <span className="text-accent">/</span> yasharth
        </div>
        <ul className="flex gap-8 text-sm">
          <li><a href="#about" className="hover:text-accent-light transition-colors">about</a></li>
          <li><a href="#experience" className="hover:text-accent-light transition-colors">experience</a></li>
          <li><a href="#projects" className="hover:text-accent-light transition-colors">projects</a></li>
          <li><a href="#contact" className="hover:text-accent-light transition-colors">contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
