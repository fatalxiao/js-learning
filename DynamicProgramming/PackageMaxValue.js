function packageMaxValue(items, size) {

    let bagMatrix = [];

    for (let i = 0; i <= size; i++) {

        bagMatrix[i] = [];

        for (let j = 0; j < 5; j++) {

            // 背包的容量为0，那么一个东西也装不下，此时的值肯定也是为0
            if (i === 0) {
                bagMatrix[i][j] = 0;
                continue;
            }

            // 背包的容量小于物品j的重量，那么就没有上述情况a了
            if (i < items[j].wight) {
                bagMatrix[i][j] = bagMatrix[i][j - 1] || 0;
                continue;
            }

            bagMatrix[i][j] = Math.max(
                (bagMatrix[i - items[j].wight][j - 1] || 0) + items[j].value,
                bagMatrix[i][j - 1] || 0
            );

        }

    }

    return bagMatrix;

}

console.log('Result: \n', packageMaxValue([
    {wight: 4, value: 6},
    {wight: 5, value: 4},
    {wight: 6, value: 5},
    {wight: 2, value: 3},
    {wight: 2, value: 6}
], 10));
