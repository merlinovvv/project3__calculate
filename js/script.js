var operationButtons = document.getElementsByClassName('btn__operation');

var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');

function makeOperation(operation) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if (operation === '+') {
        var result = number1 + number2;
    }
    else if (operation === '-') {
        var result = number1 - number2;
    }
    else if (operation === '*') {
        var result = number1 * number2;
    }
    else if (operation === '/') {
        var result = number1 / number2;
    }
    else window.alert('Invalid operation');
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (let index = 0; index < operationButtons.length; index++) {
    operationButtons[index].addEventListener('click', onOperationButtonClick);
}