function findCombinations(data, target) {

    const combinations = [];

    function backtrack(currentCombination, start, currentSum) {

        // 存储有效组合
        if (currentSum === target) {
            combinations.push([...currentCombination]);
            return;
        }

        if (currentSum > target) {
            return; // 当前和超过目标值，不再继续搜索
        }

        for (let i = start; i < data.length; i++) {
            // 添加当前数字到组合中
            currentCombination.push(data[i]);
            // 递归调用，增加当前数字的和
            backtrack(currentCombination, i + 1, currentSum + data[i].value);
            // 回溯，移除当前数字
            currentCombination.pop();
        }

    }

    // 调用回溯函数，初始组合为空，起始索引为 0，当前和为 0
    backtrack([], 0, 0);

    return combinations;

}

console.table(findCombinations([{
    label: '娱乐包',
    value: 1200
}, {
    label: '不锈钢吸管杯',
    value: 1300
}, {
    label: '磨砂保温杯',
    value: 1700
}, {
    label: '帆布袋',
    value: 500
}, {
    label: '咖啡杯',
    value: 1500
}, {
    label: '棒球帽',
    value: 1400
}, {
    label: '伞',
    value: 2000
}, {
    label: '飞盘',
    value: 600
}, {
    label: '不锈钢水壶',
    value: 1700
}, {
    label: '闪电飞盘',
    value: 700
}, {
    label: 'U盘',
    value: 2200
}], 3500).map(combination => combination.map(item => item.label).join(', ')));
