const CANCEL_FLAG = 'CANCEL_FLAG';

/**
 * 暂存的所有 request
 * @type {Array}
 */
let requests = [];

/**
 * 校验name是否匹配
 * @param target
 * @param name
 * @returns {boolean}
 */
function isNameMatched(target, name) {
    return ({}).toString.call(target) === '[object RegExp]' ?
        target.test(name)
        :
        target === name;
}

/**
 * 添加request
 * @param item
 */
function add(item) {
    item && requests.push(item);
}

/**
 * 根据 name 来匹配需要 cancel 的 request
 * @param name
 */
function cancelByName(name) {

    if (!name) {
        return;
    }

    requests = requests.filter(item => {

        if (!item || !item.name) {
            return true;
        }

        if (isNameMatched(name, item.name)) {
            if (item.xhr) {
                item.xhr[CANCEL_FLAG] = true;
                item.xhr.abort();
            }
            return false;
        }

        return true;

    });

}

/**
 * 根据 name 来匹配不需要 cancel 的 request
 * @param name
 */
function cancelOthersByName(name) {

    if (!name) {
        return;
    }

    requests = requests.filter(item => {

        if (!item || !item.name) {
            return true;
        }

        if (!isNameMatched(name, item.name)) {
            if (item.xhr) {
                item.xhr[CANCEL_FLAG] = true;
                item.xhr.abort();
            }
            return false;
        }

        return true;

    });

}

/**
 * cancel 所有 request
 */
function cancelAll() {
    for (let item of requests) {
        item.xhr[CANCEL_FLAG] = true;
        item.xhr.abort();
    }
    requests.length = 0;
}

export default {

    CANCEL_FLAG,

    add,
    cancelByName,
    cancelOthersByName,
    cancelAll

};
