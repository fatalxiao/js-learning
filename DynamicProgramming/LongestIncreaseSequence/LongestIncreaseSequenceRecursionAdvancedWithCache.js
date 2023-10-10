/**
 * 最长上升序列递归实现，改进版，传递索引，并添加缓存
 * @param list
 * @returns {*|number}
 * @constructor
 */
function LISRecursionAdvancedWithCache(list) {

    const cahce = {};

    return (function loop(list, start = 0, stop = list.length) {

        // 若有缓存，直接返回
        if (`${start}-${stop}` in cahce) {
            return cahce[`${start}-${stop}`];
        }

        // 若截取的序列长度为1，则直接返回1
        if (stop - start === 1) {
            return 1;
        }

        const result = Math.max(
            // 掐头，并且若舍去的数小于剩余的第一个数，则需加一
            loop(list, start + 1, stop) + (list[start + 1] > list[start] ? 1 : 0),

            // 去尾，并且若舍去的数大于剩余的最后一个数，则需加一
            loop(list, start, stop - 1) + (list[stop] > list[stop - 1] ? 1 : 0)
        );
        cahce[`${start}-${stop}`] = result;

        // 可以当前子串所能得到的最小上升序列长度
        console.log(`Longest Increase Sequence of [${list.slice(start, stop).join(', ')}] = ${result}`);

        return result;

    })(list);

}

console.log('Result: ', LISRecursionAdvancedWithCache([1, 5, 3, 4, 6, 9, 7, 8]));
