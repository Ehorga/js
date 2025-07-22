// rest
function summa(...args) {
  console.log(args); 
  return args.reduce((accumulator, elem) => accumulator + elem, 0);
}

console.log(summa(1)); 

const numbers = [1, 5, 9, 3, 1];

// spread
console.log(summa(...numbers)); 
