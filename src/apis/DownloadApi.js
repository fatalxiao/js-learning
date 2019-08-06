import URI from 'urijs';
import Valid from 'vendors/Valid';

/**
 * 下载iframe的集合
 * @type {{}}
 */
const downloads = {};

/**
 * 当前下载iframe在iframe的集合中的key值，每次下载会累加key值
 * @type {number}
 */
let key = 0;

/**
 * 在url上添加token
 * @param options
 * @returns {*}
 */
function formatUrl(options) {

    if (!options || !options.url || !options.header || !options.header.token) {
        return;
    }

    const {url, header, shouldAppendToken} = options;

    return shouldAppendToken ? new URI(url).addQuery('token', header.token) : url;

}

/**
 * 成功处理
 * @param options
 * @param iframe
 */
function successHandler(options, iframe) {

    const {successCallback, failureCallback} = options,
        iframeDoc = iframe ? iframe.contentDocument || iframe.contentWindow.document : null,
        innerText = iframeDoc ? iframeDoc.body.innerText : '',
        jsonObj = Valid.parseDownloadMessage(innerText);

    if (jsonObj && jsonObj.code && parseInt(+jsonObj.code / 1000) !== 2) {
        failureCallback(undefined, jsonObj, jsonObj && jsonObj.data);
    } else {
        successCallback(undefined, jsonObj, jsonObj && jsonObj.data);
    }

}

/**
 * 失败处理
 * @param options
 * @param iframe
 */
function failureHandler(options, iframe) {

    const {failureCallback} = options,
        iframeDoc = iframe ? iframe.contentDocument || iframe.contentWindow.document : null,
        innerText = iframeDoc ? iframeDoc.body.innerText : '',
        jsonObj = Valid.parseDownloadMessage(innerText);

    failureCallback(undefined, jsonObj, jsonObj && jsonObj.data);

}

/**
 * 创建iframe
 * @returns {HTMLElement}
 */
function getIframe() {

    let iframe;

    try {
        iframe = document.createElement('<iframe></iframe>');
    } catch (e) {
        iframe = document.createElement('iframe');
    }

    iframe.style.display = 'none';

    return iframe;

}

/**
 * 移除iframe dom
 * @param key
 */
function removeIframeEl(key) {

    if (!key || !downloads[key]) {
        return;
    }

    document.body.removeChild(downloads[key]);
    delete downloads[key];

}

/**
 * 下载
 * @param options
 */
function download(options) {

    if (!options) {
        return;
    }

    const iframe = getIframe(),
        {url} = options;

    if (!iframe || !url) {
        return;
    }

    const currentKey = key + 1;
    iframe.src = formatUrl(options);
    downloads[currentKey] = iframe;
    document.body.appendChild(iframe);

    const intervalID = setInterval(function () {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            if (iframeDoc && (iframeDoc.readyState === 'complete' || iframeDoc.readyState === 'interactive')) {
                successHandler(options, iframe);
                clearInterval(intervalID);
                removeIframeEl(currentKey);
            }
        } catch (e) {
            failureHandler(options, iframe);
            clearInterval(intervalID);
            removeIframeEl(currentKey);
        }
    }, 2000);

}

export default {
    download
};
