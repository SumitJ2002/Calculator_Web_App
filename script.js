let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentExpression += operator;
    updateDisplay();
}

function calculate() {
    try {
        currentExpression = eval(currentExpression).toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
    }
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentExpression;
}
