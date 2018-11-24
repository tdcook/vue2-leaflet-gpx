module.exports = {
  chainWebpack: config =>{
    config.module
      .rule('gpx')
      .test(/\.gpx$/)
      .use('raw-loader')
        .loader('raw-loader')
        .end();
  }
};
