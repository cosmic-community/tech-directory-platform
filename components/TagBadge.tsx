import { Tag } from '@/types'

interface TagBadgeProps {
  tag: Tag
  size?: 'sm' | 'md'
}

export default function TagBadge({ tag, size = 'sm' }: TagBadgeProps) {
  const tagColor = tag.metadata.color || '#6B7280'
  
  // Convert hex color to rgba for background
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }
  
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  }

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${sizeClasses[size]}`}
      style={{
        backgroundColor: hexToRgba(tagColor, 0.1),
        color: tagColor,
        border: `1px solid ${hexToRgba(tagColor, 0.2)}`
      }}
    >
      {tag.metadata.name || tag.title}
    </span>
  )
}