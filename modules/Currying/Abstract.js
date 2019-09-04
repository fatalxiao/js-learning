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

isListOdd(list1);
isListOdd(list2);
isListOdd(list3);

isListEven(list1);
isListEven(list2);
isListEven(list3);

// Lists Judgement
const isListsOdd = (...lists) => lists.every(list => isListOdd(list));
const isListsEven = (...lists) => lists.every(list => isListEven(list));

isListsOdd(list1, list2, list3);
isListsEven(list1, list2, list3);

/**
 * Currying
 */
const curryingJudgement = judgement => (...lists) => lists.every(list => judgement(list));
const isListsOddCurrying = curryingJudgement(isListOdd);
const isListsEvenCurrying = curryingJudgement(isListEven);

isListsOddCurrying(list1, list2, list3);
isListsEvenCurrying(list1, list2, list3);
