const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-6 border-t border-red-300">
      <div className="max-w-4xl mx-auto w-full text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">
            <span className="text-red-600">/</span> let&rsquo;s connect
          </h2>
          <div className="mountain-divider mx-auto max-w-md hover:animate-pulse"></div>
        </div>

        <p className="text-xl text-black mb-12 max-w-2xl mx-auto">
          Interested in collaborating on product initiatives, data insights, or just want to chat about mountains and data?
        </p>

        <div className="space-y-6 mb-16">
          <p className="text-lg p-4 rounded transition-all duration-300">
            <span className="text-red-600 font-semibold">Email: </span>
            <a 
              href="mailto:raiyasharth4@gmail.com"
              className="text-red-600 hover:text-red-800 transition-colors font-bold"
            >
              raiyasharth4@gmail.com
            </a>
          </p>
          
          <p className="text-lg text-black">
            <span className="text-red-600 font-semibold">Location: </span>
            <span className="text-black">Noida, Uttar Pradesh, India</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="https://www.linkedin.com/in/raiyasharth/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all hover:scale-110 hover:shadow-lg"
          >
            linkedin
          </a>
          <a
            href="https://github.com/yasarthrai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all hover:scale-110 hover:shadow-lg"
          >
            github
          </a>
          <a
            href="https://twitter.com/yasarthrai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all hover:scale-110 hover:shadow-lg"
          >
            twitter
          </a>
        </div>

        <div className="p-8 bg-red-50 border border-red-300 rounded max-w-md mx-auto hover:border-red-600 hover:bg-red-100 transition-all duration-300">
          <p className="text-sm text-black mb-4">
            Fun fact: I believe the best ideas come after a peaceful mountain bike ride with no distractions. 
            <span className="text-red-700 font-bold"> Let&rsquo;s brainstorm over coffee or a virtual call!</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
