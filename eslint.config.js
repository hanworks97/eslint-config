import hanworks from './dist/index.js'

export default hanworks({
  formatters: true,
}, {
  rules: {
    'antfu/no-import-dist': 'off',
  },
})
