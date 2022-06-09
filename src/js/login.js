// 需要做的是模拟vue的实现机制，
// 1 先创建dom元素展示在页面中，
// 2 再设置它的样式，
// 3 最后拿到它的结果
import "../css/login.less";
import "../css/login.css";
// Import '../css/test.css'

// import 'css-loader!../css/login.css'  // 行内形式使用loader加载文件
// ERROR in ./src/css/login.css 1:0
// Module parse failed: Unexpected token (1:0)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders

const login = () => {
  const oH2 = document.createElement("h2");
  oH2.innerHTML = `<p>What is your Name?</p><p>Please input your student ID:<input ></input></p>`;
  oH2.className = "login-title";
  return oH2;
};

document.body.appendChild(login());
