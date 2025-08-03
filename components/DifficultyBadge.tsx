import { DifficultyLevel } from '@/types'

interface DifficultyBadgeProps {
  difficulty: DifficultyLevel
  size?: 'sm' | 'md'
}

export default function DifficultyBadge({ difficulty, size = 'sm' }: DifficultyBadgeProps) {
  const difficultyConfig = {
    beginner: {
      label: 'Beginner',
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    intermediate: {
      label: 'Intermediate',
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    },
    advanced: {
      label: 'Advanced',
      color: 'bg-red-100 text-red-800 border-red-200'
    }
  }

  const config = difficultyConfig[difficulty]
  if (!config) return null

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  }

  return (
    <span className={`inline-flex items-center rounded-full font-medium border ${config.color} ${sizeClasses[size]}`}>
      {config.label}
    </span>
  )
}