

const userInput1 = prompt('Enter number 1');
const userInput2 = prompt('Enter number 2');

const number1 = Number(userInput1);
const number2 = Number(userInput2);

if (number1 > 0 && number2 > 0) {
    alert('Обидва числа позитивні');
} else if (number1 < 0 && number2 < 0) {
    alert('Обидва числа негативні');
} else if ((number1 > 0 && number2 < 0) || (number1 < 0 && number2 > 0)) {
    alert('Числа різні за знаком');
} else {
    alert('Принаймні одне з чисел — нуль');
}
