const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  target: 'node',
  mode: 'production',
  uglify: false,
  minimize: true
};