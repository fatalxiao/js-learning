/**
 * Common Usage
 */
const on = (element, event, handler) => {
    if (document.addEventListener) {
        element.addEventListener(event, handler, false);
    } else {
        element.attachEvent('on' + event, handler);
    }
};

on(document, 'scroll', e => console.log(e));



/**
 * Currying
 */
const curryingOn = () => {
    if (document.addEventListener) {
        return (element, event, handler) => element.addEventListener(event, handler, false);
    } else {
        return (element, event, handler) => element.attachEvent('on' + event, handler);
    }
};

const eventOn = curryingOn();
eventOn(document, 'scroll', e => console.log(e));
