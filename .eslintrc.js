module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    'import',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // prettier に関する設定
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      }
    ],
    // ReactHooks に関する設定
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    // PropTypes を無効
    'react/prop-types': 'off',
    // 関数の引数や戻り値に型を付けないことを許可
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 未使用の変数がある場合 error にする（デフォルトは warning）
    '@typescript-eslint/no-unused-vars': 'error',
    // named-export を許可
    'import/prefer-default-export': 'off',
    // 絶対パスでのモジュール読み込みを許可
    'import/no-unresolvrd': 'off',
    // import の順番を並び替える
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
  },
}
