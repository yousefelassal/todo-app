const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    index: './src/index.js',
    app: './src/app.js',
    signupAuth: './src/scripts/signup-auth.js',
    loginAuth: './src/scripts/login-auth.js',
    router: './src/scripts/router.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 5 Boilerplate',
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'index.html',
      chunks: ['router'],
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack 5 Boilerplate',
      template: path.resolve(__dirname, 'src', 'app.html'),
      filename: 'app.html',
      chunks: ['app'],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'src/images'),
        type: 'asset/resource',
      }
    ],
  },
}