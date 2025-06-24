let firstNumber = '';
let secondNumber = '';
let operator = '';
let isDotPressedForFirst = false;
let isDotPressedForSecond = false;
let isSecondNumber = false;
let result; 

const screen = document.getElementById('screen-text');
const buttons = document.getElementById('buttons');

buttons.addEventListener('click', (event) => {
    const value = event.target.textContent;

    if (event.target.tagName !== 'BUTTON') {//If anything was clicked besides button element it returns, for example <a> tag.
        return;
    }

    if (!isNaN(value)) {//checks if the value is a number
        if (!isSecondNumber) {
            if (firstNumber.length >= 9) {
                screen.textContent = "Max digits: 9";
                return;
            }
            firstNumber += value;
            screen.textContent = firstNumber;
        } else {
            if (secondNumber.length >= 9) {
                screen.textContent = "Max digits: 9";
                return;
            }
            secondNumber += value;
            screen.textContent = secondNumber;
        }
    } else if (value === '.') {
        if (!isSecondNumber && !isDotPressedForFirst) {
            firstNumber += value;
            screen.textContent = firstNumber;
            isDotPressedForFirst = true;
        } else if (isSecondNumber && !isDotPressedForSecond) {
            secondNumber += value;
            screen.textContent = secondNumber;
            isDotPressedForSecond = true;
        }
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (firstNumber === '') {
            if (result) {
                firstNumber += result
            } else {
                screen.textContent = 'Put first number!'
                return;
            }
        }
        operator = value;
        isSecondNumber = true;
        screen.textContent = '';
    } else if (value === '=') {
        if (firstNumber === '' || secondNumber === '' || operator === '') {
            screen.textContent = 'Put numbers first!'
            return;
        }
        result = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
        screen.textContent = result;
        
        firstNumber = '';
        secondNumber = '';
        operator = '';
        isDotPressedForFirst = false;
        isDotPressedForSecond = false;
        isSecondNumber = false;
    } else if (value === 'C') {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        isSecondNumber = false;
        screen.textContent = '';
        isDotPressedForFirst = false;
        isDotPressedForSecond = false;
        result=''
    } else if (value === 'Del') {
        if (!isSecondNumber) {
            if (firstNumber.slice(-1) === '.') {
                isDotPressedForFirst = false;
            }
            firstNumber = firstNumber.slice(0, -1);
            screen.textContent = firstNumber;
        } else {
            if (secondNumber.slice(-1) === '.') {
                isDotPressedForSecond = false;
            }
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

