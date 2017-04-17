/**
 * Created by Administrator on 2017/4/17.
 */
var webpack = require('webpack');
var commsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index: './src/js/page/index.js'
    },
    //入口文件输出配置
    output: {
        path:'dist/js/page',
        filename:'[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: /\.css$/,loader:'style-loader!css-loader'},
            {test: /\.js$/,loader:'jsx-loader?harmony'},
            {test: /\.(png|jpg)$/,loader:'url-loader?limit=8192'}
        ]
    },
    //其他解决方案
    resolve: {
        root: 'D:\web\webpack-project\myproject\src',//绝对路径
        extensions: ['','.js','.json','.scss'],
        alias: {
            AppStore: 'js/stores/AppStores.js',
            ActionType: 'js/actions/ActionType.js',
            AppAction: 'js/actions/AppAction.js'
        }
    }

}