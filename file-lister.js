import { promises as fs } from 'fs'
import { join, relative } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function generateFileList(startPath) {
  const fileList = ['# Project File Structure\n']
  let indentLevel = 0

  async function walkDir(dir) {
    const files = await fs.readdir(dir)

    for (const file of files) {
      if (file.startsWith('.') || file === 'node_modules') continue

      const filePath = join(dir, file)
      const stat = await fs.stat(filePath)
      const relativePath = relative(startPath, filePath)
      const indent = '  '.repeat(indentLevel)

      if (stat.isDirectory()) {
        fileList.push(`${indent}- 📁 ${file}/`)
        indentLevel++
        await walkDir(filePath)
        indentLevel--
      } else {
        fileList.push(`${indent}- 📄 ${file}`)
      }
    }
  }

  try {
    await walkDir(startPath)
    await fs.writeFile('fileList.md', fileList.join('\n'))
    console.log('File list generated successfully in fileList.md')
  } catch (error) {
    console.error('Error generating file list:', error)
  }
}

// Run the script
const projectPath = process.cwd() // Gets current working directory
generateFileList(projectPath)
