function progressCurrying(fn, ...args) {

    const self = this,
        len = fn.length;

    return function (...otherArgs) {

        args = [...args, ...otherArgs];

        // 如果参数个数小于最初的 fn.length，则递归调用，继续收集参数
        if (args.length < len) {
            return progressCurrying.call(self, fn, ...args);
        }

        // 参数收集完毕，则执行fn
        return fn.call(self, ...args);

    };

}

const sum = (a, b, c) => a + b + c;

const curryingSum = progressCurrying(sum, 1);
curryingSum(2);
curryingSum(3); // 6
curryingSum(4);
