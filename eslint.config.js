import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  ignores: [
    'src/testing-app/**',
  ],
  rules: {
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'error',
  },

  extends: [eslint.configs.recommended, tseslint.configs.recommended],
})
