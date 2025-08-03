import { Resource } from '@/types'
import ResourceCard from '@/components/ResourceCard'

interface FeaturedResourcesProps {
  resources: Resource[]
}

export default function FeaturedResources({ resources }: FeaturedResourcesProps) {
  if (!resources || resources.length === 0) {
    return null
  }

  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Featured Resources
        </h2>
        <p className="text-lg text-gray-600">
          Hand-picked resources that every developer should know about
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <ResourceCard 
            key={resource.id} 
            resource={resource}
            featured={true}
          />
        ))}
      </div>
    </section>
  )
}