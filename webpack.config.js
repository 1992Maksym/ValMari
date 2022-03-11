const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: './js/main.js',
        // wow: './node_modules/wow.js/dist/wow.min.js',
        // swiper: './node_modules/swiper/swiper-bundle.min.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack landing page',
            template: "./index.html"
        })
    ]

}