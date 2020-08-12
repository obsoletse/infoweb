const path = require('path');
//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  /*更新favicon图标*/
  pwa: {
    iconPaths: {
      favicon32: 'public/favicon.ico',
      favicon16: 'public/favicon.ico',
      appleTouchIcon: 'public/favicon.ico',
      maskIcon: 'public/favicon.ico',
      msTileImage: 'public/favicon.ico'
    }
  },

  devServer:{
    port:9999,
    open:true,
    proxy: {
      "/info": {
        target: "http://127.0.0.1:8080/info", // 域名
        ws: true, // 是否启用webSockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //只要接口用代理，静态文件用本地。'/staff': {}, 就是告诉node，我接口只要是'/staff'开头的才用代理
        pathRewrite: {
          "^/info": '' //写url的时候，写staff/1 等价于 http://127.0.0.1:8081/staff/1
        }
      }
    }
  },


  /*设置别名*/
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@views', resolve('src/views'))
      .set('@utils', resolve('src/utils'))
      .set('@api', resolve('src/api'))
  },

  configureWebpack: (config) => {
    config.module.rules.push(
      {//视频的loader
        test: /\.(mp4|rmvb)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'video/[name].[ext]' //加[]是变量名---给视频命名
            },
          }]
      },
    )
  },

}
