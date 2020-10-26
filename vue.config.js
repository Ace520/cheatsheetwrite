module.exports = {
  devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      proxy: {
          '/api': {
              target: 'http://localhost:8000/',
              ws: true,
              changOrigin: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
          
      }
  }
}
