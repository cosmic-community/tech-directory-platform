'use client'

import { useState } from 'react'
import { Category, Tag, ResourceFilters, DifficultyLevel, ResourceType } from '@/types'

interface FilterTagsProps {
  categories: Category[]
  tags: Tag[]
  filters: ResourceFilters
  onFiltersChange: (filters: ResourceFilters) => void
}

export default function FilterTags({ categories, tags, filters, onFiltersChange }: FilterTagsProps) {
  const [showAllTags, setShowAllTags] = useState(false)
  const [searchTerm, setSearchTerm] = useState(filters.search || '')

  const handleCategoryFilter = (categoryId: string) => {
    const newCategory = filters.category === categoryId ? undefined : categoryId
    onFiltersChange({ ...filters, category: newCategory })
  }

  const handleTagFilter = (tagId: string) => {
    const currentTags = filters.tags || []
    const newTags = currentTags.includes(tagId)
      ? currentTags.filter(id => id !== tagId)
      : [...currentTags, tagId]
    onFiltersChange({ ...filters, tags: newTags.length > 0 ? newTags : undefined })
  }

  const handleDifficultyFilter = (difficulty: DifficultyLevel) => {
    const newDifficulty = filters.difficulty === difficulty ? undefined : difficulty
    onFiltersChange({ ...filters, difficulty: newDifficulty })
  }

  const handleResourceTypeFilter = (resourceType: ResourceType) => {
    const newResourceType = filters.resourceType === resourceType ? undefined : resourceType
    onFiltersChange({ ...filters, resourceType: newResourceType })
  }

  const handleSearchChange = (search: string) => {
    setSearchTerm(search)
    onFiltersChange({ ...filters, search: search || undefined })
  }

  const clearAllFilters = () => {
    setSearchTerm('')
    onFiltersChange({})
  }

  const hasActiveFilters = Object.keys(filters).length > 0

  const displayTags = showAllTags ? tags : tags.slice(0, 8)

  const difficultyLevels: DifficultyLevel[] = ['beginner', 'intermediate', 'advanced']
  const resourceTypes: ResourceType[] = ['tutorial', 'tool', 'library', 'article', 'course', 'documentation']

  return (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
      {/* Search */}
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search Resources
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search by name or description..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryFilter(category.id)}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filters.category === category.id
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category.metadata.icon && <span className="mr-1">{category.metadata.icon}</span>}
              {category.metadata.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {displayTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => handleTagFilter(tag.id)}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filters.tags?.includes(tag.id)
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
              style={{
                backgroundColor: filters.tags?.includes(tag.id) 
                  ? tag.metadata.color 
                    ? `${tag.metadata.color}20` 
                    : undefined
                  : undefined,
                borderColor: filters.tags?.includes(tag.id) && tag.metadata.color 
                  ? `${tag.metadata.color}40` 
                  : undefined
              }}
            >
              {tag.metadata.name}
            </button>
          ))}
          {tags.length > 8 && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              {showAllTags ? 'Show Less' : `+${tags.length - 8} More`}
            </button>
          )}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Difficulty Level</h3>
        <div className="flex flex-wrap gap-2">
          {difficultyLevels.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => handleDifficultyFilter(difficulty)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filters.difficulty === difficulty
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Type */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Resource Type</h3>
        <div className="flex flex-wrap gap-2">
          {resourceTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleResourceTypeFilter(type)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filters.resourceType === type
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={clearAllFilters}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  )
}