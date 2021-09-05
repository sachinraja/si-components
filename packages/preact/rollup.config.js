import createRollupConfig from '../../config/create-rollup-config'
import esbuild from 'rollup-plugin-esbuild'
import inject from '@rollup/plugin-inject'
import dts from 'rollup-plugin-dts'

export default createRollupConfig({
  input: 'index.tsx',
  plugins: [
    esbuild({
      jsxFactory: 'h',
    }),
    inject({
      h: ['preact', 'h'],
    }),
  ],
  dtsPlugins: [dts()],
})