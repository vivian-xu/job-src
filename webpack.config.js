var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname);
const src = path.resolve(ROOT_PATH, 'src');
const dist = path.resolve(ROOT_PATH, 'dist');
const PORT = 7070;

module.exports = {
/*
  现在的代码是合并以后的代码,这样出错以后就会采用source-map的形式直接显示你出错代码的位置。
*/
  devtool: 'eval-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: '/',
    publicPath: '/static/', //模板、样式、脚本、图片等资源对应的server上的路径
    filename: 'bundle.js'
    // chunkFilename: 'js/[id].bundle.js'   //dundle生成的配置
  },

  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        include: [src, './mock'],
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss!sass?sourceMap')
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css'),
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)\??.*$/,
        loader: 'url-loader?limit=8192&name=./fonts/[name].[ext]'
      }, {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8192&name=./imgs/[name].[ext]'
      }
    ]
  },
  // postcss: function () {
  //   return [require('autoprefixer')];
  // },
  postcss: [ autoprefixer({
    browsers: [
      'last 2 versions',
      'ie >= 8'
    ]
  }) ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
  // production 环境下加  hash
    new ExtractTextPlugin('./css/style.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      // $: "jquery",
      // jQuery: "jquery",
      // "window.jQuery": "jquery",
      "React": "react"
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      title: 'Job',
      inject: true,
      // hash: true,
    }),
  ]
};
