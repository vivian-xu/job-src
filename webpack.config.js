var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


var autoprefixer = require('autoprefixer');

var path = require('path');
console.log(__dirname);
var sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?outputStyle=expanded'
];
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
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
          loader: 'style!css!postcss!sass'
        },
        {
            test: /\.css$/,
            loader: "style!css"
        },
        {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?name=./fonts/[name].[ext]'
        },
        {
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
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        host: '0.0.0.0'
    },
    plugins: [
        new ExtractTextPlugin('./css/styles.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
              $: "jquery",
              jQuery: "jquery",
              "window.jQuery": "jquery"
          })
    ]
};
