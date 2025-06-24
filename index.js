const pet = {
  name: "Ray",
  type: "cat",
  age: 2,
  isMale: true,
  getInfo() {
    return `my ${this.type}'s name is ${this.name}`;
  },
};

const laptop = {
  brand: "samsung",
  ram: 16,
  storage: 512,
  getInfo() {
    return ` Laptop ${this.brand} has total memory ${this.ram + this.storage}`;
  },
};
// console.log(laptop.getInfo());

function Circle(radius, PI = 3.14) {
  this.radius = radius;
  this.getPerimetr = function () {
    return 2 * PI * this.radius;
  };
  this.getArea = function () {
    return PI * this.radius * this.radius;
  };
}
// const circle1 = new Circle(10)
// console.log(circle1.getPerimetr(), circle1.getArea());
// const circle2 = new Circle(100)
// console.log(circle2.getPerimetr(), circle2.getArea());
function Phone(name, totalStorage, userStorage) {
  this.name = name;
  this.totalStorage = totalStorage;
  this.userStorage = userStorage;
  this.getFreeStoragePercent = function () {
    return 100 - (this.userStorage * 100) / this.totalStorage;
  };
}
// const phone1 = new Phone("iphone15", 340, 250);
// console.log(phone1.getFreeStoragePercent());
function CinemaTicket(title, price, line, seat) {
  this.title = title;
  this.price = price;
  this.line = line;
  this.seat = seat;
  this.getInfo = function () {
    return `Ticket for "${this.title}" ( seat ${this.line} / ${this.seat}) coast ${this.price}`;
  };
}
const ticket1 = new CinemaTicket("Lila and Stich", 95, 4, 12);
console.log(ticket1.getInfo());
