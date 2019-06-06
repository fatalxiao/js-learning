/**
 * 最长上升序列递归实现，改进版，传递索引
 * @param list
 * @param start
 * @param stop
 * @returns {number}
 * @constructor
 */
function LISRecursionAdvanced(list, start = 0, stop = list.length) {

    // 如果截取的序列长度为1，则直接返回1
    if (stop - start === 1) {
        return 1;
    }

    return Math.max(
        // 掐头，并且若舍去的数小于剩余的第一个数，则需加一
        LISRecursionAdvanced(list, start + 1, stop) + (list[start + 1] > list[start] ? 1 : 0),

        // 去尾，并且若舍去的数大于剩余的最后一个数，则需加一
        LISRecursionAdvanced(list, start, stop - 1) + (list[stop] > list[stop - 1] ? 1 : 0)
    );

}

console.log('Result: ', LISRecursionAdvanced([1, 5, 3, 4, 6, 9, 7, 8]));
