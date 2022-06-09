import * as utils from "./js/utils.js";
const Api = require("./js/api.js");
import "./js/login.js";
/* Let getUserInfo
import('./js/api.js').then(mod => {
    console.log(mod)
    getUserInfo = mod.getUserInfo
}).catch(err => {
    console.log(err)
}) */

console.log(Api.getUserInfo(9527));
console.log(Api.ajaxAsync("https://www.lookatme.com"));
console.log(utils.sum(120, 233));
console.log(utils.square(12));
import "./js/font.js";
import "./js/image.js";

/**
 * 打包图片
 *  1、img标签的src
 *  2、样式中的background的url
 */
const a = prompt("可以吗？");
const b = confirm("can i help you?");
console.log(a, b);
import "./js/HMRDemo.js";

// 判断模块热更新是否开启
if (module.hot) {
  // 配置需要使用到模块热更新的文件
  module.hot.accept(["./js/HMRDemo.js", "./js/image.js"]);
}
