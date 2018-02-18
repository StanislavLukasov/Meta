"use strict";
let webpack = require('webpack');
let Dotenv = require('dotenv-webpack');

let options = {
    entry: {
        bundle: ['babel-polyfill', './src/entry']
    },
    devServer: {
        inline: true,
        port: 3333,
        contentBase: "./public/"
    },
    output: {
        path: __dirname + '/public/js',
        publicPath: "/public/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new Dotenv()
    ]
};

module.exports = options;
