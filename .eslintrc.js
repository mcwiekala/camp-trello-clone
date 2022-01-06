module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'jsx-a11y',
    'react',
    'import',
    'simple-import-sort'
  ],
  rules: {
    'import/no-unresolved': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'no-param-reassign': [2, { props: false }],
    'arrow-parens': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true
      }
    ],
    'react/require-default-props': 'off',
    'no-case-declarations': 'off',
    'import/prefer-default-export': 'off',
    'no-control-regex': 'off',
    'react/prop-types': ['off'],
    'no-underscore-dangle': ['warn'],
    'implicit-arrow-linebreak': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    'no-undef': 'off',
    'import/no-extraneous-dependencies': 'off'
  },
  ignorePatterns: ['packages/**/lib'],
  settings: {
    'react': {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
}
