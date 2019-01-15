// pages/role/role.js
//common.js 封装的函数

function role(db) {
  this.db = db;



}




//转化成小程序模板语言 这一步非常重要 不然无法正确调用

module.exports = {
  role: role
};
