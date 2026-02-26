import nuxt from '@nuxt/eslint-config'

export default [
  ...nuxt(),
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]