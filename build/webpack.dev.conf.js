const path = require('path');
const config = require('../config')
const webpack = require('webpack')
const merge = require('webpack-merge')
const utils = require('./utils')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
var webpackConfig = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    devtool: '#eval-source-map',
    plugins: [
        
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({

            filename: 'index.html',
            pageList: utils.generatePageList(),
            template: path.join(__dirname, `../src/projects/${process.env.NODE_PRODUCT}/zcommon/index.ejs`),
            inject: false,
            chunksSortMode: 'dependency'
        }),
       
    ]
})

module.exports = webpackConfig;