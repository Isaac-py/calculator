let total;
let num1;
let num2;

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

