function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    let result = "";

    if (a > 10) {
        result += "a больше чем 10, ";
    } else {
        result += "a меньше или равно 10, ";
        if (a === 5) {
            result += "особый случай, ";
        }
    }

    if (a === 15) {
        result += "но a не равно 15, ";
    }

    if (a > 5) {
        result += "a больше чем 5, ";
    } else {
        result += "a меньше или равно 5, ";
    }

    if (a % 2 === 0) {
        result += "a четное";
    } else {
        result += "a нечетное";
    }

    console.log(result);
}
