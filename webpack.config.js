var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


var autoprefixer = require('autoprefixer');

var path = require('path');

const PORT = 7070;
const API_TARGET = "http://wuguishifu.com";

console.log(__dirname);
var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?outputStyle=expanded'
];
module.exports = {

  devServer: {
    contentBase: './dist',
    hot: true,
    host: '0.0.0.0',
    port: PORT,
    proxy: {
      '/api/*': {
        target: API_TARGET,
        secure: false,
      },
      '/media/*': {
        target: API_TARGET,
        secure: false,
      },
    },
  },

  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:' + PORT,
    // 'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      /*
            {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract("style", sassLoaders.join('!'))
              // loader: 'style!css!sass'
            },
            */

      {
        test: /\.scss$/,
        // loader: 'style!css!postcss!sass'
        loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass')

      }, {
        test: /\.css$/,
        // loader: "style!css"
        loader: ExtractTextPlugin.extract('style-loader', 'css'),
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?name=./fonts/[name].[ext]'
      }, {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8192&name=./imgs/[name].[ext]'
          // 'url?limit=10000&name=img/[hash:8].[name].[ext]', // 图片小于8k就转化为 base64, 或者单独作为文件
          // 'image-webpack' // 图片压缩
      }

    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new ExtractTextPlugin('./css/style.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
};
