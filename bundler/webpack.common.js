const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');


module.exports = {
    entry: {
        main: path.resolve(__dirname, '../src/main.ts'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/temple.html')
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, '../static') }
            ]
        })
    ],

    devServer: {
        static: './static'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [

            {
                test: /\.(html)$/,
                use: ['html-loader']
            },

            {
                test: /\.(vert|frag)$/,
                use: ['raw-loader']
            },

            {
                test: /\.(svg|png|jpg|gif)$/,
                type: 'asset/resource'
            },

            // {
            //     test: /\.ts$/,
            //     exclude: /node_modules/,
            //     use:
            //         [
            //             'ts-loader'
            //         ]
            // },
            {
                test: /\.ts?$/,
                exclude: [/node_modules/, /dist/],
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use:
                    [
                        'style-loader',
                        'css-loader'
                    ]
            },
        ]
    },
};