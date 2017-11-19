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