const operators = ['+', '-', '*', '/'];
const point = '.';
var screen = document.getElementById("screen");

document.getElementById("C").addEventListener("click", clearScreen);
document.getElementById("equals").addEventListener("click", evalResult);
var keys = document.getElementsByClassName("key");
for (var i = 0; i < keys.length; i++) {
    var element = keys[i];
    element.addEventListener("click", appendKeyPressed);
}

function clearScreen() {
    screen.innerHTML = "";
}

function appendKeyPressed(event) {
    var key = event.target;
    var value = key.innerHTML;
    var screenValue = screen.innerHTML;
    //Setting new value
    if (validateInput(value, screenValue)) {
        screen.innerHTML = screenValue + value
    }
}

function validateInput(input, screenValue) {
    var length = screenValue.length;
    if (length == 0 && (input == "*" || input == "/")) {
        return false;
    }
    var lastChar = screenValue[length - 1];
    return validateOperator(lastChar, input) && validatePoint(lastChar, input);
}

function evalResult() {
    var screenValue = screen.innerHTML;
    var result = eval(screenValue);
    screen.innerHTML = result;
}

function validateOperator(lastChar, input) {
    return !(isOperator(lastChar) && isOperator(input));
}

function isOperator(input) {
    var index = operators.indexOf(input);
    return (index != -1);
}

function validatePoint(lastChar, input) {
    return !(isPoint(lastChar) && isPoint(input));
}

function isPoint(input) {
    return input == point;
}