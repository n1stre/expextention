const path = require('path');

module.exports = {
  mode: 'production',
  // entry: './app/src',
  entry: {
    app: './app/src/index.js',
    background: './app/src/background.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './app/dist')
  },
  optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: "initial",
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        include: '/app/src/',
        loader: "babel-loader",
        query: {
          babelrc: false,
          presets: ['es2015', 'react', 'stage-2'],
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
};
