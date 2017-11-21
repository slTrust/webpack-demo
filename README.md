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
