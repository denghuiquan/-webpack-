module.exports = {
  plugins: [require("postcss-preset-env")] // 这里的插件是否需要require的方式引入，取决于插件使用的模块化规范及其导出方式
  // plugins: ['postcss-preset-env']
};
