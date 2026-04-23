const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-dark/80 backdrop-blur-md border-b border-accent/20 z-50">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg font-bold text-accent-light group cursor-pointer">
          <span className="text-accent group-hover:spin-slow inline-block">/</span> yasharth
        </div>
        <ul className="flex gap-8 text-sm">
          <li><a href="#about" className="hover:text-accent hover:bounce-text transition-colors duration-300">about</a></li>
          <li><a href="#experience" className="hover:text-accent hover:bounce-text transition-colors duration-300">experience</a></li>
          <li><a href="#projects" className="hover:text-accent hover:bounce-text transition-colors duration-300">projects</a></li>
          <li><a href="#contact" className="hover:text-accent hover:bounce-text transition-colors duration-300">contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
