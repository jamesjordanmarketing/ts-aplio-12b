#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function verifyLogger() {
  console.log('Verifying Project Memory Core Logger...\n')

  // Test command
  const testCommand = {
    action: 'VERIFY: Logger system test',
    files: ['test/verify.js'],
    decisions: ['Running verification', 'Testing file updates'],
    results: 'Verification process executed',
    nextSteps: ['Check test results', 'Fix any issues'],
  }

  // 1. Verify directory structure
  console.log('1. Checking directory structure...')
  const requiredDirs = [
    'project-memory-core/core',
    'project-memory-core/project',
    'project-memory-core/management',
    'project-memory-core/management/logs',
    'project-memory-core/management/logs/daily',
    'project-memory-core/management/logs/archive',
    'project-memory-core/management/logs/reports',
  ]

  for (const dir of requiredDirs) {
    const exists = fs.existsSync(dir)
    console.log(`- ${dir}: ${exists ? '✅' : '❌'}`)
  }

  // 2. Test logger command
  console.log('\n2. Testing logger command...')
  try {
    const command = `cd project-memory-core && node management/logger.js log '${JSON.stringify(testCommand)}'`
    console.log('Executing:', command)
    execSync(command, { stdio: 'inherit' })
  } catch (error) {
    console.error('Logger command failed:', error)
    process.exit(1)
  }

  // 3. Verify file updates
  console.log('\n3. Verifying file updates...')
  const filesToCheck = {
    'core/quickContext.md': 'VERIFY: Logger system test',
    'core/actionLog.md': 'VERIFY: Logger system test',
    'core/activeState.md': 'VERIFY: Logger system test',
  }

  for (const [file, content] of Object.entries(filesToCheck)) {
    const filePath = path.join('project-memory-core', file)
    try {
      const fileContent = await fs.promises.readFile(filePath, 'utf8')
      const updated = fileContent.includes(content)
      console.log(`- ${file}: ${updated ? '✅ Updated' : '❌ Not updated'}`)
      if (!updated) {
        console.log('  Current content:', fileContent.substring(0, 100) + '...')
      }
    } catch (error) {
      console.log(`- ${file}: ❌ Error reading file`)
    }
  }

  // 4. Verify log files
  console.log('\n4. Checking log files...')
  const today = new Date().toISOString().split('T')[0]
  const logFiles = [`management/logs/daily/${today}.log`, 'management/logs/archive/masterArchive.log']

  for (const logFile of logFiles) {
    const filePath = path.join('project-memory-core', logFile)
    try {
      const exists = fs.existsSync(filePath)
      if (exists) {
        const content = await fs.promises.readFile(filePath, 'utf8')
        const hasEntry = content.includes('VERIFY: Logger system test')
        console.log(`- ${logFile}: ${hasEntry ? '✅ Has entry' : '❌ No entry'}`)
      } else {
        console.log(`- ${logFile}: ❌ File not found`)
      }
    } catch (error) {
      console.log(`- ${logFile}: ❌ Error reading file`)
    }
  }
}

// Run verification
verifyLogger().catch(console.error)
