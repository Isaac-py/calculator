let firstNumber = '';
let secondNumber = '';
let operator = '';
let isSecondNumber = false;

const screen = document.getElementById('screen-text');
const buttons = document.getElementById('buttons');

buttons.addEventListener('click', (e) => {
    const value = e.target.textContent;

    if (e.target.tagName !== 'BUTTON') return;

    if (!isNaN(value) || value === '.') {
        if (!isSecondNumber) {
            firstNumber += value;
            screen.textContent = firstNumber;
        } else {
            secondNumber += value;
            screen.textContent = secondNumber;
        }
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (firstNumber === '') return;
        operator = value;
        isSecondNumber = true;
        screen.textContent = '';
    } else if (value === '=') {
        if (firstNumber === '' || secondNumber === '' || operator === '') return;
        const result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
        screen.textContent = result;
        
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
        isSecondNumber = false;
    } else if (value === 'C') {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        isSecondNumber = false;
        screen.textContent = '';
    } else if (value === 'Del') {
        if (!isSecondNumber) {
            firstNumber = firstNumber.slice(0, -1);
            screen.textContent = firstNumber;
        } else {
            secondNumber = secondNumber.slice(0, -1);
            screen.textContent = secondNumber;
        }
    }
});

const operate = function(num1, num2, operator) {
    if (operator === '+') {
        total = add(num1, num2);
    } else if (operator === '-') {
        total = subtract(num1, num2);
    } else if (operator === '/') {
        total = divide(num1, num2);
    } else if (operator === '*') {
        total = multiply(num1, num2);
    }
    return total;
}
const add = function(num1,num2) {
	return num1 + num2;;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const multiply = function(num1,num2) {
	return num1*num2;
};

const divide = function(num1, num2) {
	return num1/num2;
}

