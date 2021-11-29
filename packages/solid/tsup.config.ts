import { defineConfig } from 'tsup'
import { solidPlugin } from 'esbuild-plugin-solid'

export default defineConfig({
  entryPoints: ['index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  esbuildPlugins: [solidPlugin()],
})
