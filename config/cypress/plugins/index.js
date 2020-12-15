const webpack = require('@cypress/webpack-preprocessor')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require('../../webpack/dev'),
    watchOptions: {}
  }

  on('file:preprocessor', webpack(options))
  allureWriter(on, config);
  return config;
}
