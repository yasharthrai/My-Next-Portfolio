const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 border-t border-accent/20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 hover:glow-text cursor-pointer">
            <span className="text-accent inline-block hover:spin-slow">/</span> let&rsquo;s connect
          </h2>
          <div className="mountain-divider mx-auto max-w-md hover:animate-pulse"></div>
        </div>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Interested in collaborating on product initiatives, data insights, or just want to chat about mountains and data?
        </p>

        <div className="space-y-6 mb-16">
          <p className="text-lg hover:pulse-red p-4 rounded transition-all duration-300">
            <span className="text-accent">Email: </span>
            <a 
              href="mailto:raiyasharth4@gmail.com"
              className="text-accent-light hover:text-accent transition-colors font-bold"
            >
              raiyasharth4@gmail.com
            </a>
          </p>
          
          <p className="text-lg">
            <span className="text-accent">Location: </span>
            <span className="text-gray-300">Noida, Uttar Pradesh, India</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="https://www.linkedin.com/in/raiyasharth/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-dark transition-all hover:scale-110 hover:shadow-lg"
          >
            linkedin
          </a>
          <a
            href="https://github.com/yasarthrai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent-light text-accent-light hover:bg-accent-light hover:text-dark transition-all hover:scale-110 hover:shadow-lg"
          >
            github
          </a>
          <a
            href="https://twitter.com/yasarthrai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-dark transition-all hover:scale-110 hover:shadow-lg"
          >
            twitter
          </a>
        </div>

        <div className="p-8 bg-accent/5 border border-accent/20 rounded max-w-md mx-auto hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 hover:pulse-red">
          <p className="text-sm text-gray-400 mb-4">
            Fun fact: I believe the best ideas come after a peaceful mountain bike ride with no distractions. 
            <span className="text-accent-light font-bold"> Let&rsquo;s brainstorm over coffee or a virtual call!</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
