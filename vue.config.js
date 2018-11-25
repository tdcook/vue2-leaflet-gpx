const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        externals: [
          {
            leaflet: {
              root: "L",
              commonjs2: "leaflet",
              commonjs: "leaflet"
            }
          },
          { 'vue2-leaflet': 'vue2-leaflet' },
          { 'vue': 'vue' }
        ]
      };
    }
  },
  chainWebpack: config =>{
    config.module
      .rule('gpx')
      .test(/\.gpx$/)
      .use('raw-loader')
        .loader('raw-loader')
        .end();
  }
};
