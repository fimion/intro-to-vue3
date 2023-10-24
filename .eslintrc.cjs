const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: '@antfu',
  overrides: [
    {
      files: ['*.html'],
      rules: {
        '@typescript-eslint/*': ['off'],
      },
    },
  ],
})
