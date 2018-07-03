const path = require('path')

module.exports = {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../app/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [
            [
              'es2015', { 'modules': false }
            ],
            'react',
            'stage-2'
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: [
          'file-loader'
        ]
      },
      {
        test: /\.(txt|template.js)$/,
        loader: [
          'raw-loader'
        ]
      }
    ]
  }
}
