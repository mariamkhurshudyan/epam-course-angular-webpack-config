const path = require('path');

module.exports = {
  mode: 'development',
  entry:{
     main: './src/main.js',
     hello: './src/hello.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};