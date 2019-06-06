/**
 * 最长上升序列递归实现
 * @param list
 * @returns {number}
 * @constructor
 */
function LISRecursion(list) {

    const len = list.length;

    // 如果截取的序列长度为1，则直接返回1
    if (len === 1) {
        return 1;
    }

    return Math.max(
        // 掐头，并且若舍去的数小于剩余的第一个数，则需加一
        LISRecursion(list.slice(1)) + (list[1] > list[0] ? 1 : 0),

        // 去尾，并且若舍去的数大于剩余的最后一个数，则需加一
        LISRecursion(list.slice(0, len - 1)) + (list[len - 1] > list[len - 2] ? 1 : 0)
    );

}

console.log('Result: ', LISRecursion([1, 5, 3, 4, 6, 9, 7, 8]));
