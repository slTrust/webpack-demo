### google 搜索  webpack

> 进入官网 点击github

> 提示你安装

```
# 建议安装 webpack@3.10.0 因为我用的是这个
  npm i --save-dev webpack 
```

继续往下看，发现毫无线索，.... 发现get started 点击

### 

#### step1 新建目录  

```
mkdir webpack_simple
cd webpack_simple
# 你想使用webpack安装进入你的依赖一定要先保证你有package.json文件

npm init 
...  一路回车 你有了自己的package.json

# 安装webpack依赖   --save-dev是添加到package.json里 这样别人拿到你的这个文件直接  npm i就可以直接安装依赖了
npm i webpack@3.10.0 --save-dev

```

#### step2 我们的目录结构如下

```
 webpack_simple
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

#### step3 webpack的命令需要一个配置文件 改变目录如下

```
  webpack-demo
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- index.js
```

#### step4 webpack.config.js的编写

```
const path = require('path');

module.exports = {
  entry: './src/index.js',   //入口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')  //打包后的目录
  }
};
```

#### step5 好了  在确保你有node的情况下

```
# 注意是 webpack_simple目录下运行如下命令
webpack
```

#### step6 大功告成 你发现 多了一个dist目录 



#### 小小细节 提交的时候千万不要提交如下目录的东西


```
node_modules/
/dist/
```

> 你需要新建.gitignore文件 内容如上

> 现在你已经成功的实现打包js