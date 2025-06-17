function translateKmToMeter(numberKm) {
  const meter = numberKm * 1000;
  return meter;
}
const result = translateKmToMeter(7);
// console.log(result);
// console.log(translateKmToMeter(5));
function isFreeze(temp) {
  if (temp < 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isFreeze(-4));
function isFreezing(temp) {
  return temp < 0;
}
// console.log(isFreezing(-4));

function checkThreeNumberEqual(number1, number2, number3) {
  return number1 === number2 && number2 === number3;
}
// console.log(checkThreeNumberEqual(2, 3, 3));
function checkThreeNumberEqualTwo(number1, number2, number3) {
  if (number1 === number2 && number2 === number3) {
    return "equal";
  } else {
    return " not equal";
  }
}
// console.log(checkThreeNumberEqualTwo(3, 3, 3));
function checkThreeNumberEqualThree(number1, number2, number3) {
  return number1 === number2 && number2 === number3 ? "equal" : "not equal";
}
// console.log(checkThreeNumberEqualThree(3, 3, 3));
function checkDay (number1){
    return number1 === 6 || number1 ===7? "weekend":"workday"
}
// console.log(checkDay(5));
function whichPartDay(number1) {
    if (number1 >= 6 && number1 <12) {
        return "morgen"
    } else if (number1 >= 12 && number1 < 18) {
        return "tag"
     } else if( number1 >=18 && number1 <22) {
        return "abend"
    } else if( number1 >= 0 && number1 < 6 || number1 >= 22 && number1 < 24) {
        return "night"
    }else {
        return "wrong data"
        console.log(34);
        
    }
}
console.log(whichPartDay(67));
function checkDrive(age) {
    return age>=14
}
console.log(checkDrive(13));
