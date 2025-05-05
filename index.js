// const length = prompt("Введіть довжину прямокутника:");
// const width = prompt("Введіть ширину прямокутника:");
// const conf = confirm("Обчислити площу?");
// if (conf) {
//   const area = length * width;

//   alert("Площа: " + area);
// } else {
//   alert("Розрахунок скасовано.");
// }

let r = prompt("Введіть радіус кола:");

if (confirm("Обчислити площу та довжину кола?")) {
    let area = 3.14 * r * r;
    let circumference = 2 * 3.14 * r;
    alert("Площа: " + area + "\nДовжина кола: " + circumference);
}
else {
      alert("Розрахунок скасовано.");
    }

