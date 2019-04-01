module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "arrow-spacing": 0,//=>的前/后括号
    "comma-spacing": 0,//逗号前后的空格
    "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
    "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "no-trailing-spaces": 0//一行结束后面不要有空格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
