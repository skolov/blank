const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
		clean: true,
	},
	mode: 'development',
	watch: true,
	devServer: {
		static: './',
		hot: true,
		port: 3000
	},
	target: 'web',
	"plugins": [
		new HtmlWebpackPlugin({
			title: 'Тест',
			template: path.resolve(__dirname, './src/index.html'),
			filename: 'index.html',
		})
	],
}