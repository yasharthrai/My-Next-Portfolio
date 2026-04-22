const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-3xl">
        <div className="mb-8 float-animation">
          <div className="text-6xl md:text-8xl font-bold mb-4 glow-text">
            yasharth
          </div>
          <div className="text-2xl md:text-3xl text-accent-light mb-6">
            product manager → data alchemist
          </div>
        </div>
        
        <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
          I transform complex data into clear product insights. 
          <span className="text-accent"> Passionate about understanding user behavior </span>
          and building products that matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-dark transition-all">
            <a href="#contact">get in touch</a>
          </button>
          <button className="px-8 py-3 border border-accent-light text-accent-light hover:bg-accent-light hover:text-dark transition-all">
            <a href="#projects">view work</a>
          </button>
        </div>

        <div className="text-sm text-gray-500 space-y-2">
          <p>🚴 mountain biking enthusiast</p>
          <p>🧘 lover of solitude & peaceful moments</p>
          <p>📊 data → insights → impact</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        section {
          animation: fadeInDown 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Hero
