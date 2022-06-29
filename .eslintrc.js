module.exports = {
  extends: [
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential', // This option doesn't impose formatting rules
    'plugin:vue/vue3-strongly-recommended', // This option imposes formatting rules on your code to improve readability
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    // 'vue/no-unused-vars': 'error'
    'prettier/prettier': ['error'],
    'vue/require-default-prop': 0,
  },
  globals: {
    _: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
}
