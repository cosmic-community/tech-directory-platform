'use client'

import { useState, useMemo } from 'react'
import { Resource, Category, Tag, ResourceFilters } from '@/types'
import ResourceCard from '@/components/ResourceCard'
import FilterTags from '@/components/FilterTags'

interface ResourceGridProps {
  resources: Resource[]
  categories: Category[]
  tags: Tag[]
}

export default function ResourceGrid({ resources, categories, tags }: ResourceGridProps) {
  const [filters, setFilters] = useState<ResourceFilters>({})

  const filteredResources = useMemo(() => {
    if (!resources) return []

    return resources.filter((resource) => {
      // Category filter
      if (filters.category && resource.metadata.category?.id !== filters.category) {
        return false
      }

      // Tags filter
      if (filters.tags && filters.tags.length > 0) {
        const resourceTags = resource.metadata.tags || []
        const hasMatchingTag = filters.tags.some(filterTag =>
          resourceTags.some(resourceTag => resourceTag.id === filterTag)
        )
        if (!hasMatchingTag) return false
      }

      // Difficulty filter
      if (filters.difficulty && resource.metadata.difficulty?.key !== filters.difficulty) {
        return false
      }

      // Resource type filter
      if (filters.resourceType && resource.metadata.resource_type?.key !== filters.resourceType) {
        return false
      }

      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        const matchesTitle = resource.title.toLowerCase().includes(searchTerm)
        const matchesDescription = resource.metadata.description?.toLowerCase().includes(searchTerm)
        const matchesName = resource.metadata.name?.toLowerCase().includes(searchTerm)
        
        if (!matchesTitle && !matchesDescription && !matchesName) {
          return false
        }
      }

      return true
    })
  }, [resources, filters])

  if (!resources || resources.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No resources found.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <FilterTags
        categories={categories}
        tags={tags}
        filters={filters}
        onFiltersChange={setFilters}
      />
      
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          {filteredResources.length} of {resources.length} resources
        </p>
        
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
          <option>Sort by: Newest</option>
          <option>Sort by: Name</option>
          <option>Sort by: Popularity</option>
        </select>
      </div>
      
      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No resources match your current filters.</p>
          <button
            onClick={() => setFilters({})}
            className="btn-primary mt-4"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard 
              key={resource.id} 
              resource={resource}
            />
          ))}
        </div>
      )}
    </div>
  )
}