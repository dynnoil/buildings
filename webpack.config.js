const path = require('path');

module.exports = {
    entry: {
        buildings: path.resolve(__dirname, 'src', 'App.tsx')
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        index: 'index.html',
        publicPath: '/assets/',
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: 'ts-loader' },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', 'scss']
    }
}