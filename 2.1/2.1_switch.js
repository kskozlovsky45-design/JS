let a = Math.floor(Math.random() * 100);
let result;

// Вычисление для первого условия
let firstValue = (a > 10) ? a : a * 2;
let firstCondition = firstValue > 5;

switch (true) {
    case firstCondition:
        result = 2 * a + 1;
        break;
    default:
        // Вычисление вложенного условия
        let inner = (a < 3) ? 1 : 2 * (a - 2);
        let secondCondition = inner > 4;
        switch (true) {
            case secondCondition:
                result = 5;
                break;
            default:
                let evenCondition = (a % 2 === 0);
                result = evenCondition ? 6 : 7;
        }
}

console.log(`a = ${a}, результат = ${result}`);
