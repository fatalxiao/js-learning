/**
 * @file config.store.js
 *
 * 系统 Vivy store 配置
 */

// Vivy
import Vivy from 'vivy';
import VivyRouter from 'vivy-router';
import VivyAsyncComponent from 'vivy-async-component';
import VivyApi from 'vivy-api';
import VivySubscription from 'vivy-subscription';
import VivyI18n from 'vivy-i18n';
import {translate} from 'vivy-i18n';

// Middlewares
import thunk from 'redux-thunk';
import RouterMiddleware from 'middlewares/RouterMiddleware';

// Models
import index from 'models/index';
import route from 'models/route';
import api from 'models/api';
import auth from 'models/auth';
import allInOneHelpWidget from 'models/allInOneHelpWidget';
import components from 'models/components';

// Statics
import RequestCode from 'src/config.requestCode';
import {defaultLanguage} from 'statics/LanguageList';

// Vendors
import axios from 'axios';
import {getCurrentLanguage} from 'vendors/I18nUtil';

/**
 * 配置 Vivy store
 * @param history
 * @returns {*|{}}
 */
export default function configureStore(history) {

    // 创建 Vivy 实例
    const vivy = Vivy({
        extraMiddlewares: [
            thunk,
            RouterMiddleware
        ]
    });

    // 应用 Router plugin
    vivy.use(VivyRouter({
        history
    }));

    // 应用 Async Component plugin
    vivy.use(VivyAsyncComponent());

    // 应用 Api plugin
    vivy.use(VivyApi({

        // 判断 Response 状态的回调
        checkResponseStatus: xhr => {
            // console.log('response::', response);
            return xhr?.status === 200 && xhr?.data?.result === 'success';
        },

        // 当请求返回成功时当回调
        successResponseHandler: ({dispatch}) => next => action => {

            const {
                response: xhr,
                successCallback,
                toastDisabled, successToastDisabled
            } = action;

            const response = xhr?.data;
            const responseData = xhr?.data?.data;

            // 存储当前请求，后端返回的 Request ID，用于下一次请求时的参数
            // dispatch({
            //     type: 'api/updateLatestRequestID',
            //     latestRequestID: xhr?.headers?.requestid || null
            // });

            // 显示默认的成功消息
            if (!successToastDisabled && !toastDisabled && xhr?.config?.method !== 'get') {
                dispatch({
                    type: 'toasts/addSuccessToast',
                    message: translate('api/successfully')
                });
            }

            // dispatch 成功的 action
            next({
                ...action,
                xhr,
                response,
                responseData
            });

            // 触发成功回调
            successCallback?.(responseData, response, xhr);

        },

        // 当请求返回失败时当回调
        failureResponseHandler: ({dispatch}) => next => action => {

            const {
                response: xhr,
                failureCallback,
                toastDisabled, failureToastDisabled,
                error
            } = action;

            if (error && process.env.NODE_ENV.startsWith('development')) {
                console.error(error);
            }

            // 忽略被取消的请求
            if (axios.isCancel(error)) {
                return;
            }
            const response = xhr?.data;
            const responseData = xhr?.data?.body;
            const responseError = xhr?.data?.error;

            // 如果 token 失效返回登录页
            if (xhr?.status === 401 || response?.code === RequestCode.UNAUTHORIZED) {
                dispatch({
                    type: 'auth/failed'
                });
                return;
            }

            // 403 没有权限
            if (xhr?.status === 403 || Number(response?.error?.code) === RequestCode.NOPERMISSION) {
                dispatch({
                    type: 'route/push',
                    route: '/nav/no-permission'
                });
                return;
            }

            // 显示默认的失败消息
            if (!failureToastDisabled && !toastDisabled && xhr?.config?.method !== 'get') {
                dispatch({
                    type: 'toasts/addErrorToast',
                    message: translate('api/failed')
                });
            }

            // 当 http status 或 response code 是 5 开头时，追加显示 notification
            if (('' + xhr?.status)?.[0] === '5' || ('' + response?.code)?.[0] === '5' || !navigator.onLine) {
                dispatch({
                    type: 'notifications/addWarningNotification',
                    message: responseError?.msg || translate('api/DEFAULT_MESSAGE'),
                    title: translate('api/DEFAULT_MESSAGE_TITLE')
                });
            }

            // dispatch 失败的 action
            next({
                ...action,
                xhr,
                response,
                responseData,
                responseError,
                error: responseError?.msg || translate('api/DEFAULT_MESSAGE_TITLE') + translate('api/DEFAULT_MESSAGE')
            });

            // 触发失败回调
            failureCallback?.(responseError, response, xhr);

        }

    }));

    // 应用 Subscription plugin
    vivy.use(VivySubscription());

    // 应用 I18n plugin
    vivy.use(VivyI18n({
        defaultLanguage,
        language: getCurrentLanguage()
    }));

    // 创建 store
    const store = vivy.createStore();

    // 注册 models
    store.registerModels([
        index,
        route,
        api,
        auth,
        allInOneHelpWidget,
        components
    ]);

    return store;

}
