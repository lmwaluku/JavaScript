import path from 'path';
var webpack = require('webpack');

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: 'babel-loader'},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
