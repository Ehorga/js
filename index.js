class Square {
  #side;

  constructor(side) {
    this.#side = side;
  }

  set side(value) {
    if (value <= 0) throw new Error("Сторона повинна бути додатним числом");
    this.#side = value;
  }

  get side() {
    return this.#side;
  }

  getArea() {
    return this.#side ** 2;
  }
}

const square = new Square(10);
console.log(square.side);
console.log(square.getArea());

square.side = 5;
console.log(square.side);
console.log(square.getArea());
