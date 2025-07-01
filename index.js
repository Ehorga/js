// Порождаем пустой объект
const obj = {};
console.log(obj);


function User(name, age, isMale) {
  this.name = name;
  this.age = age;
  this.isMale = isMale;
}


const UserPrototype = {
  getInfo() {
    return `${this.name} is ${this.age} years old`;
  }
};


User.prototype = UserPrototype;


const user1 = new User('Alex', 20, true);
console.log(user1);
console.log(user1.getInfo()); 

const user2 = new User('Maria', 23, false);
console.log(user2);
console.log(user2.getInfo()); 
