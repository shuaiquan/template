const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const webpackConfig = {
    mode: isProd ? 'production' : 'development',

    entry: path.resolve(__dirname, './src/index.ts'),

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 9000,
        hot: true,
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html')
        }),
        // for HMR
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }
}

module.exports = webpackConfig;
