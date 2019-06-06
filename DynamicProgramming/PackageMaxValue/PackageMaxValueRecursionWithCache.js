/**
 * 背包问题递归版本
 * @param restItems
 * @param restSize
 * @returns {Array}
 */
function PackageMaxValueRecursionWithCache(items, size) {

    const cache = [];

    return (function loop(restItems, restSize) {

        const key = JSON.stringify(restItems);

        if (key in cache) {
            return cache[key];
        }

        const matchedItems = restItems.filter(item => item.weight <= restSize);

        if (matchedItems.length < 1) {
            return 0;
        }

        if (matchedItems.length === 1) {
            return matchedItems[0].value;
        }

        const result = Math.max(
            ...matchedItems.map((item, index) => {

                const nextRestItems = matchedItems.slice();
                nextRestItems.splice(index, 1);

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
