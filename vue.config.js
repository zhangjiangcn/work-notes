const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/work-notes/' : '/',
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = "我的笔记"
          return args
        })
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 14,
            propList: ['*']
          })
        ]
      }
    }
  }
};
