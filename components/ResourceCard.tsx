import { Resource } from '@/types'
import Link from 'next/link'
import TagBadge from '@/components/TagBadge'
import DifficultyBadge from '@/components/DifficultyBadge'

interface ResourceCardProps {
  resource: Resource
  featured?: boolean
}

export default function ResourceCard({ resource, featured = false }: ResourceCardProps) {
  const category = resource.metadata.category
  const tags = resource.metadata.tags || []
  const difficulty = resource.metadata.difficulty
  const resourceType = resource.metadata.resource_type

  return (
    <article className={`card p-6 ${featured ? 'ring-2 ring-primary-200' : ''}`}>
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
              <Link 
                href={resource.metadata.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-600 transition-colors"
              >
                {resource.metadata.name || resource.title}
              </Link>
            </h3>
            {featured && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                Featured
              </span>
            )}
          </div>
          
          {category && (
            <div className="flex items-center text-sm text-gray-600">
              <span className="mr-2">{category.metadata.icon}</span>
              <span>{category.metadata.name}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3">
          {resource.metadata.description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <TagBadge key={tag.id} tag={tag} />
            ))}
            {tags.length > 3 && (
              <span className="tag bg-gray-100 text-gray-600">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            {difficulty && (
              <DifficultyBadge difficulty={difficulty.key} />
            )}
            {resourceType && (
              <span className="resource-type-badge">
                {resourceType.value}
              </span>
            )}
          </div>
          
          <Link
            href={resource.metadata.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            Visit →
          </Link>
        </div>
      </div>
    </article>
  )
}