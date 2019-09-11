import * as types from 'reduxes/actionTypes';

/**
 * 请求全屏
 * @param el
 * @param callback
 * @returns {function(*): *}
 */
export const requestFullScreen = (el, callback) => dispatch => dispatch({
    type: types.REQUEST_FULL_SCREEN,
    el,
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
 * @param callback
 * @returns {Function}
 */
export const toggleFullScreen = (el, callback) => dispatch => dispatch({
    type: types.TOGGLE_FULL_SCREEN,
    el,
    callback
});
