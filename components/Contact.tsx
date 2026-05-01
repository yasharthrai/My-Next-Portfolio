const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text-primary">
            <span className="text-accent inline-block">/</span> let&rsquo;s connect
          </h2>
          <div className="elegant-divider mx-auto max-w-md"></div>
        </div>

        <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto font-light">
          Interested in collaborating on product initiatives, data insights, or just want to chat about mountains and data?
        </p>

        <div className="space-y-6 mb-16">
          <p className="text-lg p-4 rounded transition-all duration-300">
            <span className="text-accent font-semibold">Email: </span>
            <a 
              href="mailto:raiyasharth4@gmail.com"
              className="text-accent hover:text-accent-light transition-colors font-medium"
            >
              raiyasharth4@gmail.com
            </a>
          </p>
          
          <p className="text-lg text-text-secondary">
            <span className="text-accent font-semibold">Location: </span>
            <span className="text-text-secondary">Noida, Uttar Pradesh, India</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="https://www.linkedin.com/in/raiyasharth/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 rounded-md font-medium"
          >
            linkedin
          </a>
          <a
            href="https://github.com/yasarthrai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-border text-text-secondary hover:border-accent hover:text-accent transition-all duration-300 hover:shadow-lg rounded-md font-medium"
          >
            github
          </a>
          <a
            href="https://twitter.com/yasarthrai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 rounded-md font-medium"
          >
            twitter
          </a>
        </div>

        <div className="p-8 bg-primary-light border border-border rounded-md max-w-md mx-auto hover:border-accent hover:shadow-lg transition-all duration-300">
          <p className="text-sm text-text-secondary mb-4">
            Fun fact: I believe the best ideas come after a peaceful mountain bike ride with no distractions. 
            <span className="text-accent font-semibold"> Let&rsquo;s brainstorm over coffee or a virtual call!</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
