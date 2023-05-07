const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    entry: {
        main: './electron/main.ts',
        preload: './electron/preload.ts',
        renderer: './electron/renderer.ts',
    },
    mode: process.env.NODE_ENV || 'development',
    target: 'electron-main',
    module: {
    rules: [
        {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'ts-loader',
        },
        },
    ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'electron-build'),
    },
    plugins: [
        new CleanWebpackPlugin(), 
        new NodePolyfillPlugin(),
    ],
    devtool: 'source-map',
    optimization: {
        minimize: true,
    },
    node: {
        __dirname: false,
        __filename: false,
    },
};
