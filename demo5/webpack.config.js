const webpack = require('webpack');
module.exports = {
		context: __dirname + '/src',
		entry: {
			app: './app.js'
		},
		output: {
			path: __dirname + '/dist/assets/',
			filename: '[name].bundle.js',
			publicPath: '/assets'
		},
		devServer: {
			contentBase: __dirname + '/src',
			hot: true,
			inline: true,
			open: true
		},
		plugins: [
			//实现热更新   要全局安装webpack-dev-server  运行 cnpm install webpack-dev-server -g
			new webpack.HotModuleReplacementPlugin()
		]
	}
	//index.html 里面 script的src为: /assets/app.bundle.js
	//index.html需要放到 src目录下
	//script 标签中的 /assets 对应的是 output.publicPath 的值
	//需要在本地安装 webpack webpack-dev-server