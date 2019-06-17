require('shelljs/global')

// var utils = require('./utils')
const path = require('path')
const config = require('../config')
const ora = require('ora')
const webpack = require('webpack')
const webpackConfig = require('./webpack.prod.conf')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

const spinner = ora('building for production...')
spinner.start()

const assetsPath = config.build.assetsRoot;
const staticPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);

rm('-rf', assetsPath)
mkdir('-p', staticPath);
cp('-R', 'static/*', staticPath)
cp('-R', 'images/*', staticPath + '/images')

//如果生成demo项目的话，生成demo数据
if(process.env.NODE_ENV=='staticbuild' || process.env.NODE_ENV== 'static') {

    // utils.generateMockData();
   
}



webpack(webpackConfig, function (err, stats) {

  cp('-R', path.join(assetsPath, process.env.NODE_PRODUCT,'static/images'), path.join(assetsPath,'static'))
  rm('-rf', path.join(assetsPath, process.env.NODE_PRODUCT));
  // rm('-rf', path.join(assetsPath));

  spinner.stop()

  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
