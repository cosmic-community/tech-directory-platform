import { createBucketClient } from '@cosmicjs/sdk'
import { Resource, Category, Tag, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  apiEnvironment: 'staging'
})

// Helper function for handling API errors
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all resources with relationships
export async function getResources(): Promise<Resource[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'resources'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Resource[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch resources')
  }
}

// Fetch featured resources
export async function getFeaturedResources(): Promise<Resource[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'resources',
        'metadata.featured': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Resource[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch featured resources')
  }
}

// Fetch resources by category
export async function getResourcesByCategory(categoryId: string): Promise<Resource[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'resources',
        'metadata.category': categoryId
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Resource[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch resources by category')
  }
}

// Fetch single resource by slug
export async function getResource(slug: string): Promise<Resource | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'resources',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const resource = response.object as Resource
    
    if (!resource || !resource.metadata) {
      return null
    }
    
    return resource
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch resource')
  }
}

// Fetch all categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'categories'
      })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects as Category[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch categories')
  }
}

// Fetch single category by slug
export async function getCategory(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'categories',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.object as Category
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch category')
  }
}

// Fetch all tags
export async function getTags(): Promise<Tag[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'tags'
      })
      .props(['id', 'title', 'slug', 'metadata'])
    
    return response.objects as Tag[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch tags')
  }
}