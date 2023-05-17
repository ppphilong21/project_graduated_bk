const { defineConfig } = require('@vue/cli-service')
const port = process.env.VUE_APP_PORT || 3000

module.exports = defineConfig({
  publicPath: '/dashboard',
  css: {
      loaderOptions: {
          less: {
              lessOptions: {
                  javascriptEnabled: true,
              },
          },
          // sass: {
          //   prependData: `@import "@/styles/_index.scss";`
          // }
      },
  },
  transpileDependencies: true,
  devServer: {
      port: port,
  },
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = 'HUST COURSE'
              return args
          })
  },
})
