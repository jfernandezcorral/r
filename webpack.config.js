const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('style.css');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    host: "0.0.0.0"
  },
  resolve: {
    modules: [
      path.resolve('./client'),
      path.resolve('./node_modules')
    ]
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, 
        use: extractCSS.extract({
          fallback: "style-loader",
          use: [
            {loader: 'css-loader', options: {modules: true, localIdentName: '[name]__[local]___[hash:base64:5]', sourceMap: true}},
            {loader: 'sass-loader', options: {/*sourceMap: true*/}}
          ]
        }) 
      },
      { test: /\.css$/, 
        use: extractCSS.extract({
          fallback: "style-loader",
          use: [
            {loader: 'css-loader', options: {modules: true, localIdentName: '[name]__[local]___[hash:base64:5]', sourceMap: true}}
          ]
        }) 
      }//,
      //{ test: /\.css$/, use: ['style-loader',
      //  {loader: 'css-loader', options: {modules: true, localIdentName: '[name]__[local]___[hash:base64:5]'/*, sourceMap: true*/}}
      //]}
    ]
  },
  plugins: [HtmlWebpackPluginConfig,
            extractCSS
  ]
}