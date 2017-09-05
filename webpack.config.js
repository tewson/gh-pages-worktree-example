const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.[hash:6].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false }),
    new HtmlWebpackPlugin({
      title: 'GitHub Pages example',
    }),
  ],
};
