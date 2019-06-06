/**
 * 用最少的钞票
 * @param moneySet
 * @param value
 * @returns {*}
 * @constructor
 */
function MinMoneyCount(moneySet, value) {

    const cache = [];
    let count;

    cache[0] = 0;

    // 遍历所有小于等于满足金额的值
    for (let restValue = 1; restValue <= value; restValue++) {

        count = Number.POSITIVE_INFINITY;

        // 遍历所有币种
        for (let money of moneySet) {

            // 当前剩余金额大于等于当前币种的话，计算最小值
            if (restValue >= money) {
                count = Math.min(count, cache[restValue - money] + 1);
            }

        }
        cache[restValue] = count;

        console.log(`min count of ${restValue} = ${count}`);

    }

    return cache[value];

}

console.log(`Result: ${MinMoneyCount([1, 5, 11], 15)}`);
