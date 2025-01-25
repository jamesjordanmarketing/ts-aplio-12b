import { promises as fs } from 'fs'
import { join, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PROJECT_MEMORY_PATH = './project-memory-core'
const PROJECT_DOCS_PATH = join(PROJECT_MEMORY_PATH, 'project')

// Generic file pattern detection
function checkFilePattern(content, pattern) {
  if (typeof pattern === 'string') {
    return new RegExp(pattern, 'i').test(content)
  }
  return pattern.test(content)
}

async function analyzeProjectStructure() {
  const analysis = {
    components: new Map(),
    features: new Map(),
    technologies: new Map(),
    fileContents: new Map(),
    stats: {
      totalFiles: 0,
      appRouter: false,
      appComponents: [],
      serverComponents: [],
      clientComponents: [],
      apiRoutes: [],
      layouts: [],
      pages: [],
    },
  }

  async function walk(dir) {
    try {
      const files = await fs.readdir(dir)

      for (const file of files) {
        if (file.startsWith('.') || file === 'node_modules' || file === 'project-memory-core') continue

        const filePath = join(dir, file)
        const stat = await fs.stat(filePath)

        if (stat.isDirectory()) {
          if (file === 'app') analysis.stats.appRouter = true
          await walk(filePath)
        } else {
          if (!file.endsWith('.js') && !file.endsWith('.jsx') && !file.endsWith('.ts') && !file.endsWith('.tsx'))
            continue

          analysis.stats.totalFiles++
          const content = await fs.readFile(filePath, 'utf8')
          analysis.fileContents.set(filePath, content)

          // Analyze file type and content
          if (filePath.includes('/app/')) {
            analysis.stats.appComponents.push(filePath)
          } else if (filePath.includes('/pages/')) {
            analysis.stats.pages.push(filePath)
          }

          if (content.includes('use client')) {
            analysis.stats.clientComponents.push(filePath)
          } else if (filePath.endsWith('.server.js') || filePath.endsWith('.server.tsx')) {
            analysis.stats.serverComponents.push(filePath)
          }

          if (filePath.includes('/api/')) {
            analysis.stats.apiRoutes.push(filePath)
          }

          if (file.match(/layout\.(js|tsx?)$/)) {
            analysis.stats.layouts.push(filePath)
          }
        }
      }
    } catch (error) {
      console.error(`Error scanning directory: ${dir}`, error.message)
    }
  }

  console.log('Analyzing project implementation...')
  await walk('.')
  return analysis
}

function parseMarkdownSection(content) {
  const sections = new Map()
  let currentSection = ''
  let items = []

  content.split('\n').forEach((line) => {
    // Match section headers
    const headerMatch = line.match(/^##\s+(.+)/)
    if (headerMatch) {
      if (currentSection) {
        sections.set(currentSection, items)
        items = []
      }
      currentSection = headerMatch[1]
    }
    // Match list items (both - and numbered)
    else if (line.match(/^[-\d\.]+ .+/)) {
      items.push(line.replace(/^[-\d\.]+ /, '').trim())
    }
  })

  if (currentSection && items.length > 0) {
    sections.set(currentSection, items)
  }

  return sections
}

function checkImplementation(item, analysis) {
  // Convert item to patterns that might indicate its implementation
  const words = item.toLowerCase().split(' ')
  const patterns = words.filter((word) => word.length > 3 && !['with', 'and', 'the', 'for'].includes(word))

  // Check if any of the key patterns are found in the codebase
  return (
    Array.from(analysis.fileContents.values()).some((content) => {
      return patterns.some((pattern) => content.toLowerCase().includes(pattern))
    }) || analysis.stats[item.toLowerCase().replace(/\s+/g, '')] === true
  )
}

async function generateProgressReport(analysis) {
  try {
    // Read product specification
    const productSpec = await fs.readFile(join(PROJECT_DOCS_PATH, 'productSpec.md'), 'utf8')
    const specSections = parseMarkdownSection(productSpec)

    const report = ['# Project Progress\n']

    // Generate progress for each section from spec
    for (const [section, items] of specSections) {
      report.push(`## ${section}`)
      items.forEach((item) => {
        const implemented = checkImplementation(item, analysis)
        report.push(`- [${implemented ? 'x' : ' '}] ${item}`)
      })
      report.push('')
    }

    // Add implementation statistics
    report.push('## Implementation Statistics')
    report.push(`- Total Files: ${analysis.stats.totalFiles}`)
    report.push(`- App Router: ${analysis.stats.appRouter ? 'Implemented' : 'Not Implemented'}`)
    report.push(`- App Components: ${analysis.stats.appComponents.length}`)
    report.push(`- Server Components: ${analysis.stats.serverComponents.length}`)
    report.push(`- Client Components: ${analysis.stats.clientComponents.length}`)
    report.push(`- API Routes: ${analysis.stats.apiRoutes.length}`)
    report.push(`- Layout Files: ${analysis.stats.layouts.length}`)
    report.push(`- Pages: ${analysis.stats.pages.length}\n`)

    // Generate next steps based on unimplemented items
    report.push('## Next Steps')
    for (const [section, items] of specSections) {
      const unimplemented = items.filter((item) => !checkImplementation(item, analysis))
      if (unimplemented.length > 0) {
        report.push(`\n### ${section} Tasks`)
        unimplemented.forEach((item) => {
          report.push(`- Implement: ${item}`)
        })
      }
    }

    report.push(`\nLast Updated: ${new Date().toISOString()}`)
    return report.join('\n')
  } catch (error) {
    console.error('Error generating progress report:', error)
    throw error
  }
}

async function analyzeNextJsMigration() {
  try {
    console.log('Starting project analysis...')

    // Analyze project structure
    const projectAnalysis = await analyzeProjectStructure()

    // Generate and write progress report
    console.log('Generating progress report...')
    const report = await generateProgressReport(projectAnalysis)

    const progressPath = join(PROJECT_DOCS_PATH, 'progress.md')
    await fs.writeFile(progressPath, report)
    console.log(`Progress report updated at: ${progressPath}`)
  } catch (error) {
    console.error('Error in project analysis:', error.message)
    process.exit(1)
  }
}

// Run the analysis
analyzeNextJsMigration()
