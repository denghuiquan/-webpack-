import imgsrc from "../img/07-数据存取.png"; // 图片资源也可以采用Es Module的导入形式进行导入

function packImage() {
  // 01 创建一个容器元素
  const oEle = document.createElement("div");
  oEle.className = "image-center";
  // 02 创建一个image标签，并为其添加src属性
  const oImg = document.createElement("img");
  oImg.width = 600;
  // Webpack4与webpack5差别在于导出的default，5中需要拿到default才是文件内的文件而精致或者打包后的文件路径,这里被导入的形式是{default: content}
  // 当然如果我们不想这么用，也可以在添加file-loader配置时添加options的esModule:false;意思就是不希望loader把文件封装成ESModule的形式
  oImg.src = require("../img/01-堆栈机制.png");
  // OImg.src = require('../img/01-堆栈机制.png').default // You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file.
  // oImg.setAttribute('src', 'https://images.gitee.com/uploads/images/2022/0602/165152_b593b268_1850385.png')
  // 03 把image标签挂在到上边创建的div容器元素上
  oEle.appendChild(oImg);
  setTimeout(() => {
    oImg.src = imgsrc;
  }, 2000);

  // 03 设置背景图片
  const oBgEle = document.createElement("div");
  oBgEle.className = "bgBox";
  oEle.appendChild(oBgEle);
  console.log("测试是否整合实现了模块热加载");
  return oEle;
}

// 把容器元素插入到document的body或者对应的元素后。
document.body.appendChild(packImage());
