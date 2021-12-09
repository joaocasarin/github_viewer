const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // the output bundle won't be optimized for production but suitable for development
    mode: 'development',
    // the app entry point is /src/index.js
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        // the output of the webpack build will be in /build directory
        path: path.resolve(__dirname, 'build'),
        // the filename of the JS bundle will be bundle.js
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                // for any file with a suffix of js,ts,jsx,tsx
                test: /\.[jt]sx?$/,
                // ignore transpiling JavaScript from node_modules as it should be that state
                exclude: /node_modules/,
                // use the babel-loader for transpiling JavaScript to a suitable format
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(?:ico|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(?:woff(2)?|eot|woff2|svg|ttf|otf)$/,
                type: 'asset/inline'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    // add a custom index.html as the template
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        static: path.join(__dirname, './src'),
        port: 3000,
        hot: 'only',
        compress: true,
        open: true
    }
};
