module.exports = {
    context:__dirname+'/src',
    entry:{
        //多个输出   
        app:'./aa.js',
        aa:'./bb.js'
    }
    ,
    output:{
        path:__dirname+'/dist',
        filename:'[name].bundle.js'
    }
}