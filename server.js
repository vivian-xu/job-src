var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');


var compiler = webpack(config);
const API_TARGET = "http://wuguishifu.com";

var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
   // Can also be an array, or: contentBase: "http://localhost/",
  contentBase: './dist',
  inline: true,
  noInfo: false,
  stats: { colors: true },
  historyApiFallback: true,
  proxy: {
    '/api/*': {
      target: API_TARGET,
      secure: false,
    },
    '/media/*': {
      target: API_TARGET,
      secure: false,
    },
  }
});

server.listen(7070, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:7070/');
});

module.exports = server;
