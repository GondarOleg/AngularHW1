//Решение видел

function calc(str) {
    return /^(?:\d+([*+-]|\/(?!0)))+\d+$/.test(str) ? eval(str): false;
}

console.log(calc("5+2"));
console.log(calc("5-2"));
console.log(calc("5*2"));
console.log(calc("5/2"));