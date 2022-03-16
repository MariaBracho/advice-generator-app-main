const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Copyplugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: 'assets/images[hash][ext][query]',

    },
    mode: 'development',
    watch: true,

    resolve: {
        extensions: [".js"],
        alias: {
            '@images': path.resolve(__dirname, './assets/images/'),
            '@utils': path.resolve(__dirname, './src/utils/'),
            'style': path.resolve(__dirname, './src/css')
        }
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css|.styl$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: '[hash:8].[name].[ext]',
                        outputPath: "./assets/images/",
                        publicPath: "./assets/images/",
                        esModule: false,

                    }
                }]

            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[hash][ext]",
                },

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].[contenthash].css'
        }),
        new Copyplugin({

            patterns: [{
                from: path.resolve(__dirname, "assets"),
                to: "assets/images",
            }]

        }),
        new Dotenv(),
    ],


}