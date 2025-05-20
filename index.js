// const inputNumber = prompt("enter number");
// const number = Number(inputNumber);
// if (!(number%2)) {
//     console.log("парне")
// } else {
//     console.log("не парне")
// }
// if (number%2 === 0) {
//     console.log("парне")
// } else {
//     console.log("не парне")
// }
// number%2 === 0?console.log("парне"):console.log("не парне")
// const answer = number%2 === 0?"парне":"не парне"
// console.log(answer)
// if (number % 3 === 0 || number % 4 === 0) {
//   console.log("win");
// } else {
//   console.log("lose");
// }
// const answer = number % 3 === 0 || number % 4 === 0 ? "win" : "lose";
// console.log(answer);
// if (number === 0) {
//     console.log("zero")
// }
// else if( number < 0){
//  console.log("negative")
// }
// else{
//     console.log("positive")
// }
// if (!number) {
//     console.log("zero")
// }
// else if( number < 0){
//  console.log("negative")
// }
// else{
//     console.log("positive")
// }
// if (number % 2 === 0 && number % 7 === 0) {
//   console.log("win");
// } else {
//   console.log("lose");
// }
//  console.log(number%2===0&&number%7===0?"win":"lose")
const inputWord = prompt("enter word")
if (inputWord) {
    console.log("thank you")
} else {
   console.log(":(") 
}
if (!inputWord) {
    console.log(":(")
} else {
   console.log("thank you") 
}
if (inputWord === "" || inputWord === null) {
    console.log(":(")
} else {
   console.log("thank you") 
}
const answer = inputWord ===""||inputWord === null?":(":"thank you"
console.log(answer);
