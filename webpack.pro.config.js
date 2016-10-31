var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

var path = require('path');

const PORT = 7070;

module.exports = {
  //将引入的第三方库打包
  entry: [
    app: './src/index.js',
    vendors: ['jquery']
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: '/',
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss!sass?sourceMap')
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css'),
      }, {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=8192&name=./fonts/[name].[ext]'
      }, {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8192&name=./imgs/[name].[ext]'
          // 'url?limit=10000&name=img/[hash:8].[name].[ext]', // 图片小于8k就转化为 base64, 或者单独作为文件
          // 'image-webpack' // 图片压缩
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', 'jsx']
  },

  plugins: [
    new ExtractTextPlugin('./css/style.[hash:8].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
/*    new CommonsChunkPlugin({
        name:"chunk",
       // filename:"chunk.js"//忽略则以name为输出文件的名字，否则以此为输出文件名字
       minChunks:2
    }),*/
    new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
      // favicon: './src/imgs/favicon.ico', //favicon路径
      filename: './index.html', //生成的html存放路径，相对于 path
      template: './src/index.html', //html模板路径
      title: 'Job',
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: true, //为静态资源生成hash值,将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和 CSS 文件.
      // minify: {} | false , 传递 html-minifier 选项给 minify 输出
      minify: {
        removeComments: true,  //移除HTML中的注释
        collapseWhitespace: true //删除空白符与换行符
      },
    }),
    // 压缩 js
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    //将引入的第三方库打包.这个要放到最后
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ]
};
