/**
 * @file config.route.js
 * @author liangxiaojun(liangxiaojun@derbysoft.net)
 */

// Routes config
import configureRootRoutes from 'modules/Root/config.route';

// Vendors
import {pathToRegexp} from 'path-to-regexp';

/**
 * 根据 pathName 获取 route 配置
 * @param pathName
 * @param state
 * @returns {{path}|*}
 */
export function getRoute(pathName, state) {

    if (!pathName) {
        return;
    }

    return traverseData(configureRoutes(state)[0], pathName);

}

/**
 * 遍历 routes
 * @param node
 * @param pathName
 * @returns {{path}|*}
 */
export function traverseData(node, pathName) {

    if (!node || !node.path || !pathName) {
        return;
    }

    if (pathToRegexp(node.path).test(pathName)) {
        return node;
    }

    if (node.routes && node.routes.length > 0) {

        for (let i = 0, len = node.routes.length; i < len; i++) {

            // traverse child node
            const obj = traverseData(node.routes[i], pathName, i);

            // if finded in child node
            if (obj) {
                return obj;
            }

        }
    }

}

/**
 * 返回 routes 配置
 * @param store
 * @returns {*}
 */
export default function configureRoutes(store) {
    return [{

        // Root
        // path: '/'
        ...configureRootRoutes(store)
        // routes: [{
        //     // App
        //     // path: '/app'
        //     ...configureAppRoutes(store),
        //     routes: []
        // }]
    }];
}

export const DEFAULT_ROUTE = '/js-learning';
