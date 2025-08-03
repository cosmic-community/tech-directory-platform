import { getResources, getFeaturedResources, getCategories, getTags } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import FeaturedResources from '@/components/FeaturedResources'
import ResourceGrid from '@/components/ResourceGrid'
import CategoryFilter from '@/components/CategoryFilter'
import SearchBar from '@/components/SearchBar'

export default async function HomePage() {
  const [resources, featuredResources, categories, tags] = await Promise.all([
    getResources(),
    getFeaturedResources(),
    getCategories(),
    getTags(),
  ])

  return (
    <div className="space-y-12">
      <Hero />
      
      {featuredResources.length > 0 && (
        <section className="container mx-auto px-4">
          <FeaturedResources resources={featuredResources} />
        </section>
      )}
      
      <section className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse All Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of web development resources, tools, and tutorials
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/4 space-y-6">
              <SearchBar />
              <CategoryFilter categories={categories} />
            </div>
            
            <div className="lg:w-3/4">
              <ResourceGrid 
                resources={resources} 
                categories={categories}
                tags={tags}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}