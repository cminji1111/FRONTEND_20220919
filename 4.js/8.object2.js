/* 
    클래스 : JS의 프로토타입을 이용한 문법적 설탕
*/

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

let user02 = new User('minji', 30)
console.log(user02)

function Car(speed) {
  this.speed = speed
  this.run = function (hour) {
    console.log(`${this.speed * hour}km 달렸습니다.`)
  }
}

/* 
    프로토타입 : 프로토타입은 객체에 프로포티와 메서드를 상속
        => 상속받는 객체에서 사용 가능 => 상속하는 객체에서는 사용 불가
*/

Car.prototype.sayHi = function () {
  console.log('안녕하세요')
}

let car03 = new Car(60)
let car04 = new Car(100)
car03.run(2)
car04.run(3)
car03.sayHi()
