//const url = "https://v1.itooi.cn/netease/artist/top?page=0&pageSize=60"

//const url = "https://v1.itooi.cn/netease/song/artist?id=9808"
//const url = "https://v1.itooi.cn/netease/songList/hot?cat=%E5%85%A8%E9%83%A8&pageSize=6&page=0"
//const url = "https://v1.itooi.cn/netease/songList?id=141998290&pageSize=20"
//最新音乐
//const url = "https://v1.itooi.cn/netease/song/newest"
//const url = "https://v1.itooi.cn/netease/banner"
module.exports = {
  configureWebpack: {
  	devServer: {
  		proxy: {
       "/api": {
           target: "https://v1.itooi.cn",
           pathRewrite: {"^/api" : ""},
           changeOrigin:true
          }
       }
  	}
    
  }
}

//rem
//const px2rem = require('postcss-px2rem')
//
//const postcss = px2rem({
//remUnit: 32   //基准大小 baseSize，需要和rem.js中相同
//})
//
//module.exports = {
//css: {
//  loaderOptions: {
//    postcss: {
//      plugins: [
//        postcss
//      ]
//    }
//  }
//}
//}
