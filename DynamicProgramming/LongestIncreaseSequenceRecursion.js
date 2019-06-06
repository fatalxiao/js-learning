function LongestIncreaseSequenceRecursion(list) {

    const len = list.length;

    if (len === 1) {
        return 1;
    }

    return Math.max(
        LongestIncreaseSequenceRecursion(list.slice(1)) + (list[1] > list[0] ? 1 : 0),
        LongestIncreaseSequenceRecursion(list.slice(0, len - 1)) + (list[len - 1] > list[len - 2] ? 1 : 0)
    );

}

console.log('Result: ', LongestIncreaseSequenceRecursion([1, 5, 3, 4, 6, 9, 7, 8]));
