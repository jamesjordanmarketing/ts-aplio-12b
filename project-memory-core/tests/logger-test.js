import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import ProjectLogger from '../management/logger.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function runLoggerTests() {
  console.log('Starting logger tests...\n')

  const testCases = [
    {
      name: 'START action test',
      data: {
        action: 'START: Test feature implementation',
        files: ['src/test/TestComponent.js'],
        decisions: ['Using React hooks', 'Implementing error handling'],
        results: 'Initial setup complete',
        nextSteps: ['Create component structure', 'Add basic functionality'],
      },
    },
    {
      name: 'ACTION log test',
      data: {
        action: 'ACTION: Created test component',
        files: ['src/test/TestComponent.js', 'src/test/utils.js'],
        decisions: ['Added state management', 'Implemented error boundary'],
        results: 'Component framework created',
        nextSteps: ['Add unit tests', 'Implement event handlers'],
      },
    },
    {
      name: 'COMPLETE action test',
      data: {
        action: 'COMPLETE: Test feature implemented',
        files: ['src/test/*'],
        decisions: ['All tests passing', 'Code review completed'],
        results: 'Feature ready for deployment',
        nextSteps: ['Deploy to staging', 'Monitor performance'],
      },
    },
  ]

  const logger = new ProjectLogger(path.join(__dirname, '..'))

  for (const testCase of testCases) {
    console.log(`\nRunning test: ${testCase.name}`)
    console.log('Test data:', JSON.stringify(testCase.data, null, 2))

    try {
      await logger.log(testCase.data)

      // Verify file updates
      const files = [
        'core/quickContext.md',
        'core/actionLog.md',
        'core/activeState.md',
        'management/logs/daily/current.log',
      ]

      console.log('\nVerifying file updates:')
      for (const file of files) {
        const filePath = path.join(logger.memoryCorePath, file)
        if (fs.existsSync(filePath)) {
          const content = await fs.promises.readFile(filePath, 'utf8')
          const hasContent = content.includes(testCase.data.action)
          console.log(`- ${file}: ${hasContent ? 'Updated ✅' : 'Not updated ❌'}`)
        } else {
          console.log(`- ${file}: File not found ❌`)
        }
      }

      console.log(`\n${testCase.name} completed successfully ✅`)
    } catch (error) {
      console.error(`\n${testCase.name} failed ❌:`, error)
    }
  }
}

// Run tests
console.log('Project Memory Core Logger Tests\n')
runLoggerTests().catch(console.error)
