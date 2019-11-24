const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },	
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html'
        })
    ]
}
