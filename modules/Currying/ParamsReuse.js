const sum = (left, middle, right) => left + middle + right;
const curryingSum = sum.bind(null, 1, 2);

curryingSum(3); // 6
curryingSum(4); // 7
curryingSum(5); // 8

// bind
Function.prototype.bind = function (context, ...args) {
    return (...rest) => this.call(context, ...args, ...rest);
};
