const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main/index.ts',
        preload: './src/main/preload.ts',
    },
    target: 'electron-main',
    mode: process.env.NODE_ENV || 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist', 'main'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                },
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(), new NodePolyfillPlugin()],
    devtool: 'source-map',
    optimization: {
        minimize: true,
    },
};
