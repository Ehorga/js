function Phone(brand, model, price) {
  this.brand = brand;
  this.price = price;
  this.model = model;
  this.getDetaiels = function() {
    return `${this.brand}, ${this.model}, ${this.price}`;
  };
}


const phone1 = new Phone('Google', 'mm', 51000);
console.log(phone1.getDetaiels());

const phone2 = new Phone('Sony', 'xp', 16000);
console.log(phone2.getDetaiels());
