import RequestManagement from './RequestManagement';

function ajax(method, request) {

    const {
            name, url, params, formData, file, cancelable, header, contentType, isUploadForm, isUploadFile,
            successCallback, failureCallback
        } = request,
        xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    // xhr.setRequestHeader('Cache-Control', 'no-cache, must-revalidate');
    // xhr.setRequestHeader('expires', 'Thu, 01 Jan 1970 00:00:01 GMT');
    // xhr.setRequestHeader('If-Modified-Since', '0');

    if (header) {
        for (let key in header) {
            xhr.setRequestHeader(key, header[key]);
        }
    }

    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4) {

            let response = xhr.responseText;

            if (xhr.status === 500) {
                failureCallback && failureCallback(xhr, response);
                return;
            }

            try {
                response = JSON.parse(response);
            } catch (e) {
                failureCallback && failureCallback(xhr, undefined, undefined, {
                    ...request,
                    method
                });
                return;
            }

            if (parseInt(+response.code / 1000) === 2) {
                successCallback && successCallback(xhr, response, response.data, {
                    ...request,
                    method
                });
            } else {
                failureCallback && failureCallback(xhr, response, response.data, {
                    ...request,
                    method
                });
            }

        }

    };

    // add request to cancelable list if it's cancelable
    if (cancelable !== false) {
        RequestManagement.add({
            name,
            url,
            xhr
        });
    }

    let body;

    if (isUploadFile) {

        // xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        // const reader = new FileReader();

        // readAsArrayBuffer
        // reader.readAsArrayBuffer(file);
        // reader.onload = function (e) {
        //
        //     const dataView = new DataView(e.target.result),
        //         size = dataView.byteLength,
        //         uint8Array = new Uint8Array(size);
        //     for (let i = 0; i < size; i++) {
        //         uint8Array[i] = dataView.getUint8(i);
        //     }
        //
        //     xhr.send(uint8Array.buffer);
        //
        // };

        // readAsBinaryString
        // reader.readAsBinaryString(file);
        // reader.onload = function (e) {
        //     xhr.send(e.target.result);
        // };

        // readAsText
        // reader.readAsText(file);
        // reader.onload = function (e) {
        //     xhr.send(new Blob([e.target.result], {type: 'text/plain'}));
        // };

        xhr.send(file);

        return;

    }

    if (isUploadForm) {
        body = Object.prototype.toString.call(formData) === '[object FormData]' ? formData : new FormData(formData);
    } else if (params) {
        xhr.setRequestHeader('Content-Type', contentType || 'application/json');
        try {
            body = JSON.stringify(params);
        } catch (e) {
            failureCallback && failureCallback(xhr);
        }
    }

    xhr.send(body);

}

function get(options) {
    ajax('GET', options);
}

function post(options) {
    ajax('POST', options);
}

function put(options) {
    ajax('PUT', options);
}

function del(options) {
    ajax('DELETE', options);
}

function postForm(options) {
    ajax('POST', {
        ...options,
        isUploadForm: true
    });
}

function putForm(options) {
    ajax('PUT', {
        ...options,
        isUploadForm: true
    });
}

function putFile(options) {
    ajax('PUT', {
        ...options,
        isUploadFile: true
    });
}

export default {
    get,
    post,
    put,
    del,
    postForm,
    putForm,
    putFile
};
