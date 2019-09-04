const sum = (...value) => {
    const fn = (...anotherValue) => sum(...value, ...anotherValue);
    fn.equalTo = () => {
        console.log('calculate');
        return value.reduce((a, b) => a + b);
    };
    return fn;
};

// sum(1)(2, 3)(4, 5, 6).equalTo();

console.log('step 0');
const sum1 = sum(1);
console.log('step 1');
const sum2 = sum1(2, 3);
console.log('step 2');
const sum3 = sum2(4, 5, 6);
console.log('step 3');
console.log(sum3.equalTo());
console.log('step 4');

// step 0
// step 1
// step 2
// step 3
// calculate
// 21
// step 4
