/**
 * 最长上升序列
 * @param list
 * @returns {number}
 * @constructor
 */
function LongestIncreaseSequence(list) {

    const len = list.length,

        // 数据缓存以 list[index] 为结尾的子串所能得到的最小上升序列长度，每一位默认值为1
        cache = new Array(len).fill(1);

    // 截止的游标
    for (let stop = 1; stop < len; stop++) {

        // 起始的游标
        for (let start = 0; start < stop; start++) {

            // 若符合上升规则，则重新计算最大值
            if (list[stop] > list[start]) {
                cache[stop] = Math.max(cache[stop], cache[start] + 1);
            }

        }

        // 每遍历完一遍内循环，可以得到以 list[stop] 为结尾的子串所能得到的最小上升序列长度
        console.log(`Longest Increase Sequence of list.slice(0, ${stop}) = ${cache[stop]}`);

    }

    return Math.max(...cache);

}

console.log('Result: ', LongestIncreaseSequence([1, 5, 3, 4, 6, 9, 7, 8]));
