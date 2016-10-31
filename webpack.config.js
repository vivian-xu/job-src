var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var autoprefixer = require('autoprefixer');

var path = require('path');

const PORT = 7070;
const API_TARGET = "http://wuguishifu.com";

module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
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
    // publicPath: '/static/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass')
      }, {
        test: /\.css$/,
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
    new ExtractTextPlugin('./css/style.[hash:8].css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      // favicon: './src/imgs/favicon.ico', //favicon路径
      filename: './index.html', //生成的html存放路径，相对于 path
      template: './src/index.html', //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值
      // minify: { //压缩HTML文件
      //   removeComments: true, //移除HTML中的注释
      //   collapseWhitespace: true //删除空白符与换行符
      // }
    })
  ]
};
