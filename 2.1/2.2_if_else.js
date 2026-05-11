function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    let result = "";

    // 1. a > 10 
    if (a > 10) {
        result += "a больше чем 10,";
    } else {
        result += "a меньше или равно 10, ";
        if (a === 5) {
            result += "особый случай";
        }
    }

    // 2. a === 15 
    if (a === 15) {
        result += " но a не равно 15";
    }

    // 3. a > 5 
    if (a > 5) {
        result += " a больше чем 5,";
    } else {
        result += " a меньше или равно 5, ";
    }

    // 4. a % 2 
    if (a % 2 !== 0) {
        result += " a нечетное";
    } else {
        result += " a четное";
    }

    console.log(result);
}

manyChecks();