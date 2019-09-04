const sum = (...args) => {
    const fn = (...anotherArgs) => sum(...args, ...anotherArgs);
    fn.toString = () => args.reduce((a, b) => a + b);
    return fn;
};

const sum1 = sum(1, 2, 3);
console.log('sum1::', sum1); // 6

const sum2 = sum(4, 5);
console.log('sum2::', sum2); // 9

const sum3 = sum2(6, 7);
console.log('sum3::', sum3); // 22

const sum4 = sum(1, 2)(3, 4, 5)(6);
console.log('sum4::', sum4); // 21
