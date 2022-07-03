/**
 * @file route.js
 */

// Vendors
import {push, replace, go, goBack, goForward} from 'connected-react-router';

export default {
    nameSpace: 'route',
    state: {

        /**
         * 当前路由是否为找到（ 404 ）
         */
        notFound: false

    },
    actions: {

        /**
         * push route
         * @param route
         * @returns {function(*): *}
         */
        push: ({route}) => dispatch => dispatch(push(route)),

        /**
         * replace route
         * @param route
         * @returns {function(*): *}
         */
        replace: ({route}) => dispatch => dispatch(replace(route)),

        /**
         * go route
         * @param route
         * @returns {function(*): *}
         */
        go: ({route}) => dispatch => dispatch(go(route)),

        /**
         * go back route
         * @param route
         * @returns {function(*): *}
         */
        goBack: ({route}) => dispatch => dispatch(goBack()),

        /**
         * go forward route
         * @param route
         * @returns {function(*): *}
         */
        goForward: ({route}) => dispatch => dispatch(goForward()),

        /**
         * 跳转到 404 页面
         * @returns {function(*): *}
         */
        goNotFound: () => dispatch => dispatch(replace('/nav/404')),

        /**
         * 跳转到 No Permission 页面
         * @returns {function(*): *}
         */
        goNoPermission: () => dispatch => dispatch(replace('/nav/no-permission'))

    },
    reducers: {

        /**
         * 更新 notFound 状态
         * @param state
         * @param value
         * @returns {*&{notFound}}
         */
        updateNotFound: (state, {value}) => {
            return {
                ...state,
                notFound: value
            };
        }

    }
};
