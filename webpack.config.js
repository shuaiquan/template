const path = require('path');
const webpack = require('webpack');

const config = {
    // none, production(default), deveploment
    mode: "development",
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        port: 9000,
        clientLogLevel: 'warning',
        hot: true,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
};

module.exports = config;