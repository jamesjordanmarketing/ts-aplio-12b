#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Templates for markdown files
const templates = {
  // Core files
  'core/activeState.md': `# Active State

## Current Task
[Describe current task]

## Progress
- Step 1: Not started
- Step 2: Not started

## Next Actions
1. [Next immediate action]
2. [Following action]

## Known Issues
- None`,

  'core/quickContext.md': `# Quick Context

## Last 3 Actions
1. [Most recent action]
2. [Second most recent action]
3. [Third most recent action]

## Current State
[Brief project state description]

## Active Changes
- Branch: main
- Changes: Initial setup`,

  'core/actionLog.md': `# Action Log

## Project Memory Core Initialization
- Initial project setup created`,

  // Project files
  'project/productSpec.md': `# Product Specification

## Purpose
[Why this project exists]

## Core Requirements
1. [Primary requirement]

## Success Criteria
- [Key success indicator]`,

  'project/architecture.md': `# System Architecture

## Tech Stack
- [Primary technologies]

## Key Patterns
1. [Architectural pattern]

## Constraints
- [Project constraints]`,

  'project/progress.md': `# Project Progress

## Completed Features
- [Initial features]

## Pending Work
1. [Next planned task]

## Known Issues
- [Initial challenges]`,
}

// Logging System Script
const loggingSystemScript = `import fs from 'fs';
import path from 'path';

class ProjectLogger {
  constructor(projectRoot) {
    // Define core paths
    this.projectRoot = projectRoot;
    this.memoryCorePath = path.join(projectRoot, 'project-memory-core');
    
    // Define specific paths
    this.paths = {
      core: path.join(this.memoryCorePath, 'core'),
      project: path.join(this.memoryCorePath, 'project'),
      management: path.join(this.memoryCorePath, 'management'),
      logs: path.join(this.memoryCorePath, 'management', 'logs')
    };

    // Ensure all necessary directories exist
    this._ensureDirectoriesExist();
  }

  // Create all necessary directories
  _ensureDirectoriesExist() {
    Object.values(this.paths).forEach(dirPath => {
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(\`Created directory: \${dirPath}\`);
      }
    });

    // Specific subdirectories for logs
    const logSubdirs = ['daily', 'archive', 'reports'];
    logSubdirs.forEach(subdir => {
      const fullPath = path.join(this.paths.logs, subdir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });
  }

  // Comprehensive logging method
  log(context) {
    const timestamp = new Date().toISOString();
    const logEntry = \`[\${timestamp}] \${context}\n\`;

    // Append to master archive log
    const masterLogPath = path.join(this.paths.logs, 'archive', 'masterArchive.log');
    fs.appendFileSync(masterLogPath, logEntry);

    // Append to daily log
    const dailyLogFileName = \`\${new Date().toISOString().split('T')[0]}.log\`;
    const dailyLogPath = path.join(this.paths.logs, 'daily', dailyLogFileName);
    fs.appendFileSync(dailyLogPath, logEntry);

    // Manage token-based context log
    this._manageMasterContextLog(logEntry);
  }

  // Token-based context management
  _manageMasterContextLog(logEntry) {
    const contextLogPath = path.join(this.paths.core, 'quickContext.md');
    
    // Read current context
    let currentContext = fs.readFileSync(contextLogPath, 'utf8');
    
    // Prepend new entry
    const updatedContext = \`## Last Actions\n\${logEntry}\n\n\${currentContext}\`;
    
    // Token management (rough estimation)
    const MAX_TOKENS = 200;
    const lines = updatedContext.split('\\n');
    const truncatedContext = lines.slice(0, MAX_TOKENS / 10).join('\\n');
    
    // Write back to context file
    fs.writeFileSync(contextLogPath, truncatedContext);
  }

  // Generate reports
  generateReport(days = 7) {
    const masterLogPath = path.join(this.paths.logs, 'archive', 'masterArchive.log');
    const logContent = fs.readFileSync(masterLogPath, 'utf8');
    
    // Simple report generation
    const recentLogs = logContent
      .split('\\n')
      .filter(line => {
        const logDate = new Date(line.split(']')[0].replace('[', ''));
        const daysAgo = new Date();
        daysAgo.setDate(daysAgo.getDate() - days);
        return logDate > daysAgo;
      })
      .join('\\n');

    const reportPath = path.join(this.paths.logs, 'reports', \`report-last-\${days}-days.md\`);
    fs.writeFileSync(reportPath, \`# Project Log Report (Last \${days} Days)\n\n\${recentLogs}\`);

    return reportPath;
  }

  // Automatic archive and cleanup
  archiveLogs() {
    const ARCHIVE_THRESHOLD_DAYS = 30;
    const dailyLogsPath = path.join(this.paths.logs, 'daily');
    const archivePath = path.join(this.paths.logs, 'archive');

    // Move old log files to archive
    fs.readdirSync(dailyLogsPath)
      .filter(file => file.endsWith('.log'))
      .forEach(file => {
        const filePath = path.join(dailyLogsPath, file);
        const fileDate = new Date(file.replace('.log', ''));
        const daysOld = (new Date() - fileDate) / (1000 * 60 * 60 * 24);
        
        if (daysOld > ARCHIVE_THRESHOLD_DAYS) {
          const archiveFilePath = path.join(archivePath, file);
          fs.renameSync(filePath, archiveFilePath);
        }
      });
  }
}

export default ProjectLogger;`

function initializeProjectMemoryCore() {
  const projectRoot = process.cwd()
  const memoryCorePath = path.join(projectRoot, 'project-memory-core')
  const corePath = path.join(memoryCorePath, 'core')
  const projectPath = path.join(memoryCorePath, 'project')
  const managementPath = path.join(memoryCorePath, 'management', 'logs')

  // Ensure directories exist
  ;[
    corePath,
    projectPath,
    path.join(managementPath, 'daily'),
    path.join(managementPath, 'archive'),
    path.join(managementPath, 'reports'),
  ].forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
      console.log(`Created directory: ${dir}`)
    }
  })

  // Write template files
  Object.entries(templates).forEach(([relativePath, content]) => {
    const fullPath = path.join(memoryCorePath, relativePath)
    fs.writeFileSync(fullPath, content)
    console.log(`Created file: ${relativePath}`)
  })

  // Write logging system script
  const loggingScriptPath = path.join(memoryCorePath, 'management', 'logger.js')
  fs.writeFileSync(loggingScriptPath, loggingSystemScript)
  console.log('Created logging system script')

  console.log('Project Memory Core initialized successfully!')
}

// Run the initialization
initializeProjectMemoryCore()
