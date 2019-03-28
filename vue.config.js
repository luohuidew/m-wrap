// vue.config.js
// const webpack = require('webpack');
module.exports = {
  // 选项...
  // productionSourceMap: false,
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/' : '/',
  // lintOnSave: false,
  // lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    disableHostCheck: true, // 禁用webpack热重载检查 解决热更新失效问题
  },
 
}