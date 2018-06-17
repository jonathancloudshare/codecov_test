var path = require("path");
var webpackConfig = require('./webpack.config');

webpackConfig.entry = {bundle: "./index.spec"};
webpackConfig.output.path = path.join(__dirname, "./distSpec");

module.exports = webpackConfig;