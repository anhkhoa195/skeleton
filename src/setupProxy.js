const proxy = require('http-proxy-middleware');
module.exports = (app) => {
    app.use(proxy('/api', {
        target: 'http://localhost:3333/api',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }));
    app.use(proxy('/s3/*', {
        target: 'https://s3.amazonaws.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/s3': ''
        }
    }));
};
