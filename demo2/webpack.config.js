module.exports = {
    context:__dirname+'/src',
    entry:{
        //按顺序依次打包到   当前目录/dist/app.bundle.js
        app:['./aa.js','./bb.js']
    }
    ,
    output:{
        path:__dirname+'/dist',
        filename:'[name].bundle.js'
    }
}