// vue.config.js
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  runtimeCompiler : true,
  configureWebpack: {
        plugins: [
            new MonacoWebpackPlugin()
        ]
    },
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
    }
}