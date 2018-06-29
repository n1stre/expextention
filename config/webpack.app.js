const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    app: path.resolve(__dirname, '../app/src/index.js')
  }
})