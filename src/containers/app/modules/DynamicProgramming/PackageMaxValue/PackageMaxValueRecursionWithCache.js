/**
 * 背包问题递归版本，并带缓存
 * @param restItems
 * @param restSize
 * @returns {Array}
 */
function PackageMaxValueRecursionWithCache(items, size) {

    const cache = [];

    return (function loop(restItems, restSize) {

        // 缓存用的key，因为在计算过程中 items 的顺序不会改变
        const key = JSON.stringify(restItems);

        // 有缓存的话直接返回
        if (key in cache) {
            return cache[key];
        }

        // 过滤掉只有 weight 大于当前剩余容量的物品
        const matchedItems = restItems.filter(item => item.weight <= restSize);

        // 如果无合法物品，返回价值0
        if (matchedItems.length < 1) {
            return 0;
        }

        // （此部分也可省略）如果只剩一个合法物品时直接返回其价值
        if (matchedItems.length === 1) {
            return matchedItems[0].value;
        }

        // 递归使用任意一件物品，计算所有可能情况下的最大价值
        const result = Math.max(
            ...matchedItems.map((item, index) => {

                // 排除当前物品，剩下的作为下一次计算的剩余物品集合
                const nextRestItems = matchedItems.slice();
                nextRestItems.splice(index, 1);

                // 递归调用
                return loop(nextRestItems, restSize - item.weight) + item.value;

            })
        );
        cache[key] = result;

        console.log(`when size = ${restSize}, max value of [${restItems.map(item => JSON.stringify(item)).join(', ')}] = ${result}`);

        return result;

    })(items, size);

}

console.log('Result: ', PackageMaxValueRecursionWithCache([
    {weight: 4, value: 6},
    {weight: 5, value: 4},
    {weight: 6, value: 5},
    {weight: 2, value: 3},
    {weight: 2, value: 6}
], 10));
