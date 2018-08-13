const webpack = require('webpack');
const path = require('path');
const config = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    devtool: 'inline-source-map',

    devServer: {
        // web で公開するファイルのあるディレクトリ
        contentBase: './dist',
        port: 8080,
        inline: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loaders: ["style-loader", "css-loader"]
            }
        ]
    },

    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin(),
    // ]
};

module.exports = config;
