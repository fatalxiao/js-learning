function MinMoneyCount(set, value) {

    const cache = [];
    let count;

    cache[0] = 0;
    for (let restValue = 1; restValue <= value; restValue++) {

        count = Number.POSITIVE_INFINITY;

        for (let cost of set) {
            if (restValue >= cost) {
                count = Math.min(count, cache[restValue - cost] + 1);
            }
        }

        cache[restValue] = count;

        console.log(`min count of ${restValue} = ${count}`);

    }

    return cache[value];

}

console.log(`Result: ${MinMoneyCount([1, 5, 11], 15)}`);
