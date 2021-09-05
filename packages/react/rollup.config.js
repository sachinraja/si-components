import createRollupConfig from '../../config/create-rollup-config'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'

export default createRollupConfig({
  input: 'index.tsx',
  plugins: [esbuild()],
  dtsPlugins: [dts()],
})
