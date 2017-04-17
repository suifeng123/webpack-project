/**
 * Created by Administrator on 2017/4/17.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warning: false
            },
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    module: {
        loaders: [{test: /\.css$/, loader: 'style-loader!css-loader'}]
    }

}