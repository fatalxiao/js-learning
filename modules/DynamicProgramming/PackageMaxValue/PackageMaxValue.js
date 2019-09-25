/**
 * 背包问题动态规划实现
 * @param items
 * @param size
 * @returns {Array}
 */
function PackageMaxValue(items, size) {

    const len = items.length,
        cache = [];

    for (let i = 0; i <= size; i++) {

        cache[i] = [];

        for (let j = 0; j < len; j++) {

            // 背包的容量为0，那么一个东西也装不下，此时的值肯定也是为0
            if (i === 0) {
                cache[i][j] = 0;
                continue;
            }

            // 背包的容量小于物品j的重量，那么就没有上述情况a了
            if (i < items[j].weight) {
                cache[i][j] = cache[i][j - 1] || 0;
                continue;
            }

            cache[i][j] = Math.max(
                (cache[i - items[j].weight][j - 1] || 0) + items[j].value,
                cache[i][j - 1] || 0
            );

        }

    }

    return cache;

}

console.log('Result: ', PackageMaxValue([
    {weight: 4, value: 6},
    {weight: 5, value: 4},
    {weight: 6, value: 5},
    {weight: 2, value: 3},
    {weight: 2, value: 6}
], 10));
