const path = require('path')
const componentsPath = '../app/src/components'
const resolveFromHere = destination => path.resolve(__dirname, destination)

module.exports = {
  output: {
    filename: '[name].bundle.js',
    path: resolveFromHere('../app/dist')
  },
  resolve: {
    alias: {
      '@containers': resolveFromHere(`${componentsPath}/containers`),
      '@presentational': resolveFromHere(`${componentsPath}/presentational`),
      '@hocs': resolveFromHere(`${componentsPath}/hocs`),
      '@screens': resolveFromHere(`${componentsPath}/screens`),
      '@helpers': resolveFromHere('../app/src/helpers'),
      '@utils': resolveFromHere('../app/src/utils')
    }
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
