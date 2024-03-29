module.exports = {
  root: true,
  extends: ['bhz-www-base', '@unocss'],
  overrides: [
    {
      files: ['src/**/*'],
      excludedFiles: ['**/test/*', '**/demo/*'],
      rules: {
        // since we target ES2015 for baseline support, we need to forbid object
        // rest spread usage (both assign and destructure)
        'no-restricted-syntax': [
          'error',
          'ObjectExpression > SpreadElement',
          'ObjectPattern > RestElement'
        ],
        '@unocss/blocklist': 'warn' // or "error"
      }
    }
  ]
}
