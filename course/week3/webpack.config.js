/**
 * webpack配置
 */


// 引入node.js的模块path, resolve 用来拼接绝对路径的方法
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//
module.exports = {
    entry: './week3/main.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build'),
    },
    // loader配置
    module: {
        rules: [
            //详细的loader配置
            {
                test: /\.css$/,
                // use中loader执行顺序，从下到上执行。
                use: [
                    //创建style标签，将js样式资源插入进去，加入到head中
                    'style-loader',
                    // 将css文件转换成commonjs模块加载到js中，里边的内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                // url-loader 依赖与file-loader， 所以下载的时候记得下载file-loader
                // url-loader 处理不了标签中的img, eg: <img src="./loading.png"/>
                loader: 'url-loader',
                options: {
                    // 图片小于8kib 就进行base64压缩，安装项目需求进行详细配置
                    limit: 8*1024,
                    // url-loader 默认使用esModules解析代码， html-loader使用common.js 引入图片。所以必须设置esModule：false
                    esModule: true,
                    // 图片重命名
                    // [hash:10] 表示只取图片hash值前10位
                    // [ext] 表示图片的扩展名
                    name: '[name][hash:6].[ext]'
                }
            },
            // {
            //     test: /\.html$/,
            //     // 处理html文件中的img(负责引入img, 从而被url-loader处理)
            //     loader: 'html-loader',
            // },
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                // 处理其他资源。  exclude 排除
                exclude: /\.(html|css|jpg|png|gif)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        // 基本作用就是生成html文件， 自动加载js/css...文件
        new HtmlWebpackPlugin({
            template: "./week3/index.html"
        })
    ],

    // 开发模式 development, 生产模式 production
    mode: 'development',

    // 开发环境热更新，自动打包，在内存中编译打包。
    // 依赖架包webpack-dev-server
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        // // 启动gzip压缩
        compress: true,

        // 端口号
        port: 3000,
        // 自动打开浏览器
        open: true
    }
}