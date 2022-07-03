/**
 * @file webpack.config.base.js
 */

const os = require('os');

// Statics
const config = require('./config.js');

// Vendors
const HappyPack = require('happypack');
const {resolveRootPath} = require('./utils.js');

const cssLoaderConfig = ['style-loader', {
    loader: 'css-loader',
    options: {
        importLoaders: 1
    }
}, {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: [
                'postcss-preset-env'
            ]
        }
    }
}];

module.exports = {

    entry: {
        app: './src/index.js'
    },

    output: {
        path: config.assetsRoot,
        filename: '[name].js',
        publicPath: config.assetsPublicPath
    },

    resolve: {
        extensions: ['.js', '.scss'],
        fallback: {
            'crypto': false
        },
        alias: {

            // src
            'src': resolveRootPath('src'),

            // assets
            'assets': resolveRootPath('src/assets'),
            'icons': resolveRootPath('src/assets/icons'),
            'illustrations': resolveRootPath('src/assets/illustrations'),
            'images': resolveRootPath('src/assets/images'),
            'scss': resolveRootPath('src/assets/scss'),

            'components': resolveRootPath('src/components'),
            'customized': resolveRootPath('src/customized'),

            'modules': resolveRootPath('src/modules'),
            'middlewares': resolveRootPath('src/middlewares'),
            'models': resolveRootPath('src/models'),

            'apis': resolveRootPath('src/apis'),
            'reduxes': resolveRootPath('src/reduxes'),
            'statics': resolveRootPath('src/statics'),
            'vendors': resolveRootPath('src/vendors'),

            'test': resolveRootPath('test')

        }
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: 'happypack/loader?id=js',
            include: resolveRootPath('src')
        }, {
            test: /\.(png|jpe?g|gif|svg|cur|ico)(\?.*)?$/,
            type: 'asset/resource',
            generator: {
                filename: 'img/[name]-[contenthash:8][ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            type: 'asset/resource',
            generator: {
                filename: 'font/[name]-[contenthash:8][ext]'
            }
        }, {
            test: /\.scss$/,
            use: [...cssLoaderConfig, {
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        includePaths: [resolveRootPath('src/assets')]
                    }
                }
            }]
        }, {
            test: /\.css$/,
            use: cssLoaderConfig
        }]
    },

    plugins: [
        new HappyPack({
            id: 'js',
            threadPool: HappyPack.ThreadPool({size: os.cpus().length}),
            loaders: ['babel-loader?cacheDirectory=true'],
            verbose: false
        })
    ]

};
