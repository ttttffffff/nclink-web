const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index:{
        entry:'src/main.js'
    }
  },
  lintOnSave:false,

  devServer:{
    proxy:{
        // target:'http://localhost:1000',
        '/backend':{
            target:'http://localhost:1000',
            pathRewrite:{'^/backend':''},
            ws:true,
            secure: false, // false为http访问，true为https访问
            changeOrigin: true, // 跨域访问设置，true代表跨域

        }
    }
  }
})
