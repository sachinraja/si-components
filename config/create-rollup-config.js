const name = require('./package.json').main.replace(/\.js$/, '')

const bundle = (config) => ({
  ...config,
  external: (id) => !/^[./]/.test(id),
})

export default ({ input, plugins, dtsPlugins }) => {
  const config = []
  config.push(
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
  )

  if (dtsPlugins)
    config.push(
      bundle({
        plugins: dtsPlugins,
        input,
        output: {
          file: `${name}.d.ts`,
          format: 'es',
        },
      }),
    )

  return config
}
