module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
<<<<<<< HEAD
  extends: [`react-app`, 'prettier'],
=======
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'react-app', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
>>>>>>> ece9227 (feat: installed and formatted prettier)
};
