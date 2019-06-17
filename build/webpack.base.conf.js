const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const px2rem = require('postcss-px2rem');
const config = require('../config')
const utils = require('./utils')
const projectRoot = path.resolve(__dirname, '../')
const glob = require('glob');
let entries = utils.getJsEntry(`./src/projects/${process.env.NODE_PRODUCT}`);
const HelloWorldPlugin = require('./plugins/HelloWorldPlugin');
const generateTpl = require('./create-page/generateTpl.js');

const env = process.env.NODE_PRODUCT

const cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
const cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
const useCssSourceMap = cssSourceMapDev || cssSourceMapProd;

if (process.env.singlePage) {

    entries = path.resolve(`src/projects/${process.env.NODE_PRODUCT}/index.js`);
}

const webpackConfig = {

    entry: entries,
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue',
            'common': path.resolve(__dirname, '../src/common'),
            'vux': path.resolve(__dirname, '../src/components/vux/src/components'),
            'projects': path.resolve(__dirname, `../src/projects/${process.env.NODE_PRODUCT}/`),

            'data': path.resolve(__dirname, '../src/common/js/data'),
            'globalEvent': path.resolve(__dirname, '../src/common/js/global_event'),
            'libs': path.resolve(__dirname, '../src/common/js/libs'),
            'listenNative': path.resolve(__dirname, '../src/common/js/listen_native'),
            'pay': path.resolve(__dirname, '../src/common/js/pay'),
            'vueExtends': path.resolve(__dirname, '../src/common/js/vue_extends'),
            'components': path.resolve(__dirname, '../src/components'),
            'settings': path.resolve(__dirname, `../src/projects/${process.env.NODE_PRODUCT}/zcommon/app-settings`)
        }
    },
    resolveLoader: {
        fallback: [
            path.join(__dirname, '../node_modules'),
            path.join(__dirname, 'loaders')
        ]
    },
    module: {
        loaders: [

            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.js$/,
                loader: 'babel!customhtml-loader',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    // name: 'images/[name].[hash:7].[ext]'
                    name: utils.imageAssetsPath('images/[name].[hash:7].[ext]'),
                    publicPath: utils.imagePublicPath()
                } 
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: useCssSourceMap
        }),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    },

    plugins: [

        new HelloWorldPlugin(),
        new webpack.DefinePlugin({

            'process.env': {

                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                NODE_PRODUCT: JSON.stringify(process.env.NODE_PRODUCT),
                localIp: JSON.stringify(utils.getLocalIp()),
                NODE_PLATFORM: JSON.stringify(process.env.NODE_PLATFORM),
                NODE_CHANNEL: JSON.stringify(process.env.NODE_CHANNEL)
            }
        })
    ]
}

module.exports = webpackConfig;

if (!process.env.singlePage) {
    var dir = utils.getHtmlEntry(`./src/projects/${process.env.NODE_PRODUCT}`);

    var demoIntro = (env === 'static' || env === 'staticbuild') ? generateTpl.demoIntro : '';

    var allTpls = utils.getTpls();


    dir.forEach((pathname, index) => {

        var pagename = `pages/${pathname}`;

        var conf = {
            filename: `${pagename}.html`,
            pageNav: utils.getPageNav(pathname),
            pageTabBar: utils.getPageTabBar(pathname),
            title: utils.getPageTitle(pathname),
            demoIntro,
            template: allTpls[pathname],
            inject: true,
            chunksSortMode: 'dependency',
            NODE_PLATFORM: process.env.NODE_PLATFORM
        }

        if (pagename in module.exports.entry) {
            conf.chunks = ['manifest', 'vendor', pagename];
            conf.hash = true;
        }

        module.exports.plugins.push(new HtmlWebpackPlugin(conf));
    })
}