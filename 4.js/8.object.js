/* 
    객체 : 여러 데이터를 키와 밸류 쌍으로 작성하는 형태
*/

let user = {
    age : 30
    name : "minji"
    Headers : 158
}

// 객체의 프로퍼티를 참조
console.log(user.age);

// 객체의 프로퍼티에 다른 값 할당
user.age = 31;
console.log(user.age)
user.nickname = "cocacola"; // 객체에 없는 프로퍼티 할당 가능

// 객체[속성명]의 형태로 참조
console.log(user["age"]);

// 객체에 없는 프로퍼티 참조하면 undefined 출력
console.log(user.weight)

// undefined에 프로퍼티 참조하면 오류 발생
console.log(user.weight.num)


/* 
    상수(const)로 객체 할당 시 특징
        - 객체를 상수에 할당해도 객체의 프로퍼티 값은 할당 가능하다. => 
*/

const a = {
    name: "Minji"
}
a.name = "Choi"
a.age = 30;
console.log(a.name)


/* 
    1. 메서드(Method)
        => 객체의 프로퍼티 값에 할당된 함수 => 그 객체만의 함수
*/

let user01 = {
    name: "minji"
    age: 30
    // greeting이라는 프로퍼티에 함수를 할당
    greeting: function () {
        console.log("안녕하세요!")
    }

    // 축약형 메서드
    hello() {
        console.log("Hello!")
    }
}

user01.greeting(
user01.hello()

/* 
    2. this
        - 메서드를 호출한 객체
*/

let rect = {
    width: 100
    height: 100
    getArea()
    console.log(this.width * this.height)
}

rect.getArea()
rect02.getArea()

/* 

palyer라는 객체를 만드는데

1. name 프로퍼티
2. "안녕하세요 ~ 입니다" 와 같이 자기 소개를 하는 메서드 만들기
3. 템플릿 리터럴 사용해서 만들기 => 문자열 안에 변수 포함시키는 문법
*/

let player = {
    name : "minji"
    greeting() {
        console.log(`안녕하세요 ${this.name}입니다.`)
    }
}
player.greeting();

/* 
    3. 메서드로 화살표 함수를 지정하면 this 바인딩이 안된다.
        => 최상위 객체를 가르키게 된다. => 브라우저 환경에서는 window 
*/


let car = {
    speed : 30
    run : (hour) => {
        console.log(`${this.speed * hour}km 달렸습니다.`)
    }
}
car.run(2);

let car02 = {
    speed: 60
}

