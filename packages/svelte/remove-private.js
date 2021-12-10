import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

// remove private: true from built package.json
const distPackageJsonPath = path.join('dist', 'package.json')
const packageJson = JSON.parse(readFileSync(distPackageJsonPath))
packageJson.private = undefined

writeFileSync(distPackageJsonPath, JSON.stringify(packageJson, null, 2))
