// vue.config.js
// const webpack = require('webpack');
module.exports = {
  // 选项...
  baseUrl: process.env.NODE_ENV === 'production' ?
    '' : '/',
  // assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      /* github上提示的删除提示的方法，不可用 */
      config.optimization.minimizer[0].options.extractComments = true;
      config.optimization.minimizer[0].options.uglifyOptions.output.comments = false;
      config.optimization.minimizer[0].options.uglifyOptions.compress = {
        warnings: false,
        drop_debugger: false,
        drop_console: false,
        pure_funcs: ['console.log']
      };
      config.optimization.minimizer[0].options.sourceMap = false;
    }
  }
}