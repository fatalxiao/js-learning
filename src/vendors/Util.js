function enumerateValue(enumerate) {
    return Object.keys(enumerate).map(key => enumerate[key]);
}

function delay(time) {
    return new Promise(resolve => setTimeout(() => resolve(), time));
}

export default {
    enumerateValue,
    delay
};
