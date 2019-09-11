import screenfull from 'screenfull';

import * as actionTypes from 'reduxes/actionTypes';

const initialState = {
    isFullScreen: screenfull ? screenfull.isFullscreen : false
};

/**
 * 请求全屏
 * @param el
 * @param callback
 * @returns {Promise<void>}
 */
async function request(el, callback) {

    if (!screenfull) {
        return;
    }

    await screenfull.request(el || undefined);
    callback && callback();

}

/**
 * 退出全屏
 * @param callback
 * @returns {Promise<void>}
 */
async function exit(callback) {

    if (!screenfull) {
        return;
    }

    await screenfull.exit();
    callback && callback();

}

function fullScreen(state = initialState, action) {
    switch (action.type) {

        /**
         * 请求全屏
         */
        case actionTypes.REQUEST_FULL_SCREEN: {

            request(action.el, action.callback);

            return {
                ...state,
                isFullScreen: true
            };

        }

        /**
         * 退出全屏
         */
        case actionTypes.EXIT_FULL_SCREEN: {

            exit(action.callback);

            return {
                ...state,
                isFullScreen: false
            };

        }

        /**
         * 更新全屏
         */
        case actionTypes.UPDATE_FULL_SCREEN: {

            const isFullScreen = action.isFullScreen || (screenfull ? screenfull.isFullscreen : false);

            return {
                ...state,
                isFullScreen
            };

        }

        default:
            return state;

    }
}

export default fullScreen;
