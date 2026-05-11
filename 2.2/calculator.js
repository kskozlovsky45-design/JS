var display = document.getElementById('display');
var historyBox = document.getElementById('historyBox');
var current = '';
var clearNext = false;

function updateDisplay() {
    if (current === '') display.value = '0';
    else display.value = current;
}

function addHistory(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    historyBox.appendChild(div);
    historyBox.scrollTop = historyBox.scrollHeight;
}

function evaluate() {
    var str = current;
    if (str.charAt(0) === '-') str = '0' + str;
    var numbers = [];
    var ops = [];
    var num = '';
    for (var i = 0; i < str.length; i++) {
        var ch = str.charAt(i);
        if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
            if (num !== '') numbers.push(parseFloat(num));
            ops.push(ch);
            num = '';
        } else {
            num = num + ch;
        }
    }
    if (num !== '') numbers.push(parseFloat(num));
    if (numbers.length === 0) return 'Error';
    var res = numbers[0];
    for (var i = 0; i < ops.length; i++) {
        var op = ops[i];
        var n = numbers[i+1];
        if (isNaN(n)) return 'Error';
        if (op === '+') res = res + n;
        else if (op === '-') res = res - n;
        else if (op === '*') res = res * n;
        else if (op === '/') {
            if (n === 0) return 'Error';
            res = res / n;
        } else return 'Error';
    }
    return res;
}

function onEqual() {
    if (current === '') return;
    var result = evaluate();
    addHistory(current + ' = ' + result);
    if (typeof result === 'number') {
        current = String(result);
        clearNext = true;
    } else {
        current = '';
        clearNext = false;
    }
    updateDisplay();
}

function onClear() {
    current = '';
    clearNext = false;
    updateDisplay();
}

function onDigit(d) {
    if (clearNext) {
        current = '';
        clearNext = false;
    }
    current = current + d;
    updateDisplay();
}

function onOperator(op) {
    if (clearNext) clearNext = false;
    if (current === '' && op === '-') {
        current = '-';
        updateDisplay();
    } else if (current !== '') {
        var last = current.charAt(current.length - 1);
        if (last === '+' || last === '-' || last === '*' || last === '/') {
            current = current.slice(0, -1) + op;
        } else {
            current = current + op;
        }
        updateDisplay();
    }
}

var digits = document.getElementsByClassName('digit');
for (var i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function() { onDigit(this.innerText); });
}
var operators = document.getElementsByClassName('operator');
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() { onOperator(this.innerText); });
}
document.getElementsByClassName('equals')[0].addEventListener('click', onEqual);
document.getElementsByClassName('clear')[0].addEventListener('click', onClear);