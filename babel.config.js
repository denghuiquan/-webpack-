module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        /**
         * UseBuiltIns的值有一下三种：
         * 01、 false ： 默认值，表示不对当前JS处理做polyfill填充。
         * 02、 usage ： 表示要依据用户当前源代码当中所使用到的新语法新特性进行填充。这里有个问题需要注意，就是当前安装的corejs的版本需要匹配才能正常运行
         * 03、 entry ： 表示要根据当前项目筛选出来的浏览器决定填充什么。没有配置targets的情况下跟false值一样
         */
        // useBuiltIns: 'usage', // asset js/build.js 60.2 KiB [emitted] (name: main)
        // useBuiltIns: 'usage', // asset js/build.js 193 KiB [emitted] (name: main)
        useBuiltIns: "entry", // Asset js/build.js 60.2 KiB [emitted] (name: main)
        corejs: 3
      }
    ]
  ] // 兼容目标配置就采用.browserslistrc文件的配置
  // presets: [['@babel/preset-env', { targets: 'chrome 91' }]]
};
