'use client'

import { Category } from '@/types'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory?: string
  onCategoryChange?: (categoryId: string | undefined) => void
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Categories</h3>
      
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange?.(undefined)}
          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
            !selectedCategory 
              ? 'bg-primary-100 text-primary-700' 
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          All Categories
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange?.(category.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              selectedCategory === category.id
                ? 'bg-primary-100 text-primary-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span>{category.metadata.icon}</span>
              <span>{category.metadata.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}