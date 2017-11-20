module.exports = {
	context: __dirname + '/src',
	entry: {
		app: './app.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader'
				}]
			}
			,
			{
				test: /\.css$/,
				//注意默认下载的style-loader css-loader不要太高
				// "css-loader": "^0.28.0",   0.28.7
				// "style-loader": "^0.16.1"  0.19.0版本太高可能会不加载css
				use: [
					{
					loader: 'style-loader'
					},
					{
					loader: 'css-loader'
					}
				]
			}
		 ]
	}
};
//yarn add babel-loader babel-core babel-preset-es2015