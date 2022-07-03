/**
 * @file config.js
 */

const path = require('path');

module.exports = {

    assetsPublicPath: '/',
    assetsSubDirectory: 'static',
    productionGzipExtensions: ['js', 'css'],

    rootDirectory: 'dist',
    assetsDirectory: 'dist/dist',
    assetsRoot: path.resolve(__dirname, '../dist/dist'),
    index: path.resolve(__dirname, '../dist/dist/index.html')

};
