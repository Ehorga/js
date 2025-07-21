const number = 11111;
console.log(number, typeof number);

const numToStr = number.toString();
console.log(numToStr, typeof numToStr);

const arrStr = numToStr.split('');
console.log(arrStr, typeof arrStr);

const arrNums = arrStr.map(elem => Number(elem));
console.log(arrNums, typeof arrNums);

const summa = arrNums.reduce((acc, elem) => acc + elem, 0);
console.log(summa, typeof summa);
