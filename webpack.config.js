const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Copyplugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ProgressPlugin = require('progress-webpack-plugin');

const javasScriptRules = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
}

const styleRules = {
    test: /\.css|.styl$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
}

const imgRules = {
    test: /\.png|.svg$/i,
    type: 'asset/resource',

}

const fontsRules = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
        filename: "fonts/[hash][ext]",
    },


}

const rules = [javasScriptRules, styleRules, imgRules, fontsRules]



module.exports = (env, argv) => {
    const { mode } = argv
    const isproduction = mode === 'production'


    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: isproduction ? "[name].[contenthash].js" : 'main.js',
            assetModuleFilename: 'images/[hash][ext][query]',
            clean: isproduction ? true : false,
        },
        resolve: {
            extensions: [".js"],
            alias: {
                '@images': path.resolve(__dirname, './assets/images/'),
                '@utils': path.resolve(__dirname, './src/utils/'),
                'style': path.resolve(__dirname, './src/css')
            }
        },
        module: { rules },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                template: "./public/index.html",
                filename: "./index.html"
            }),
            new MiniCssExtractPlugin({
                filename: isproduction ? '[name].[contenthash].css' : 'main.css'
            }),
            new Copyplugin({

                patterns: [{
                    from: path.resolve(__dirname, "assets"),
                    to: "assets",
                }]

            }),
            new Dotenv(),
            new ProgressPlugin(isproduction ? true : false),
        ],
        optimization: {
            minimize: isproduction ? true : false,
            minimizer: isproduction ? [
                new CssMinimizerPlugin(),
                new TerserPlugin()
            ] : []
        }

    }
}