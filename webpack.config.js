const { use } = require("browser-sync");
const path = require("path");
const { DefinePlugin } = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // Watch: true,
  mode: "development",
  // Devtool: false, // 关闭开发内容的输出
  entry: "./src/main.js", // 可以使用相对路径
  output: {
    path: path.resolve(__dirname, "dist"), // - configuration.output.path: The provided value must be an absolute path!
    filename: "js/build.js"
    // AssetModuleFilename: 'img/[name].[hash:8][ext]' // 全局配置无法区分不同资源存放的目录，一般不太推荐
  },
  target: "web",
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 一个匹配文件名的正则表达式
        /* use: [ // 用于告知当前规则匹配的文件类型的要使用到的loader，一个文件可能需要多个loader对其进行处理
                    {
                        loader: 'css-loader',
                        // options: 
                        // params: //webpack4 经常使用， webpack5中被合并到其他地方了
                    }
                ] */
        // 以下是上面的简写, 只需要被一个loader处理且不需要给loader传递其他参数配置的时候可以这样简写
        // loader: 'css-loader' // 也可以使用: use:['css-loader']
        // use中配置的loader的执行是有顺序的，默认从右往左或者从下往上，反正就是从后往前依次处理
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false // 不转为ES Module
            }
          },
          "postcss-loader"
        ] // 需要多个loader，而这些loader在处理时不需要传递额外的参数配置。
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              esModule: false // 不转为ES Module
            }
          },
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        // Type: 'asset/inline',
        type: "asset",
        generator: {
          filename: "img/[name].[hash:8][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024 // 设置最大阈值
          }
        }
        /* Type: 'asset/resource',
                generator: {
                    filename: 'img/[name].[hash:8][ext]'
                } */
        /* use: [
                    {
                        // loader: 'file-loader', // 文件拷贝形式
                        loader: 'url-loader', // 适合小文件转base64编码插入到代码中
                        options: {
                            name: 'img/[name].[hash:8].[ext]',
                            // outputPath: 'img', // 配简写配置到name中
                            limit: 25 * 1024, // <=25kb的转base64, >25kb的使用拷贝的方式
                            esModule: false // 不转为ES Module
                        }
                    }
                ] */
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:8][ext]"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
        // Use: [
        //     {
        //         loader: 'babel-loader',
        //         // 这块为避免过深的嵌套以及方便项目的后续管理，可以抽取成一个babel.config.js的配置文件
        //         // options: {
        //         //     /* plugins: [
        //         //         '@babel/plugin-transform-arrow-functions',
        //         //         '@babel/plugin-transform-block-scoping'
        //         //     ] */
        //         //     presets: [['@babel/preset-env', { targets: 'chrome 91' }]]
        //         // }
        //     }
        // ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "WebPack is the best frontend develope tool.",
      template: "./public/index.html"
    }),
    new DefinePlugin({
      BASE_URL: '"./"' // 这里根据给的内容去定义常量，所以需要两层引号
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          // To: './dist', // 这里可以忽略简写，因为不给to,默认会存放到webpack配置的output的path指定的目录
          globOptions: {
            ignore: ["**/index.html"]
          }
        }
      ]
    })
  ]
};
