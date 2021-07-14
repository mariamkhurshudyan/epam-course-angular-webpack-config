const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        'main': './src/main.js',
        'hello': './src/hello.js'
      },
   output:{
       path: path.resolve(__dirname, 'dist'), 
       publicPath: '/',
       filename: '[name].[fullhash].js'
   },
   devServer: {
    historyApiFallback: true,
    port: 8082,
    open: true
  },
plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module:{
    rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        }
    ]}
}