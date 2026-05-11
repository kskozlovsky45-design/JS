let a = Math.floor(Math.random() * 100);
let result;

let temp;
if (a > 10) {
    temp = a;
} else {
    temp = a * 2;
}

if (temp > 5) {
    result = 2 * a + 1;
} else {

    let inner;
    if (a < 3) {
        inner = 1;
    } else {
        inner = 2 * (a - 2);
    }
    if (inner > 4) {
        result = 5;
    } else {
        if (a % 2 === 0) {
            result = 6;
        } else {
            result = 7;
        }
    }
}

console.log(`a = ${a}, результат = ${result}`);
