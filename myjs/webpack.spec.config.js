var path = require("path");
var webpackConfig = require('./webpack.config');

webpackConfig.entry = {bundle: "./index.spec"};
webpackConfig.output.path = path.join(__dirname, "./distSpec");
webpackConfig.module.rules.push({
    test: /\.jsx?$/,
    use: {
        loader: 'istanbul-instrumenter-loader',
        options: { 
            esModules: true 
        }
    },
    enforce: 'post',
    exclude: /node_modules|\.spec\.js$/,
});
module.exports = webpackConfig;