function LongestIncreaseSequence(list) {

    const len = list.length,
        cache = new Array(len).fill(1);

    for (let end = 1; end < len; end++) {

        for (let start = 0; start < end; start++) {
            if (list[end] > list[start]) {
                cache[end] = Math.max(cache[end], cache[start] + 1);
            }
        }

        console.log(`Longest Increase Sequence of list.slice(0, ${end}) = ${cache[end]}`);

    }

    return Math.max(...cache);

}

console.log('Result: ', LongestIncreaseSequence([1, 5, 3, 4, 6, 9, 7, 8]));
