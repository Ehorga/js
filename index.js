const userInput = "enter something enter";
console.log(userInput, userInput.length);
const word1 =
  userInput[0].toUpperCase() +
  userInput.slice(1, -1).toLowerCase() +
  userInput.at(-1).toUpperCase();
console.log(word1);
function checkSymbolInRow(str, symbol) {
  return str.includes(symbol);
}

console.log(checkSymbolInRow(userInput, "o"));
const countWord = userInput.split(" ").length;
console.log(countWord);
const arrayWord = userInput.split(" ");
const object = {};
for (let index = 0; index < arrayWord.length; index++) {
  const element = arrayWord[index];
  object[element] = element.length;
}
console.log(object);
