/**
 * @file server.js
 */

const path = require('path');

/**
 * 当前的环境
 * @type {string}
 */
const env = process.env.NODE_ENV;

// Statics
const webpackConfig = require('./webpack.config.dev.js');
const envConfig = require(`../env/config.${env}.js`);

// Vendors
// const os = require('os');
// const chokidar = require('chokidar');
const open = require('open');
const express = require('express');
const webpack = require('webpack');
const {createProxyMiddleware} = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');
// const cookieParser = require('cookie-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const logger = require('fancy-node-logger');
// const {getClientIp, ipParse, handleProxyRes} = require('../utils.js');

/**
 * 端口
 * @type {string}
 */
const port = process.env.PORT || envConfig.port;

/**
 * server url
 * @type {string}
 */
const url = 'http://localhost:' + port;

/**
 * proxy 配置
 */
const proxyTable = envConfig.proxyTable;

/**
 * express app
 * @type {*|Express}
 */
const app = express();

/**
 * webpack compiler
 */
const compiler = webpack(webpackConfig);

/**
 * 实例化 webpack dev 中间件
 */
const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
});

// /**
//  * 非 win 平台启动 chokidar 代理 fs，优化性能
//  */
// os.platform() !== 'win32' && chokidar.watch('.');

/**
 * dev Middleware 完成后输出控制台信息
 */
devMiddleware.waitUntilValid(() =>
    logger.done(`Listening At ${url} `)
);

/**
 * 使用代理，往 express 添加 proxy 中间件
 */
proxyTable && Object.entries(proxyTable).forEach(([context, target]) =>
    app.use(createProxyMiddleware(context, {

        target,
        changeOrigin: true,
        logLevel: 'error'

        // 代理 request 的回调
        // onProxyReq: (proxyReq, req) => {
        //
        //     // 往 header 中添加 ip 信息
        //     const ip = getClientIp(req);
        //     ip && proxyReq.setHeader('ip', ipParse(ip));
        //
        // },

        // 代理 response 的回调
        // onProxyRes: handleProxyRes

    }))
);

/**
 * 添加 history 中间件，实现 rewrite 到 "/" 的功能
 */
app.use(history());

/**
 * 添加 webpack dev 中间件
 */
app.use(devMiddleware);

// /**
//  * 添加 cookie 中间件
//  */
// app.use(cookieParser());

/**
 * 添加静态文件中间件，实现加载静态文件
 */
app.use(path.posix.join('/', 'static'), express.static('./static'));

/**
 * 使用 hot reload
 */
if (envConfig.isHotReload) {

    const hotMiddleware = webpackHotMiddleware(compiler, {
        log: false
    });

    compiler.hooks.compilation.tap('html-webpack-plugin-after-emit', () =>
        hotMiddleware.publish({
            action: 'reload'
        })
    );

    // 添加 hot reload 中间件
    app.use(hotMiddleware);

}

/**
 * 启动应用
 * @type {http.Server}
 */
module.exports = app.listen(port, err => {

    if (err) {
        return logger.error(err);
    }

    open(url);

});
