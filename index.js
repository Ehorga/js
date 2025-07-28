class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logName() {
    console.log(this.name);
  }
}

const user = new User('Alex', 23);
console.log(user);
user.logName();
