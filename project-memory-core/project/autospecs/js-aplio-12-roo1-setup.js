import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get current file's directory in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Import logger at the top level
import ProjectLogger from '../../management/logger.js'

class ProjectSpecUpdater {
  constructor() {
    // Navigate up two levels from autospecs folder to reach project-memory-core root
    this.projectRoot = path.join(__dirname, '../../..')
    this.memoryCorePath = path.join(this.projectRoot, 'project-memory-core')
    this.projectSpecsPath = path.join(this.memoryCorePath, 'project')

    // Initialize logger
    this.logger = new ProjectLogger(this.projectRoot)
  }

  async updateSpecs() {
    const specs = {
      'productSpec.md': `# Next.js 14 Migration Product Specification

## Core Technologies
- Next.js 14.2.23
- React 18
- Tailwind CSS
- CVA (Class Variance Authority)
- SWR for data fetching
- Zod for schema validation
- next-themes
- Framer Motion

## Component Architecture
- Server-first approach
- Clear client/server boundaries
- Responsive design patterns
- Optimized animations

## Implementation Goals
1. Migrate Home 4 design to Next.js 14
2. Implement Server Components as default
3. Optimize component organization
4. Enhance styling with modern Tailwind
5. Maintain existing UI/UX and animations
6. Create modular components with demo page

## Migration Scope
- Home 4 page components migration
- Critical animations implementation
- Reusable component development
- Demo page creation`,

      'architecture.md': `# Next.js 14 Migration Architecture

## Directory Structure
\`\`\`
app/
├── components/
│   ├── layout/
│   │   ├── Header.js
│   │   ├── Navigation/
│   │   └── Footer.js
│   ├── home/
│   │   ├── HeroSection.js
│   │   ├── FeaturesSection.js
│   │   └── FAQSection.js
│   └── ui/
│       ├── Button.js
│       ├── Card.js
│       └── Accordion.js
├── lib/
│   ├── utils.js
│   └── animation-variants.js
├── (demos)/
├── layout.js
└── page.js
\`\`\`

## Component Guidelines
- Server Components by default
- Client Components ('use client') for:
  - Header (theme switching)
  - Navigation (dropdown state)
  - FAQSection (accordion state)
  - Animation wrappers
  - Interactive UI elements

## Animation System
- Framer Motion integration
- Intersection Observer for scroll animations
- Defined animation variants
- Responsive transitions
- Performance-optimized animations

## Responsive Design
- Mobile-first approach
- Breakpoints:
  - < 640px: Mobile
  - 640px - 1023px: Tablet
  - ≥ 1024px: Desktop
- Container max-width: 1280px`,

      'progress.md': `# Project Progress Tracking

## Current Phase
Initial Setup and Planning

## Completed Items
- Project scope definition
- Technology stack selection
- Component architecture planning
- Animation system design
- Directory structure planning

## In Progress
- Base Next.js 14 project setup
- Component directory structure creation
- Initial component migration planning
- Animation system implementation

## Next Steps
- Server component implementation
- Theme system integration
- Responsive design implementation
- Demo page development

## Timeline
1. Project Setup (Current)
2. Core Components Migration
3. Animation Implementation
4. Theme Integration
5. Demo Page Creation
6. Testing & Optimization`,
    }

    try {
      // Create/update each spec file
      for (const [filename, content] of Object.entries(specs)) {
        await this._writeFile(filename, content)
        console.log(`Updated ${filename}`)
      }

      // Log the update
      this.logger.log({
        action: 'START: Updated project specifications for Next.js 14 migration',
        files: Object.keys(specs).map((file) => `project/${file}`),
        decisions: [
          'Updated product specifications with Next.js 14 requirements',
          'Defined detailed component architecture',
          'Created progress tracking structure',
        ],
        results: 'Project specifications updated with migration plan details',
        nextSteps: ['Begin base Next.js 14 setup', 'Create initial component structure', 'Implement server components'],
      })

      console.log('Project specifications updated successfully')
    } catch (error) {
      console.error('Error updating project specifications:', error)
      throw error
    }
  }

  async _writeFile(filename, content) {
    const fullPath = path.join(this.projectSpecsPath, filename)

    // Ensure project specs directory exists
    if (!fs.existsSync(this.projectSpecsPath)) {
      fs.mkdirSync(this.projectSpecsPath, { recursive: true })
    }

    // Write file
    await fs.promises.writeFile(fullPath, content)
  }
}

// Usage
const updater = new ProjectSpecUpdater()
updater.updateSpecs().catch(console.error)
