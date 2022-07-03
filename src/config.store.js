/**
 * @file config.store.js
 */

// Vivy
import Vivy from 'vivy';
import VivyRouter from 'vivy-router';
import VivyAsyncComponent from 'vivy-async-component';

// Middlewares
import thunk from 'redux-thunk';

// Models
import route from 'models/route';

/**
 * 配置 Vivy store
 * @param history
 * @returns {*|{}}
 */
export default function configureStore(history) {

    // 创建 Vivy 实例
    const vivy = Vivy({
        extraMiddlewares: [
            thunk
        ]
    });

    // 应用 Router plugin
    vivy.use(VivyRouter({
        history
    }));

    // 应用 Async Component plugin
    vivy.use(VivyAsyncComponent());

    // 创建 store
    const store = vivy.createStore();

    // 注册 models
    store.registerModels([
        route
    ]);

    return store;

}
