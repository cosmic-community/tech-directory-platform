export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
          Discover the Best
          <span className="text-primary-600 block">
            Web Development Resources
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Curated collection of tools, tutorials, libraries, and educational content 
          for developers. Find exactly what you need to build amazing web applications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-3">
            Browse Resources
          </button>
          <button className="btn-secondary text-lg px-8 py-3">
            Submit Resource
          </button>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600">Resources</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">5</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
            <div className="text-gray-600">Free</div>
          </div>
        </div>
      </div>
    </section>
  )
}