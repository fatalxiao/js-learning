/**
 * 用最少的钞票递归版
 * @param moneySet
 * @param RestValue
 * @returns {number}
 */
function minCountRecursion(moneySet, RestValue) {

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
        ...moneySet.map(item =>
            minCountRecursion(moneySet, RestValue - item)
        )
    ) + 1;

    console.log(`min count of ${RestValue} = ${result}`);

    return result;

}

console.log(`Result: ${minCountRecursion([1, 5, 11], 15)}`);
