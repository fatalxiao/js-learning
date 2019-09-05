/**
 * Common Usage
 */
const check = (reg, string) => reg.test(string);

check(/\d+/g, 'test'); // false
check(/[a-z]+/g, 'test'); // true



/**
 * currying
 */
const curryingCheck = reg => string => reg.test(string);

const hasNumber = curryingCheck(/\d+/g);
const hasLetter = curryingCheck(/[a-z]+/g);

hasNumber('test1'); // true
hasNumber('testtest'); // false
hasLetter('21212'); // false
