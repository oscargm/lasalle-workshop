const merge = require('webpack-merge');
const base = require('./base');
const helpers = require('./helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: helpers.resolveFromRootPath('build-prod'),
    filename: './js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
