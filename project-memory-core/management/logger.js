import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class ProjectLogger {
  constructor(projectRoot) {
    this.memoryCorePath = projectRoot
    this.paths = {
      core: path.join(this.memoryCorePath, 'core'),
      project: path.join(this.memoryCorePath, 'project'),
      management: path.join(this.memoryCorePath, 'management'),
      logs: path.join(this.memoryCorePath, 'management', 'logs'),
    }

    // Token limits per specification
    this.TOKEN_LIMITS = {
      quickContext: 200,
      activeState: 500,
      actionLog: 2000,
    }

    // File size limits
    this.MAX_FILE_SIZE = 5 * 1024 * 1024
    this.AVERAGE_CHARS_PER_TOKEN = 4

    this._ensureDirectoriesExist()
    this._initializeFiles()
  }

  _ensureDirectoriesExist() {
    const dirPaths = [
      ...Object.values(this.paths),
      path.join(this.paths.logs, 'daily'),
      path.join(this.paths.logs, 'archive'),
      path.join(this.paths.logs, 'reports'),
    ]
    dirPaths.forEach((dirPath) => {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
        console.log(`Created directory: ${dirPath}`)
      }
    })
  }

  _initializeFiles() {
    const templates = {
      'quickContext.md': `# Quick Context

## Last 3 Actions
1. [No actions yet]
2. [No actions yet]
3. [No actions yet]

## Current State
- Branch: main
- Feature: Initial setup
- Status: Not started

## Next Steps
1. [Next immediate action]
2. [Following action]`,

      'activeState.md': `# Active State

## Current Task
[Current feature/task being implemented]

## Progress
- Current step: [Specific action in progress]
- Last completed: [Last completed action]
- Next up: [Next planned action]

## Implementation Details
- Files affected: [List of files]
- Dependencies: [Any dependencies]
- Status: [In progress/Complete/Blocked]

## Known Issues
- [List of current blockers or issues]`,

      'actionLog.md': `# Action Log

## Latest Actions`,
    }

    Object.entries(templates).forEach(([filename, content]) => {
      const filePath = path.join(this.paths.core, filename)
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content)
        console.log(`Initialized ${filename} with template`)
      }
    })
  }

  _estimateTokens(text) {
    return Math.ceil(text.length / this.AVERAGE_CHARS_PER_TOKEN)
  }

  async _enforceTokenLimit(content, limit) {
    const lines = content.split('\n')
    let totalTokens = 0
    const keptLines = []

    for (const line of lines) {
      const lineTokens = this._estimateTokens(line)
      if (totalTokens + lineTokens <= limit) {
        keptLines.push(line)
        totalTokens += lineTokens
      } else {
        break
      }
    }

    return keptLines.join('\n')
  }

  _validateLogData(logData) {
    const requiredFields = ['action', 'files', 'decisions', 'results', 'nextSteps']
    const missingFields = requiredFields.filter((field) => !logData[field])

    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`)
    }

    if (!Array.isArray(logData.files)) throw new Error('Files must be an array')
    if (!Array.isArray(logData.decisions)) throw new Error('Decisions must be an array')
    if (!Array.isArray(logData.nextSteps)) throw new Error('NextSteps must be an array')
    if (typeof logData.results !== 'string') throw new Error('Results must be a string')

    const confidence = logData.decisions.find((d) => d.includes('confidence:'))
    if (!confidence) throw new Error('Must include confidence rating in decisions')
  }

  async _updateQuickContext(logData, timestamp) {
    const quickContextPath = path.join(this.paths.core, 'quickContext.md')
    const content = await fs.promises.readFile(quickContextPath, 'utf8')

    const sections = content.split('\n\n')
    const actionSection = sections.find((s) => s.includes('Last 3 Actions'))
    const actions = actionSection.split('\n').slice(1)

    // Update last 3 actions
    const newAction = `1. [${timestamp}] ${logData.action}`
    const updatedActions = [newAction, actions[0], actions[1]].filter((a) => a && !a.includes('[No actions yet]'))

    // Update current state
    const newState = `## Current State
- Branch: ${logData.files[0].split('/')[0]}
- Feature: ${logData.action.split(':')[1].trim()}
- Status: In progress

## Next Steps
${logData.nextSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}`

    const newContent = `# Quick Context

## Last 3 Actions
${updatedActions.join('\n')}

${newState}`

    await fs.promises.writeFile(
      quickContextPath,
      await this._enforceTokenLimit(newContent, this.TOKEN_LIMITS.quickContext),
    )
  }

  async _updateActiveState(logData) {
    const activeStatePath = path.join(this.paths.core, 'activeState.md')
    const newContent = `# Active State

## Current Task
${logData.action.split(':')[1].trim()}

## Progress
- Current step: ${logData.action}
- Last completed: ${logData.results}
- Next up: ${logData.nextSteps[0]}

## Implementation Details
- Files affected: ${logData.files.join(', ')}
- Status: In progress

## Known Issues
${logData.decisions
  .filter((d) => !d.includes('confidence:'))
  .map((d) => `- ${d}`)
  .join('\n')}`

    await fs.promises.writeFile(
      activeStatePath,
      await this._enforceTokenLimit(newContent, this.TOKEN_LIMITS.activeState),
    )
  }

  async _updateActionLog(logData, timestamp) {
    const actionLogPath = path.join(this.paths.core, 'actionLog.md')
    const entry = this._formatLogEntry({ timestamp, ...logData })

    let content = await fs.promises.readFile(actionLogPath, 'utf8')
    content = entry + '\n' + content

    await fs.promises.writeFile(actionLogPath, await this._enforceTokenLimit(content, this.TOKEN_LIMITS.actionLog))
  }

  _formatLogEntry(entry) {
    return `[${entry.timestamp}] ${entry.action}
Files Affected:
${entry.files.map((f) => `  - ${f}`).join('\n')}
Key Decisions:
${entry.decisions.map((d) => `  - ${d}`).join('\n')}
Results:
  ${entry.results}
Next Steps:
${entry.nextSteps.map((s) => `  - ${s}`).join('\n')}
-------------------`
  }

  async log(logData) {
    try {
      console.log('Starting log operation...')
      this._validateLogData(logData)
      const timestamp = new Date().toISOString()

      // Update core files
      await this._updateQuickContext(logData, timestamp)
      await this._updateActiveState(logData)
      await this._updateActionLog(logData, timestamp)

      // Archive management
      const formattedEntry = this._formatLogEntry({ timestamp, ...logData })
      const masterLogPath = path.join(this.paths.logs, 'archive', 'masterArchive.log')
      const dailyLogPath = path.join(this.paths.logs, 'daily', `${timestamp.split('T')[0]}.log`)

      await fs.promises.appendFile(masterLogPath, '\n' + formattedEntry)
      await fs.promises.appendFile(dailyLogPath, '\n' + formattedEntry)

      console.log('Log operation complete.')
      return true
    } catch (error) {
      console.error('Error in log operation:', error)
      throw error
    }
  }

  static async handleCLI() {
    const args = process.argv.slice(2)
    if (args.length < 2 || args[0] !== 'log') {
      console.error('Usage: node logger.js log \'{"action": "...", "files":[], ...}\'')
      process.exit(1)
    }

    let rawJson = args.slice(1).join(' ')
    if ((rawJson.startsWith("'") && rawJson.endsWith("'")) || (rawJson.startsWith('"') && rawJson.endsWith('"'))) {
      rawJson = rawJson.slice(1, -1)
    }

    try {
      const jsonData = JSON.parse(rawJson)
      const projectRoot = path.join(__dirname, '..')
      const logger = new ProjectLogger(projectRoot)
      await logger.log(jsonData)
    } catch (error) {
      console.error('Error processing log command:', error)
      process.exit(1)
    }
  }
}

// CLI handler
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  ProjectLogger.handleCLI().catch(console.error)
}

export default ProjectLogger
