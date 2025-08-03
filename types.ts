// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  bucket?: string;
  status?: string;
  thumbnail?: string;
  published_at?: string;
  modified_by?: string;
  created_by?: string;
}

// Resource object type
export interface Resource extends CosmicObject {
  type: 'resources';
  metadata: {
    name: string;
    url: string;
    description: string;
    category?: Category;
    tags?: Tag[];
    difficulty?: {
      key: DifficultyLevel;
      value: string;
    };
    resource_type?: {
      key: ResourceType;
      value: string;
    };
    featured?: boolean;
  };
}

// Category object type
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
    icon?: string;
  };
}

// Tag object type
export interface Tag extends CosmicObject {
  type: 'tags';
  metadata: {
    name: string;
    color?: string;
  };
}

// Type literals for select-dropdown values
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type ResourceType = 'tutorial' | 'tool' | 'library' | 'article' | 'course' | 'documentation';

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip?: number;
}

// Filter types for components
export interface ResourceFilters {
  category?: string;
  tags?: string[];
  difficulty?: DifficultyLevel;
  resourceType?: ResourceType;
  featured?: boolean;
  search?: string;
}

// Type guards for runtime validation
export function isResource(obj: CosmicObject): obj is Resource {
  return obj.type === 'resources';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}

export function isTag(obj: CosmicObject): obj is Tag {
  return obj.type === 'tags';
}

// Utility types
export type OptionalMetadata<T> = Partial<T>;
export type CreateResourceData = Omit<Resource, 'id' | 'created_at' | 'modified_at'>;