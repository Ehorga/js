// const carMarks = ["Audi", "Bmw", "Reno"];
// const newCar = prompt("Enter new mark auto");
// if (carMarks.includes(newCar)) {
//   console.log("Така марка вже є");
// } else {
//   carMarks.forEach((elem, index) => {
//     console.log(index, "-", elem);
//   });
//   const pos = prompt("після якої позиції додати нову марку в масив?")
//   carMarks.splice(Number(pos) + 1 , 0,newCar)
// }
// carMarks.forEach((elem, index) => {
//     console.log(index, "-", elem);
//   });
const numbers = [1, 2, 3, 4, 5, 6];
// const moved =numbers.splice(1,1).pop()
// numbers.push(moved)
// console.log(numbers);
// let count = 0;
// numbers.forEach((elem, index) => {
//   if (elem % 3 === 0) {
//     count++;
//   }
// });
// console.log(count);
// numbers.forEach((elem ,index )=> {
//     if (elem % 2 !== 0) {
//         console.log(elem);

//     }
// })
// const newNumbers = numbers.map((elem, index) => {
//   return elem - 4;
// });
// console.log(newNumbers);
// const newNumbers = numbers.map((elem) => elem - 4);
// console.log(newNumbers);
const newNumbers = numbers.map((elem, index) =>
  elem % 2 === 0 ? elem + 7 : elem
);
console.log(newNumbers);
