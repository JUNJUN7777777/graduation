const { defineConfig } = require('@vue/cli-service')
var webpack = require('webpack');

module.exports = defineConfig({
  publicPath: '/',
  outputDir: 'dist',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:595',
        pathRewrite: { '^/api': '' },
        ws: false, //如果要代理websockets
        secure: true, // 使用的是http协议则设置为false，https协议则设置为true
        changeOrigin: true, //将选项changeOrigin设置true为基于名称的虚拟托管站点。
      },
    },
    client: {
      overlay: false,
    },
  },
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [{
      $: 'jquery',
      jquery: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }])
  }

})
