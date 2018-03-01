### github里搜索  babel-loader

#### 看文档 注意看你当前webpack的版本 它会有对应的跳转链接

> webpack 3.x babel-loader 7.x | babel 6.x 我选择了这个  376 于是点击了  7.x branch

#### 继续看 7.x版本对应的安装依赖文档

> Install

> webpack 1.x | babel-loader <= 6.x

> webpack 2.x | babel-loader >= 7.x (recommended) (^6.2.10 will also work, but with deprecation warnings)

> webpack 3.x | babel-loader >= 7.1

```
yarn add babel-loader babel-core babel-preset-env webpack --dev
We recommend using yarn, but you can also still use npm:
# 我用的npm所以用这个
npm install --save-dev babel-loader babel-core babel-preset-env webpack
```

#### 你可能发现npm下载好慢 那是因为是从国外下载所以慢 

```
# 设置淘宝镜像 cnpm
 npm install -g cnpm --registry=https://registry.npm.taobao.org

以后你就可以用  cnpm i 包名
的方式下载国内的资源镜像
```

#### 根据babel-loader的文档提示 它说有个module参数  你可以试试

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
      }
    ]
  }
};
```