/**
 * 背包问题递归实现
 * @param restItems
 * @param restSize
 * @returns {Array}
 */
function PackageMaxValueRecursion(restItems, restSize) {

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
            return PackageMaxValueRecursion(nextRestItems, restSize - item.weight) + item.value;

        })
    );

    console.log(`when size = ${restSize}, max value of [${restItems.map(item => JSON.stringify(item)).join(', ')}] = ${result}`);

    return result;

}

console.log('Result: ', PackageMaxValueRecursion([
    {weight: 4, value: 6},
    {weight: 5, value: 4},
    {weight: 6, value: 5},
    {weight: 2, value: 3},
    {weight: 2, value: 6}
], 10));
