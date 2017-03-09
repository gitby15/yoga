/**
 * Created by TimLi on 2017/3/8.
 */
var webpack = require('webpack');
var path = require('path');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry: {index : './index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        //把指定文件夹下的文件复制到指定的目录
        new TransferWebpackPlugin([
            {from: 'chrome'}
        ], path.resolve(__dirname))
    ]
}