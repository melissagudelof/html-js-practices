const operators = ['+', '-', '*', '/'];
const point = '.';
var screen = document.getElementById("screen");

function clearScreen() {
    screen.innerHTML = "";
}

function appendKeyPressed(key) {
    var value = key.innerHTML;
    var screenValue = screen.innerHTML;
    //Setting new value
    if (validateInput(value, screenValue)) {
        screen.innerHTML = screenValue + value
    }
}

function validateInput(input, screenValue) {
    var length = screenValue.length;
    //debugger;
    if (length == 0 && (input != "*" && input != "/")) {
        return true;
    }
    var lastChar = screenValue[length - 1];
    //TODO fix validations - if applied separately they work
    /*if (isOperator(lastChar) && isOperator(input)) {
        return false;
    } else {
        if (isPoint(lastChar) && isPoint(input)) {
            return false;
        } else {
            return true;
        }
    }*/
    return (!(isOperator(lastChar) && isOperator(input)) &&
        !(isPoint(lastChar) && isPoint(input)));
}

function evalResult() {
    var screenValue = screen.innerHTML;
    var result = eval(screenValue);
    screen.innerHTML = result;
}

function isOperator(input) {
    var index = operators.indexOf(input);
    return (index != -1);
}

function isPoint(input) {
    return input == point;
}