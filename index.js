class Rect {
    constructor(height , width){
        this.height = height;
        this.width = width;
    }
    getArea(){
        return this.width * this.height
    }
}
const rect1 =new Rect ( 10 ,20)
// console.log(rect1.getArea());
// console.log(rect1);
class Message {
    constructor(text){
        this.text =text;
    }
    uppercase(){
        return this.text.toUpperCase();
    }
    getLength(){
        return this.text.length;
    }
}
const message1 = new Message ("hello world")
// console.log(message1.uppercase());
// console.log(message1.getLength());
class Timer{
    constructor(seconds= 0){
  this.seconds =seconds;
    }
    tick(){
        this.seconds++
    }
    showSeconds(){
        return this.seconds;
    }
}
const timer = new Timer()
timer.tick()
// console.log(timer.showSeconds());
class Ticket {
    #price;
    constructor(price){
        this.price=price;
    }
    set price(value){
        if (typeof value !== "number"){
            throw new TypeError('price must be number')
        }
        if (value < 0){
            throw new RangeError( ' price mmust be positive')
        }
        this.#price=value
    }
    get price() {
        return this.#price
    }
}
// const ticket =new Ticket(-20)
// // console.log(ticket.price);
class Powerbank {
    #charge
    constructor(charge){
        this.charge=charge 
    }
    set charge (value){
        if (typeof value !== "number"){
            throw new TypeError (' charge must be number')
        }
        if(value <0){
            throw new RangeError ('value must be more than 0')
        }
        this.#charge = value
    }
    get charge(){
        return this.#charge
    }
}
const powerbank = new Powerbank(30)
console.log(powerbank.charge);
