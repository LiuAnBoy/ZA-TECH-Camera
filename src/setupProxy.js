const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://devision-test.xmine.com.tw',
      changeOrigin: true,
    })
  );
};
