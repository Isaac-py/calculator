let firstNumber = '';
let secondNumber = '';
let operator = '';
let isSecondNumber = false;
let result; 

const screen = document.getElementById('screen-text');
const buttons = document.getElementById('buttons');

buttons.addEventListener('click', (event) => {
    const value = event.target.textContent;

    if (event.target.tagName !== 'BUTTON') {//If anything was clicked besides button element it returns, for example <a> tag.
        return;
    }

    if (!isNaN(value) || value === '.') {//checks if the value is a number or a '.'
        if (!isSecondNumber) {
            firstNumber += value;
            screen.textContent = firstNumber;
        } else {
            secondNumber += value;
            screen.textContent = secondNumber;
        }
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (firstNumber === '') {
            if (result) {
                firstNumber += result
            } else {
                screen.textContent = 'Error: Please provide number first!'
                return;
            }
        }
        operator = value;
        isSecondNumber = true;
        screen.textContent = '';
    } else if (value === '=') {
        if (firstNumber === '' || secondNumber === '' || operator === '') {
            screen.textContent = 'Error: Please provide numbers and operation first!'
            return;
        }
        result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
        screen.textContent = result;
        
        firstNumber = '';
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

