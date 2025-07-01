// Порождаем пустой объект
const obj = {};
console.log(obj);

// Функция-конструктор User
function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}

// Прототип с методом getInfo
const UserPrototype = {
  getInfo() {
    return `${this.name} is ${this.age} years old`;
  }
};

// Привязка прототипа к конструктору
User.prototype = UserPrototype;

// Создание экземпляров
const user1 = new User('Alex', 20, true);
console.log(user1);
console.log(user1.getInfo()); // Alex is 20 years old

const user2 = new User('Maria', 23, false);
console.log(user2);
console.log(user2.getInfo()); // Maria is 23 years old
