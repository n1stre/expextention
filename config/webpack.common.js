const path = require('path')
const srcPath = '../app/src'
const distPath = '../app/dist'
const componentsPath = `${srcPath}/components`
const resolveFromHere = destination => path.resolve(__dirname, destination)

module.exports = {
  output: {
    filename: '[name].bundle.js',
    path: resolveFromHere(distPath)
  },
  resolve: {
    alias: {
      '@containers': resolveFromHere(`${componentsPath}/containers`),
      '@presentational': resolveFromHere(`${componentsPath}/presentational`),
      '@hocs': resolveFromHere(`${componentsPath}/hocs`),
      '@screens': resolveFromHere(`${componentsPath}/screens`),
      '@helpers': resolveFromHere(`${srcPath}/helpers`),
      '@utils': resolveFromHere(`${srcPath}/utils`),
      '@contexts': resolveFromHere(`${srcPath}/contexts`)
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
