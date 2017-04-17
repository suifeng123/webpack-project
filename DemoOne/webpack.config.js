/**
 * Created by Administrator on 2017/4/17.
 */
var  path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: ['./src/index'],
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                waring: false
            },
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style','css']
        },
            {
                test: /\.(png|jpg)$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    }
}