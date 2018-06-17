const path = require("path");
const webpack = require('webpack');

let webpackConfig = {
    entry: "./index",
    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/"
    },
    resolve: {
        extensions: [".ts", ".js", ".jsx", ".json"],
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            "filename": "[file].map[query]",
            "moduleFilenameTemplate": "[resource-path]",
            "fallbackModuleFilenameTemplate": "[resource-path]?[hash]",
            "sourceRoot": "webpack:///"
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            }, 
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: { 
                    emitErrors: true,
                    failOnHint: true,
                 }
            },
            {
                test: /\.html$/,
                include: [
                    /src[\/\\]app[\/\\]/
                ],
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                            caseSensitive: true,
                        }
                    },
                ]
            },
            {
                test: /\.html$/,
                exclude: [
                    /sparkClient\.iframe\.html/,
                    /customizeViewer\.defaultOverviewMarkup\.html/,
                    /src[\/\\]app[\/\\]/
                ],
                use: [
                    {loader: "raw-loader"},
                    {loader: "html-minify-loader"}
                ]
            },
            
            {
                test: /\.css$/,
                include: [
                    /src[\/\\]app[\/\\]/
                ],
                use: [
                    {loader: "to-string-loader"},
                    {loader: "css-loader"},
                ]
            },
            {
                test: /\.less$/,
                include: [
                    /src[\/\\]app[\/\\]/
                ],
                use: [
                    {loader: "to-string-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            },
            {
                test: /\.css$/,
                exclude: [
                    /SparkModule/,
                    /src[\/\\]app[\/\\]/
                ],
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.less$/,
                exclude: [
                    /src[\/\\]app[\/\\]/
                ],
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            },
            {
                test: /(\.woff)|(\.eot)|(\.ttf)|(\.svg)/,
                loader: "file-loader"
            },
            
            {
                test: /\.jsx?$/,
                exclude: [
                    /node_modules/,
                    /asperaweb-.*\.js/,
                    /guacamole-common-js-.*\.js/,
                    /SparkModule/,
                    /boomerang-\d\.\d/
                ],
                loader: "babel-loader",
                
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /guacamole-common-js-.*\.js/,
                    /SparkModule/,
                    /externals/,
                    /\.spec\.js$/,
                ],
                loader: "eslint-loader",
                options: {
                    baseConfig: false,
                    failOnError: true,
                    useEslintrc: true
                }
            },
        ]
    },
    devServer: {
        publicPath: "/dist/",
        contentBase: __dirname,
    }
};

module.exports = webpackConfig;