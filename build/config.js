const path = require('path');

module.exports = {

    assetsPublicPath: '/',
    assetsDirectory: 'docs',
    assetsSubDirectory: 'static',
    productionGzipExtensions: ['js', 'css'],

    dev: {
        port: 4000,
        srcRoot: path.resolve(__dirname, '../src'),
        index: path.resolve(__dirname, '../src/index.html'),
        assetsVirtualRoot: path.posix.join('/', 'static'),
        proxyTable: {},
        cssSourceMap: false
    },

    build: {
        index: path.resolve(__dirname, '../docs/index.html'),
        assetsRoot: path.resolve(__dirname, '../docs'),
        productionSourceMap: false
    },

    demo: {
        port: 4001
    }

};
