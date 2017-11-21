# webpack-demo
[webpack-API](https://webpack.js.org/concepts/)
## Concepts 概念
> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into one or more bundles.

> 在其核心，webpack是现代JavaScript应用程序的静态模块bundler。当webpack处理您的应用程序时，它会递归地构建一个依赖图，其中包括应用程序所需的每个模块，然后将所有这些模块打包成一个或多个包。

### Core Concepts

- entry
- output
- Loaders
- Plugins

----------------------------------

## demo1 webpack初识

### context  
> 上下文环境   比如你在上课、你当前所在的教室就是上下文环境
### entry  入口
> 定义入口的js文件目录
### output 输出

```
module.exports ={
    //上下文环境
    context:__dirname+'/src',
    //入口   当前目录/src/app.js
    entry:{
        app:'./app.js'
    },
    // 输出位置   当前目录/dist/app.bundle.js
    output:{
        path:__dirname+'/dist',
        filename:'[name].bundle.js'
    }
}
```

## demo2 多个js引入

```
module.exports = {
    context:__dirname+'/src',
    entry:{
        //按顺序依次打包到当前目录/dist/app.bundle.js
        app:['./aa.js','./bb.js']
    }
    ,
    output:{
        path:__dirname+'/dist',
        filename:'[name].bundle.js'
    }
}
```

## demo3 多个输出
module.exports = {
    context:__dirname+'/src',
    entry:{
        //多个输出  生成
        // 当前目录/dist/app.bundle.js
        // 当前目录/dist/bb.bundle.js
        app:'./aa.js',
        aa:'./bb.js'
    }
    ,
    output:{
        path:__dirname+'/dist',
        filename:'[name].bundle.js'
    }
}

## demo4提取公共js

```
const webpack = require('webpack');
module.exports = {
	context: __dirname + '/src',
	entry: {
		app: './app.js',
		a: './a.js',
		b: './b.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},
	//提取公共部分   这里要安装插件才可以
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: "commons.js",
			minChunks: 2, 
            //有任意模块加载了两次或更多
            //这里minChunks:2就是设置超过2次以上使用
		}),
	],
}
```

## demo5 热更新
```
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
			//实现热更新   要全局安装//webpack-dev-server  运行 cnpm install //webpack-dev-server -g
			new webpack.HotModuleReplacementPlugin()
		]
	}
	//index.html 里面 script的src为: /assets/app.bundle.js
	//index.html需要放到 src目录下
	//script 标签中的 /assets 对应的是 output.publicPath 的值
	//需要在本地安装 webpack webpack-dev-server
```

## demo6 es6转换 和加载css样式
> 先运行这个安装必要的几个模块
```
cnpm i babel-loader babel-core babel-preset-es2015 style-loader@0.16.1 css-loader@0.28.0 --save-dev
```
### 注意千万别按默认下载 css-loader style-loader版本太高可能不生效
> 建议安装我这里的版本,还有顺序问题一定是style-loader 然后再css-loader
,还要额外注意  webpack2不支持简写['style','css']的形式
### 还有会如果把babel写在这里的配置方法会提示一个警告信息提示
> DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic, see https://github.com/webpack/loader-utils/issues/56 parseQuery() will be replaced with getOptions() in the next major version of loader-utils.
> 解决方案是当前目录新建一个 .babelrc文件  内容如下
```
{
    "presets": ["es2015"]
}
```
----------------------------------------------
```
rules: [{
			test: /\.js$/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}]
		}]
```

```
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
```