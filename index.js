// function CinemaTicket(title, price, line, seat) {
//   this.title = title;
//   this.price = price;
//   this.line = line;
//   this.seat = seat;
// }
// // CinemaTicket.prototype.getInfo = function () {
// //     return` Ticket for "${this.title}" ( seat ${this.line} / ${this.seat}) coast ${this.price}`;
// //
// function CinemaTicketPrototype(){
//   this.getInfo = function () {
//     return` Ticket for "${this.title}" ( seat ${this.line} / ${this.seat}) coast ${this.price}`;
//   };
// }
// CinemaTicket.prototype = new CinemaTicketPrototype()
// const ticket1 = new CinemaTicket("Lila and Stich", 95, 4, 12);
// console.log(ticket1.getInfo());

// function Accaunt(owner , balance){
//   this.owner = owner;
//   this.balance = balance;
// }
// Accaunt.prototype.getInfo = function (){
//   return `${this.owner}'s balance = ${this.balance}`
// }
// Accaunt.prototype.deposite = function(cash){
//   this.balance += cash
// }
// Accaunt.prototype.withdraw = function(cash){
//   this.balance -= cash
// }
// const accaunt1 = new Accaunt("Bob" , 100)
// accaunt1.deposite(20)
// accaunt1.withdraw(50)
// console.log(accaunt1.getInfo());
// const accaunt2 = new Accaunt ("Maks" , 200)
// console.log(accaunt1.deposite === accaunt2.deposite);
// const grandParent = {
//   lastname: "Nahiba",
// };
// const father = {
//   name: "Oleh",
// };

// father.__proto__ = grandParent;
// console.log(father.lastname);
// const son ={
//   __proto__:father
// }
// console.log(son.lastname);
const vehicle={
  run(){
    return "go!"
  }
}
const auto = {
  wheels: 4,
  __proto__:vehicle
}
console.log(auto.run());
const bmw ={
  name:"BMW",
  __proto__:auto,
  run(){
    return "fast go!"
  }
}
console.log(bmw.run());
console.log(bmw.wheels);
