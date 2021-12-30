const webpack = require('webpack');

const config = {
	mode: 'development',
	entry: __dirname + '/src/index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	}
};

module.exports = config;

