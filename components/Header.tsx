import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Tech Directory</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/categories" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Categories
            </Link>
            <Link 
              href="/resources" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Resources
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="btn-primary">
              Submit Resource
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}