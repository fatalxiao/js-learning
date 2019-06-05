function minCountRecursion(set, value) {

    const cache = [];

    return (function loop(set, RestValue) {

        if (RestValue in cache) {
            return cache[RestValue];
        }

        if (RestValue < 0) {
            return Number.POSITIVE_INFINITY;
        }

        if (RestValue === 0) {
            return 0;
        }

        const result = Math.min(...set.map(item => loop(set, RestValue - item))) + 1;
        cache[RestValue] = result;
        console.log(`min count of ${RestValue} = ${result}`);

        return result;

    })(set, value);

}

console.log(`Result: ${minCountRecursion([1, 5, 11], 15)}`);
