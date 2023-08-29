module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: ['plugin:react/recommended', 'eslint:recommended'],
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'storybook'],
    rules: {
    },
  };
  