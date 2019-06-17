const glob = require('glob');
const path = require('path')
const fs = require('fs');
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const generateTpl = require('./create-page/generateTpl.js');
const titleConfigs = require(`../src/projects/${process.env.NODE_PRODUCT}/zcommon/app-settings/title`);
const tabbarConfigs = require(`../src/projects/${process.env.NODE_PRODUCT}/zcommon/app-settings/tabbar`);

exports.assetsPath = function(_path) {

    let assetsSubDirectory;

    if (process.env.NODE_ENV === 'mock' || process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'static') {

        assetsSubDirectory = config.build.assetsSubDirectory;
    } else {

        assetsSubDirectory = config.build.assetsSubDirectory;
    }

    return path.posix.join(assetsSubDirectory, _path)
}


exports.imageAssetsPath = function(_path) {

    let assetsSubDirectory;
    console.log(process.env.NODE_PLATFORM)
    if (process.env.NODE_ENV === 'mock' || process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staticbuild') {
        
        if(process.env.NODE_PLATFORM == 'app') {

            assetsSubDirectory = '../'

        } else {
            
            if (process.env.NODE_HIERARCHY == 'relative') {
                return 'static/' + _path  
            }else{
                assetsSubDirectory = `${process.env.NODE_PRODUCT}/static`;
            }
                
        }
        
    } else {

        assetsSubDirectory = config.build.assetsSubDirectory;
    }
    
    console.log(path.posix.join(assetsSubDirectory, _path))
    return path.posix.join(assetsSubDirectory, _path)
}

exports.imagePublicPath = () => {
    if (process.env.NODE_HIERARCHY == 'relative') {
        return process.env.NODE_PLATFORM == 'app' ? "" : '../../../'
    } else {
        return process.env.NODE_PLATFORM == 'app' ? "" : '/'
    }
}

exports.cssLoaders = function(options) {
    options = options || {}

    function generateLoaders(loaders) {
        let sourceLoader = loaders.map(function(loader) {
            let extraParamChar
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?')
                extraParamChar = '&'
            } else {
                loader = loader + '-loader'
                extraParamChar = '?'
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        }).join('!')


        if (options.extract) {

            return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
            // return ExtractTextPlugin.extract(sourceLoader);
        } else {
            return ['vue-style-loader', sourceLoader].join('!')
        }
    }

    return {
        css: generateLoaders(['css']),
        postcss: generateLoaders(['css']),
        less: generateLoaders(['css', 'autoprefixer?remove=false', 'px2rem?remUnit=75&remPrecision=8', 'less', 'customcss']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    }
}

exports.styleLoaders = function(options) {
    let output = []
    let loaders = exports.cssLoaders(options)
    for (let extension in loaders) {
        let loader = loaders[extension]
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader: loader
        })
    }

    return output
}

//获取js路劲
exports.getJsEntry = function(globPath) {
    let entries = {};
    console.log(globPath)
    let dirs = fs.readdirSync(globPath);
    dirs = dirs.filter(dir => {

        let stat = fs.statSync(path.join(__dirname, '../', globPath, dir));


        if (dir == 'zcommon') return false;

        return stat.isDirectory();
    })

    dirs.forEach(dir => {

        entries[`pages/${dir}`] = path.join(__dirname, '../', globPath, dir, `${dir}.js`);
    })

    return entries;

}

exports.getHtmlEntry = function(globPath) {

    let entries = [],
        basename, tmp, pathname;


    let files = fs.readdirSync(globPath);

    files.forEach(function(item, index) {
        
        let filePath = path.join(globPath, item);
        let stats = fs.statSync(filePath);

        if (stats.isDirectory() && item != 'zcommon') {

            entries.push(item);
        }
    })

    return entries;
}

//获取所有页面列表
exports.generatePageList = function() {

    let sourcePath = path.join(__dirname, `../src/projects/${process.env.NODE_PRODUCT}`);

    let files = fs.readdirSync(sourcePath);
    let content = '';
    let imageContent = '';

    //得到src下面的目录
    files = files.filter(function(item) {

        let stats = fs.statSync(path.join(sourcePath, item));

        if (!stats.isDirectory() || item == 'zcommon') {

            return false;

        } else {

            return true;
        }
    })

    let totalPages = files.length;

    files.forEach(function(item) {

        let desc = fs.readFileSync(path.join(sourcePath, item, `readme.md`), 'utf-8');

        content += `<li>
            <a href="http://localhost:8080/pages/${item}.html" target="_blank">${item}-${desc}</a>
      </li>`
    })


    return `
        <li style="font-size:34px;">总共的页面: ${totalPages}</li>
        ${content}
        <div class="img-wrap">
            ${imageContent}
        </div>
        
        `;
}

//获取本地的ip
exports.getLocalIp = function() {

    let interfaces = require('os').networkInterfaces();
    let localIp;

    for (let item in interfaces) {

        if (item.indexOf('en') > -1) {

            interfaces[item].forEach(item => {

                if (item.netmask === '255.255.255.0') {

                    localIp = item.address;
                }
            })
        }

    }

    return localIp;
}

exports.getTpls = function() {

    let tplCommonPath = path.join(__dirname, `../src/projects/${process.env.NODE_PRODUCT}/`);

    let files = fs.readdirSync(tplCommonPath);

    let allTpls = {};

    files = files.filter(function(item) {

        let stats = fs.statSync(tplCommonPath + item);

        if (stats.isDirectory() && (item != 'zcommon')) {

            let tplPath = `${tplCommonPath}${item}/tpl/tpl.ejs`;

            if (fs.existsSync(tplPath)) {

                allTpls[item] = tplPath
            } else {

                allTpls[item] = `${tplCommonPath}zcommon/tpl.ejs`;
            }
        }

    })

    return allTpls;

}

//获取顶部导航
exports.getPageNav = function(pathname) {

    let pageNav = '';
    
    if ((process.env.NODE_PLATFORM == 'app' || process.env.NODE_ENV=='dev') && !!titleConfigs[pathname] && !!titleConfigs[pathname].title) {//如果不配置title字段的话，表示不显示导航

        pageNav = generateTpl.pageNav(titleConfigs[pathname]);
    }
    
    // console.log(pageNav)
    return pageNav;
}

//获取底部tabBar
exports.getPageTabBar = function(pathname) {

    let pageTabBar = '';
    let customTpl = '';
    let projectCustomTplPath = path.join(__dirname, `../src/projects/${process.env.NODE_PRODUCT}/zcommon/public-tpl.js`);

    if(fs.existsSync(projectCustomTplPath)) {

        customTpl = require(projectCustomTplPath);
    } 

    if(tabbarConfigs[pathname] && tabbarConfigs[pathname].isShowTabBar) {

        pageTabBar = customTpl.pageTabBar && customTpl.pageTabBar(tabbarConfigs[pathname]) ||  generateTpl.pageTabBar(tabbarConfigs[pathname]);
    }

    return pageTabBar;
}

//生成当前页面的标题
exports.getPageTitle = function(pathname) {

    let title = titleConfigs[pathname] && titleConfigs[pathname].title;

    return title;
}

/**
 * 自动生成静态项目
 * @return {[type]} [description]
 */
exports.generateMockData = () => {

    let mockDataFilePath = path.join(process.cwd(), 'src/common/js/generateStaticHtml/mockData.js');

    fs.writeFileSync(mockDataFilePath, '', 'utf-8');

    fs.writeFileSync(mockDataFilePath, 'module.exports = {');

    let projectPath = path.join(process.cwd(), `src/projects/${process.env.NODE_PRODUCT}`);

    let routeDirs = fs.readdirSync(projectPath);

    routeDirs = routeDirs.filter(item => {

        let routePath = path.join(projectPath, item);

        let stat = fs.statSync(routePath);

        return stat.isDirectory()
    })

    // console.log(routeDirs)
    routeDirs.forEach((item, index) => {

        let realRoutePath = path.join(projectPath, item, 'mock/index.js');

        routeContent = fs.readFileSync(realRoutePath, 'utf-8');

        let content = routeContent.replace(/[\s\S]*module\.exports = \{([\s\S]*)\}[\s\S]*/ig, function($all, $1, $2) {

            return /[a-z]/ig.test($1) ?  `${$1},` : '';
        });

        fs.appendFileSync(mockDataFilePath, content, 'utf-8');


    })

    fs.appendFileSync(mockDataFilePath, '}', 'utf-8');

}



