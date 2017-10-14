var webpack = require('webpack');

var config = {
	entry: __dirname + '/src/index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	}
};

module.exports = config;
