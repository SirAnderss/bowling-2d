const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}

module.exports = {
  extends: ['plugin:vue/vue3-essential', 'prettier'],
  rules: {
    'prefer-regex-literals': RULES.OFF,
    'vue/no-unused-vars': RULES.ERROR
  }
}
