function LongestIncreaseSequence(list) {

    const cache = new Array(list.length).fill(1);

    for (let i = 1, len = list.length; i < len; i++) {

        for (let j = 0; j < i; j++) {
            if (list[i] > list[j]) {
                cache[i] = Math.max(cache[i], cache[j] + 1);
            }
        }

        console.log(`Longest Increase Sequence of list.slice(0, ${i}) = ${cache[i]}`);

    }

    return Math.max(...cache);

}

console.log('Result: ', LongestIncreaseSequence([1, 5, 3, 4, 6, 9, 7, 8]));
