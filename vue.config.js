module.exports = {
  baseUrl: '/',
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://0.0.0.0:4000',
        changeOrigin: true
      }
    }
  }
}