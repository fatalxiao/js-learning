import * as types from 'reduxes/actionTypes';

/**
 * 请求全屏
 * @param el
 * @param fullScreenClassName
 * @param callback
 * @returns {function(*): *}
 */
export const requestFullScreen = (el, fullScreenClassName, callback) => dispatch => dispatch({
    type: types.REQUEST_FULL_SCREEN,
    el,
    fullScreenClassName,
    callback
});

/**
 * 退出全屏
 * @param callback
 * @returns {function(*): *}
 */
export const exitFullScreen = callback => dispatch => dispatch({
    type: types.EXIT_FULL_SCREEN,
    callback
});

/**
 * 设置是否全屏
 * @param isFullScreen
 * @returns {function(*): *}
 */
export const updateFullScreen = isFullScreen => dispatch => dispatch({
    type: types.UPDATE_FULL_SCREEN,
    isFullScreen
});

/**
 * 切换全屏
 * @param el
 * @param fullScreenClassName
 * @param callback
 * @returns {Function}
 */
export const toggleFullScreen = (el, fullScreenClassName, callback) => (dispatch, getState) => {
    if (getState().fullScreen.isFullScreen) {
        dispatch({
            type: types.EXIT_FULL_SCREEN,
            callback
        });
    } else {
        dispatch({
            type: types.REQUEST_FULL_SCREEN,
            el,
            fullScreenClassName,
            callback
        });
    }
};
