function calc() {
    let s = parseInt(arguments[0], 10);
    for (let i = 1; i < arguments.length - 1; i += 2) {
        if (arguments[i] === '+') {
            s += parseInt(arguments[i + 1], 10);
        }
        if (arguments[i] === '-') {
            s -= parseInt(arguments[i + 1], 10);
        }
        if (arguments[i] === '*') {
            s *= parseInt(arguments[i + 1], 10);
        }
        if (arguments[i] === '/') {
            s /= parseInt(arguments[i + 1], 10);
        }

    }
    return s;
}

console.log(calc('2', '+', '2', '*', '2'))