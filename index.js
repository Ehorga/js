const dayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const deleteDay1 = dayOfWeek.indexOf("Tuesday");
dayOfWeek.splice(deleteDay1, 2, 'Friday');

const deleteDay2 = dayOfWeek.indexOf("Monday");
dayOfWeek.splice(deleteDay2, 1, 'Saturday');

const deleteDay3 = dayOfWeek.indexOf("Thursday");
dayOfWeek.splice(deleteDay3, 1);

console.log(dayOfWeek);
console.log(dayOfWeek.indexOf("Thursday"));
