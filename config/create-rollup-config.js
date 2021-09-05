const name = require('./package.json').main.replace(/\.js$/, '')

const bundle = (config) => ({
  ...config,
  external: (id) => !/^[./]/.test(id),
})

export default ({ input, plugins, dtsPlugins }) => {
  return [
    bundle({
      plugins,
      input,
      output: [
        {
          file: `${name}.js`,
          format: 'cjs',
        },
        {
          file: `${name}.mjs`,
          format: 'es',
        },
      ],
    }),
    // bundle({
    //   plugins: dtsPlugins,
    //   input,
    //   output: {
    //     file: `${name}.d.ts`,
    //     format: 'es',
    //   },
    // }),
  ]
}
