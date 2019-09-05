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
const isListOdd = list => list.every(item => isOdd(item));
const isListEven = list => list.every(item => isEven(item));

isListOdd(list1); // false
isListOdd(list2); // true
isListOdd(list3); // false

isListEven(list1); // false
isListEven(list2); // false
isListEven(list3); // true

// Lists Judgement
const isListsOdd = (...lists) => lists.some(list => isListOdd(list));
const isListsEven = (...lists) => lists.some(list => isListEven(list));

isListsOdd(list1, list2, list3); // true
isListsEven(list1, list2, list3); // true

/**
 * Currying
 */
const curryingJudgement = judgement => (...lists) => lists.some(list => judgement(list));
const curryingIsListsOdd = curryingJudgement(isListOdd);
const curryingIsListsEven = curryingJudgement(isListEven);

curryingIsListsOdd(list1, list2, list3); // true
curryingIsListsEven(list1, list2, list3); // true
