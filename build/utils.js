/**
 * @file utils.js
 */

const fs = require('fs');
const path = require('path');
const ChildProcess = require('child_process');

// Statics
const config = require('./config.js');

// Vendors
const crypto = require('crypto');
const getBody = require('http-proxy-middleware-body');

/**
 * 处理配置中的相对路径
 * @param p
 * @returns {string}
 */
function resolveRootPath(p) {
    return path.join(__dirname, '..', p);
}

/**
 * 处理 assets ( 默认 "dist" 目录 ) 下的路径
 * @param p
 * @param env
 * @returns {string}
 */
function getAssetsPath(p, env = 'production') {
    return path.posix.join(config.assetsDirectory, p);
}

/**
 * 处理 sub assets ( 默认 "dist/static" 目录 ) 下的路径
 * @param p
 * @returns {string}
 */
function getAssetsSubPath(p) {
    return path.posix.join(config.assetsSubDirectory, p);
}

/**
 * 处理存放 DllPlugin manifest.json 的据对路径
 * @param p
 * @param env
 * @returns {string}
 */
function getAssetsVendorsAbsolutePath(p, env = 'production') {
    return path.posix.join(config.assetsRoot, getAssetsSubPath(`vendors/${p}`));
}

/**
 * 同步检查文件是否存在
 * @param path
 * @returns {boolean}
 */
function fsExistsSync(path) {
    try {
        fs.accessSync(path, (fs.constants && fs.constants.F_OK) || fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}

/**
 * 递归拷贝文件
 * @param src
 * @param dist
 * @param excludes
 */
function copyRecursionSync(src, dist, excludes) {

    const paths = fs.readdirSync(src);

    for (let path of paths) {

        if (excludes && excludes.findIndex(item => path.includes(item)) > -1) {
            continue;
        }

        const srcPath = src + '/' + path,
            distPath = dist + '/' + path,

            stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {

            if (!fsExistsSync(distPath)) {
                fs.mkdirSync(distPath);
            }

            copyRecursionSync(srcPath, distPath, excludes);

        } else {
            fs.copyFileSync(srcPath, distPath);
        }

    }

}

/**
 * 同步递归移除文件
 * @param p
 */
function rmRecursionSync(p) {

    const paths = fs.readdirSync(p);

    for (let path of paths) {

        const rmPath = p + '/' + path,
            stat = fs.statSync(rmPath);

        if (stat.isDirectory()) {
            rmRecursionSync(rmPath);
            if (fsExistsSync(rmPath)) {
                fs.rmdirSync(rmPath);
            }
        } else {
            if (fsExistsSync(rmPath)) {
                fs.unlinkSync(rmPath);
            }
        }

    }

    if (fsExistsSync(p)) {
        fs.rmdirSync(p);
    }

}

/**
 * 获取客户端的 IP
 * @param req
 * @returns {*}
 */
function getClientIp(req) {
    return req && ((req.headers && (req.headers['x-real-ip'] || req.headers['x-forwarded-for']))
        || (req.connection && req.connection.remoteAddress)
        || (req.socket && req.socket.remoteAddress)
        || (req.connection && req.connection.socket && req.connection.socket.remoteAddress));
}

/**
 * 解析 IP
 * @param ip
 * @returns {*}
 */
function ipParse(ip) {

    if (!ip || !ip.includes(':')) {
        return ip;
    }

    const ipArray = ip.split(':');

    if (!ipArray[3]) {
        return ip;
    }

    return ipArray[3];

}

/**
 * 计算 SHA256
 * @param filePath
 * @param callback
 */
function calculateSHA256(filePath, callback) {
    const rs = fs.createReadStream(filePath),
        hash = crypto.createHash('sha256');
    rs.on('data', hash.update.bind(hash));
    rs.on('end', function () {
        console.log('SHA-256 Hash: ', hash.digest('hex'), '\n');
        callback && callback();
    });
}

/**
 * 安装 npm 依赖
 * @param path
 * @returns {Promise<unknown>}
 */
function installDependencies(path) {
    return new Promise((resolve, reject) => {
        const childProcess = ChildProcess.exec('npm i --legacy-peer-deps', {
            cwd: path
        }, error => {
            error && reject(error);
        }).on('close', () => {
            resolve();
        });
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
    });
}

/**
 * 打包
 * @param path
 * @param name
 * @returns {Promise<unknown>}
 */
function makeTapeAchive(path, name) {
    return new Promise((resolve, reject) => {
        ChildProcess.exec(`tar -czf ${name}.tar.gz ${path}`, {
            cwd: path
        }, error => {
            error && reject(error);
        }).on('close', () => {
            resolve();
        });
    });
}

/**
 * ajax 请求返回时往 cookie 中添加 token
 * @param res
 * @param token
 * @returns {ServerResponse|*|never}
 */
function addToken(res, token) {
    return res.cookie('token', token, {httpOnly: true});
}

/**
 * ajax 请求返回时删除 cookie 中的 token
 * @param res
 * @returns {ServerResponse|*|never}
 */
function removeToken(res) {
    return res.cookie('token', '', {httpOnly: true, maxAge: 0});
}

/**
 * 处理 proxy response 回调，处理 token cookie
 * @param proxyRes
 * @param req
 * @param res
 */
function handleProxyRes(proxyRes, req, res) {
    getBody(res, proxyRes, rawBody => {

        if (!rawBody) {
            return;
        }

        try {

            const body = JSON.parse(rawBody);

            // token 过期了
            if (body.code === 4001) {
                removeToken(res);
            }
            // sign in
            else if (req.url === '/dplatform-cloud-gateway/dplatform-cloud-auth/v1/users/token/create'
                && body.code === 2000 && body.data && body.data.access_token) {
                addToken(res, body.data.access_token);
            }
            // sign out
            else if (req.url === '/dplatform-cloud-gateway/dplatform-cloud-auth/v1/users/token/delete') {
                removeToken(res);
            }

        } catch (e) {
            //
        }

    });
}

exports.resolveRootPath = resolveRootPath;
exports.getAssetsPath = getAssetsPath;
exports.getAssetsSubPath = getAssetsSubPath;
exports.getAssetsVendorsAbsolutePath = getAssetsVendorsAbsolutePath;
exports.fsExistsSync = fsExistsSync;
exports.copyRecursionSync = copyRecursionSync;
exports.rmRecursionSync = rmRecursionSync;
exports.getClientIp = getClientIp;
exports.ipParse = ipParse;
exports.calculateSHA256 = calculateSHA256;
exports.installDependencies = installDependencies;
exports.makeTapeAchive = makeTapeAchive;
exports.addToken = addToken;
exports.removeToken = removeToken;
exports.handleProxyRes = handleProxyRes;
