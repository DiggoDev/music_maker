const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/renderer/index.ts',
    target: 'electron-renderer',
    mode: process.env.NODE_ENV || 'development',
    output: {
        filename: 'renderer.js',
        path: path.resolve(__dirname, 'dist', 'renderer'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/renderer/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    devtool: 'source-map',
    optimization: {
        minimize: true,
    },
};
