let a = Math.floor(Math.random() * 100);
let result;

switch (true) {
    case (a > 10 ? a : a * 2) > 5:
        result = 2 * a + 1;
        break;
    default:
        let inner = (a < 3) ? 1 : 2 * (a - 2);
        switch (true) {
            case inner > 4:
                result = 5;
                break;
            default:
                result = (a % 2 === 0) ? 6 : 7;
        }
}

console.log(`a = ${a}, результат = ${result}`);