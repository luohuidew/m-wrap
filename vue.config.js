// vue.config.js
// const webpack = require('webpack');
module.exports = {
  // 选项...
  productionSourceMap: false,
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/' : '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  }
}