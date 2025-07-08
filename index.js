// const tasks =['clean room','water flowers','learn JS' ];
// const userAnswer= prompt("what want to do");
// if (tasks.includes(userAnswer)) {
//   const index = tasks.indexOf(userAnswer)
//   tasks.splice(index , 1)
// } else {
//   // tasks.unshift(userAnswer)
//   tasks.splice(0, 0 ,userAnswer)
// }
// console.log(tasks);
const numbers =[1,2,3,4,5,6,7,8];
// const first = numbers.shift();
// const last = numbers.pop();
// numbers.unshift(last);
// numbers.push(first)
// console.log(numbers);
// const third =numbers.splice(3,1).shift()
// numbers.push(third)
// console.log(numbers);
// console.log(third);
// const userNumber =prompt("enter number")
// const userIndex = prompt("enter index")
// numbers.splice(Number(userIndex)  , 0 , Number(userNumber))

numbers.splice(numbers.length-2,2 )

console.log(numbers);