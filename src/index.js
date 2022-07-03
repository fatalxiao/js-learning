/**
 * @file index.js
 */

'use strict';

import React from 'react';

// Vendors
import {createRoot} from 'react-dom/client';
import {createBrowserHistory} from 'history';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'vivy-router';

// Configs
import configureStore from './config.store';
import configureRoutes from './config.routes';

// Styles
import 'scss/index.scss';

/**
 * 创建 history
 * @type {*}
 */
const history = createBrowserHistory();

/**
 * 创建 store
 */
const store = configureStore(history);

/**
 * 渲染应用到dom
 */
createRoot(document.getElementById('app-container')).render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {renderRoutes(configureRoutes(store))}
        </ConnectedRouter>
    </Provider>
);

/**
 * 开发环境时，添加热替换监听
 */
module?.hot?.accept?.();
