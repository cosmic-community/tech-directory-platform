# Tech Directory Platform

![Tech Directory Preview](https://imgix.cosmicjs.com/ef6b99a0-a044-11ed-81f2-f50e185dd248-HRojPd--G7k.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive web development resource directory platform built with Next.js and powered by Cosmic CMS. Discover curated tools, tutorials, libraries, and educational content for developers across various categories and skill levels.

## Features

- 🎯 **Smart Resource Discovery** - Browse resources by category, tags, difficulty, and type
- 🌟 **Featured Content** - Spotlight the most valuable resources
- 🔍 **Advanced Filtering** - Multi-layered filtering system for precise results
- 🏷️ **Color-Coded Tags** - Visual organization with custom tag colors
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile
- 🚀 **Fast Performance** - Server-side rendering with Next.js 15
- 🎨 **Modern UI** - Clean, intuitive interface with Tailwind CSS

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=688f928d70106502cd8408cf&clone_repository=688f94a970106502cd840903)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A directory for web development resources"

### Code Generation Prompt

> Build a Next.js website that uses my existing objects in this bucket

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **CMS**: Cosmic Headless CMS
- **Language**: TypeScript
- **Deployment**: Vercel Ready

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Cosmic account with read access to your bucket

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tech-directory
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Cosmic SDK Examples

### Fetching Resources with Relationships
```typescript
const resources = await cosmic.objects
  .find({
    type: 'resources'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1) // Include related categories and tags
```

### Filtering by Category
```typescript
const frontendResources = await cosmic.objects
  .find({
    type: 'resources',
    'metadata.category': categoryId
  })
  .depth(1)
```

### Getting Featured Resources
```typescript
const featuredResources = await cosmic.objects
  .find({
    type: 'resources',
    'metadata.featured': true
  })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with three main Cosmic object types:

- **Resources**: Core content with URLs, descriptions, categories, tags, difficulty levels, and resource types
- **Categories**: Organized sections like "Frontend Development", "Testing & Deployment"
- **Tags**: Color-coded labels for technologies like React, TypeScript, JavaScript

All content relationships are automatically resolved using Cosmic's depth parameter, providing seamless access to connected objects.

## Deployment

The application is ready for deployment on Vercel:

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy with zero configuration

The build process includes TypeScript checking to prevent deployment errors.

<!-- README_END -->