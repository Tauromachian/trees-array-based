const path = require("path");

var commonJsConfig = {
  target: 'node',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'trees-array-based.node.js',
    libraryTarget: 'commonjs'
  }
};

var browserConfig = {
  target: 'web',
  mode: 'production',
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'trees-array-based.min.js'
  }
};

module.exports = [commonJsConfig, browserConfig];