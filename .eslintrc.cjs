module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Airbnb with a couple of minor tweaks
    'object-shorthand': ['error', 'always'],
    indent: ['warning', 4],
    'linebreak-style': 'off',
    'eol-last': ['error', 'never'],
    'max-len': ['error', { code: 450 }],
    'space-before-function-paren': ['error', 'always'],

    'vue/html-indent': ['error', 4, {
      attribute: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],

    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],

    'vue/multi-word-component-names': 'off',
  }
}
