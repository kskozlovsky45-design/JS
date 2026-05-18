function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    let result = "";

    switch (true) {
        case a > 10:
            result += "a больше чем 10, ";
            break;
        default:
            result += "a меньше или равно 10, ";
            if (a === 5) result += "особый случай, ";
    }

    switch (a) {
        case 15:
            result += "но a не равно 15, ";
            break;
    }

    switch (true) {
        case a > 5:
            result += "a больше чем 5, ";
            break;
        default:
            result += "a меньше или равно 5, ";
    }

    switch (a % 2) {
        case 0:
            result += "a четное";
            break;
        default:
            result += "a нечетное";
    }

    console.log(result);
}
