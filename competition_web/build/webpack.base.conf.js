var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require("webpack")

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      // webpack 使用 jQuery，如果是自行下载的
      // 'jquery': path.resolve(__dirname, '../src/assets/libs/jquery/jquery.min'),
      // 如果使用NPM安装的jQuery
      'jquery': 'jquery' 
    }
  },
  plugins: [
    // 3. 配置全局使用 jquery
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ],
    loaders: [
      { test: /jquery-mousewheel/, loader: "imports?define=>false&this=>window" },
      { test: /malihu-custom-scrollbar-plugin/, loader: "imports?define=>false&this=>window" }
    ]
  }
}
