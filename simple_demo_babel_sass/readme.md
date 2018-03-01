### github里搜索  sass-loader

#### 看文档 安装依赖

```
npm install sass-loader node-sass webpack --save-dev
```

#### 添加模块  rules是个数组  脑补添加该对象

```
// webpack.config.js
module.exports = {
	...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};
```

```
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      }
    ]
  }
};
```

### 然后写对应的scss文件  

```
# 在index.js里引入
import '../css/main.scss'

... 命令行输入 webpack
报错  说没有style-loader


```

#### 诀窍 只要报错一般提示少什么东西  然后   你就 cnpm install 提示的文件名

```
cnpm i style-loader  --save-dev
cnpm i css-loader --save-dev
```

#### 突然性的报错  有可能是依赖包下载有问题

```
最佳实践就是  rm -rf node_modules
然后 cnpm i 重新安装依赖
```