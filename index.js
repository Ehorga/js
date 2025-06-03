// const userNumber = prompt("enter your number");
// let number = Number(userNumber);
// let sign = prompt("enter + or -");
// while (sign !== null) {
//   switch (sign) {
//     case "+":
//       number++;
//       break;
//     case "-":
//       number--;
//       break;
//     default:
//       console.log("atention");

//       break;
//   }
//   sign = prompt("enter + or -");
// }
// console.log(number);
//  let score = 0
// while (score < 3) {
//     const userNumber = prompt("enter your number");
//     let number = Number(userNumber);
//     if (number%7 === 0) {
//         score++
//     }

// }
// console.log(score);
// for (let i = 3; i <= 9; i++) {
//     console.log(i, "->" , i*i);

// }
// for (let i = 30; i > 10; i--) {
//   if (i % 6 === 0) {
//     console.log(i);
//   }
// }
//  for (let i = 30; i > 10; i--) {
//   if (i % 6 !== 0) {
//     continue;
//   }
//   console.log(i);
// }
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log("***");
  } else if (i % 6 === 0) {
    console.log("$$$");
  } else {
    console.log(i);
  }
}
