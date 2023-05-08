const path = require("path");
module.exports = {
  //基本路径
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 输出文件目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  /**
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   **/
  chainWebpack: (config) => {},
  configureWebpack: (config) => {
    // config.resolve = { //配置解析别名
    //     extensions: ['.js','.json','.vue'],
    //     alias: {
    //         '@': path.resolve(__dirname, './src'),
    //         'public': path.resolve(__dirname, './public'),
    //         'components': path.resolve(__dirname, './src/components'),
    //         'common': path.resolve(__dirname, './src/common'),
    //         'api': path.resolve(__dirname, './src/api'),
    //         'views': path.resolve(__dirname, './src/views'),
    //         'data': path.resolve(__dirname, './src/data'),
    //     }
    // }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`,
      },
    },
    // 启用CSS modules for all css / pre-processor files.
    requireModuleExtension: false,
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  /** */
};
