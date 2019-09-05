const list1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    list2 = [1, 3, 5, 7, 9],
    list3 = [2, 4, 6, 8, 10];

// Base Judgement
const isOdd = value => value % 2 === 1;
const isEven = value => value % 2 === 0;

/**
 * Common Usage
 */

    // List Judgement
const isOddList = list => list.every(item => isOdd(item));
const isEvenList = list => list.every(item => isEven(item));

isOddList(list1); // false
isOddList(list2); // true
isOddList(list3); // false

isEvenList(list1); // false
isEvenList(list2); // false
isEvenList(list3); // true

// Lists Judgement
const isOddListExist = (...lists) => lists.some(list => isOddList(list));
const isEvenListExist = (...lists) => lists.some(list => isEvenList(list));

isOddListExist(list1, list2, list3); // true
isEvenListExist(list1, list2, list3); // true

/**
 * Currying
 */
const curryingJudgement = judgement => (...lists) => lists.some(list => judgement(list));
const curryingIsOddListExist = curryingJudgement(isOddList);
const curryingIsEvenListExist = curryingJudgement(isEvenList);

curryingIsOddListExist(list1, list2, list3); // true
curryingIsEvenListExist(list1, list2, list3); // true
