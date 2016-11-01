var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const src = path.resolve(ROOT_PATH, 'src');
const dist = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  devtool: false,

  entry: {
    //配置入口文件，有几个写几个。我这里有两个文件。一个是所有我需要引入的文件，一个是我的入口文件，index.js
    //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出,比如下面数组里面的js,全部压缩在了vendor这个文件这里
    vendors: ['jquery'],
    app: './src/index.js',
  },

  output: config.output,

  module: config.module,

  resolve: config.resolve,

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin('./css/style.[hash:8].css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "React": "react"
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      title: 'Job',
      inject: true,
      hash: true,
      // chunks: ['vendor', 'app'], //需要引入的chunk，不配置就会引入所有页面的资源.名字来源于你的入口文件.
      minify: {
        removeComments: true,  // 移除HTML中的注释
        collapseWhitespace: true  // 删除空白符与换行符
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    //将引入的第三方库打包.这个要放到最后
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ]
};



