const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        buildings: path.resolve(__dirname, 'src', 'App.tsx')
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        index: 'index.html',
        publicPath: '/',
        historyApiFallback: true,
        // contentBase: path.resolve(__dirname, 'public'),
        proxy: [{
            context: ['/api'],
            target: 'http://localhost:3000'
        }]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', 'scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'index.html',
            template: 'public/index.html',
            templateParameters: {
                'MAPS_API_KEY': process.env.MAPS_API_KEY
            }
        })
    ]
}