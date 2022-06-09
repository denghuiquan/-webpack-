const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

// 开启一个express服务器
const app = express();

// 拿到项目的webpack配置文件
const config = require("./webpack.config.js");
// 使用webpack拿到它的编译器
const compiler = webpack(config);

// 使用我们的webpack-dev-middleware中间把编译器交给我们的服务器进行使用，也就是获得内存中的编译文件。
app.use(webpackDevMiddleware(compiler));

const port = 3000;
// 最后开启服务器的端口监听
app.listen(port, () => {
  console.log(
    `Dev server is listening on ${port} ...... please visit with the link: http://localhost:${port}`
  );
});
