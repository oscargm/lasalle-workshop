const merge = require('webpack-merge');
const base = require('./base');
const helpers = require('./helpers');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: helpers.resolveFromRootPath('build-dev'),
    filename: '[name].js',
  },
  devServer: {
    inline: true,
    host: 'localhost',
    port: 5070,
    stats: 'minimal',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
