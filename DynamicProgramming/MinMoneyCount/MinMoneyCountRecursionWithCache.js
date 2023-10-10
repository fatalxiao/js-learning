/**
 * 用最少的钞票递归实现，并带缓存
 * @param set
 * @param value
 * @returns {*|number}
 */
function minCountRecursion(set, value) {

    const cache = [];

    return (function loop(set, RestValue) {

        // 缓存中有当前剩余金额时，直接返回
        if (RestValue in cache) {
            return cache[RestValue];
        }

        // 小于0的时候不合法，返回负无穷
        if (RestValue < 0) {
            return Number.POSITIVE_INFINITY;
        }

        // 等于0的时候返回0
        if (RestValue === 0) {
            return 0;
        }

        // 遍历所有币种，在当前剩余金额的情况下使用该币种可得到的最少张数
        const result = Math.min(
            ...set.map(item =>
                loop(set, RestValue - item)
            )
        ) + 1;
        cache[RestValue] = result;

        console.log(`min count of ${RestValue} = ${result}`);

        return result;

    })(set, value);

}

console.log(`Result: ${minCountRecursion([1, 5, 11], 15)}`);
