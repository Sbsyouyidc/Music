module.exports = {
  //在生成环境中的代理
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: "0.0.0.0",
    port: 8066,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      // string | Object
      "/api": {
        /* 目标代理服务器地址 */
        target: "http://43.143.5.28:3000/",
        pathRewrite: { "^/api": "" },
        /* 允许跨域 */
        changeOrigin: true,
      },
    },
  },
};
