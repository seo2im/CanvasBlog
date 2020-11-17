const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : './srcs/index.js',
	output : {
		filename : 'bundle.js',
		path : path.resolve(__dirname, 'dist')
	},

	module : {
		rules : [
			{
				test : /\.js/,
				exclude : /node_modules/,
				use : 'babel-loader'
			}
		]
	},

	devServer : {
		contentBase : path.join(__dirname, 'dist'),
		compress : true,
		port : 9000
	},

	plugins : [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template : './srcs/index.html'
		})
	]
}