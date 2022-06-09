const path = require("path");
console.log(`using config : ${__filename}`);
module.exports = {
  entry: "./src/main.js", // 可以使用相对路径
  output: {
    path: path.resolve(__dirname, "../dist"), // - configuration.output.path: The provided value must be an absolute path!
    filename: "build.js"
  }
};
