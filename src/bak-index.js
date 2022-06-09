import * as utils from "./js/utils.js";
const getUserInfo = require("./js/api.js");
/* Let getUserInfo
import('./js/api.js').then(mod => {
    console.log(mod)
    getUserInfo = mod.getUserInfo
}).catch(err => {
    console.log(err)
}) */
console.log(getUserInfo(9527));
console.log(utils);
