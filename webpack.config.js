/*
 * @Date: 2021-12-02 17:25:47
 * @LastEditors: bhy
 * @LastEditTime: 2021-12-03 10:52:44
 * @FilePath: \webpack\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: `[name].bundle.js`,
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};