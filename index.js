// const wantedGift = prompt("Який ви хочете подарунок на день народження? ");
// const isYouSure = confirm("Чи впевнений ти, що хочеш саме " + wantedGift + '?');

// if (isYouSure) {
//     alert("Гарний вибір! Піду шукати тобі " + wantedGift + " до дня народження!");
// } else {
//     prompt("А ну давай по-впевненіше: ");
// }
if (confirm('USD to UAH?')) {
    let summUSD = prompt('Summa (USD): ');
    let courseUAH = prompt('Course (UAH): ');
    let result = summUSD * courseUAH;
    alert('It is ' + result + ' UAH');
} else {
    let summUAH = prompt('Summa (UAH): ');
    let courseUSD = prompt('Course (USD): ');
    let converted = summUAH / courseUSD;
    alert('It is ' + converted + ' USD');
}

