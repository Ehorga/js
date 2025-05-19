 const userAgeInput = prompt('Enter your age'); 
const startSchoolAge = 6;
const endSchoolAge = 17;

const userAge = Number(userAgeInput);

if (userAge >= startSchoolAge && userAge <= endSchoolAge) {
    alert('school'); 
} else {
    alert('not school'); 
}
