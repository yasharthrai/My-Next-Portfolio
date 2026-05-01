import DancingPerson from './DancingPerson'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      {/* Subtle floating elements */}
      <div className="hidden md:block">
        <DancingPerson position="top-left" size="md" delay={0} />
        <DancingPerson position="top-right" size="md" delay={400} />
        <DancingPerson position="bottom-left" size="md" delay={200} />
      </div>
      <div className="text-center max-w-3xl">
        <div className="mb-8 fade-in-up">
          <div className="text-6xl md:text-8xl font-bold mb-4 text-text-primary hover:text-accent transition-colors duration-500 cursor-pointer">
            yasharth
          </div>
          <div className="text-2xl md:text-3xl text-accent mb-6 font-light tracking-wide">
            product manager → data alchemist
          </div>
        </div>
        
        <p className="text-lg text-text-secondary mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          I transform complex data into clear product insights. 
          <span className="text-accent font-medium"> Passionate about understanding user behavior </span>
          and building products that matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 rounded-md font-medium">
            <a href="#contact">get in touch</a>
          </button>
          <button className="px-8 py-3 border border-border text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 rounded-md font-medium">
            <a href="#projects">view work</a>
          </button>
        </div>

        <div className="text-sm text-text-secondary space-y-2 hover:text-accent transition-colors duration-300 p-4 rounded cursor-pointer">
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
