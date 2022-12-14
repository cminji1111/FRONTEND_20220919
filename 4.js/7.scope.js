/* 
    스코프(scope)
        - 식별자가 유효한 범위
*/

// 전역 스코프 : 어디서든 접근가능한 영역
var a = 10
var b = 20

function changeNum() {
  // 지역스코프 : 지역 내에서만 유효한 변수
  // 동일한 이름의 식별자를 참조하면 => 지역내에서 먼저 찾고 없으면 밖(상위)에서 찾는다.

  var a = 20
  b = 30

  let name = 'minji'
}
changeNum()

console.log(a)
console.log(b)

/* 
    var 키워드의 문제점
    1. 중복 선언 가능
    2. 선언 이전에 참조를 하더라도 오류가 발생하지 않는다. => 런타임(실행중)에 문제가 발생하면 고치기 번거롭다.
    3. 함수 레벨 스코프만 지원 => 블록 레벨 스코프 지원 X
*/

var a = 100
console.log('a : ', a)

// c 변수 선언 이전에 참조
console.log(c)
var c = 0

// var 키워드는 블록 레벨 스코프를 지원하지 않는다.
{
  var a = 40
}

console.log('a : ', a)

/* 
    let . const : 위에서 언급한 세가지 문제를 해결한다.
*/

let num = 2
// let num = 3; 중복선언 허용하지 않는다.

const PI = 3.14;
// PI = 3; const(상수)는 할당이 안된다. 선언과 동시에 초기화를 해야한다.

const NUM = 1; // 선언과 동시에 초기화를 해야한다.

{
  // 블록 레벨 스코프를 지원
  let num = 3 // 지역변수
}

console.log(num)

// 선언 이전에 참조하는 것이 불가능하다. => 선언과 초기화 따로 진행(TDZ : Temporary Dead Zone)
// console.log(str); 선언 이전에 참조 오류
let str = 'Hello'

function sum(a, b) {
  let num = 1
}

function sub(a, b) {
  let num = 10
  console.log(num)
}

sub() {

// 스코프 체인
function outer() {
    // 상위 스코프
    let num = 2;
}


   // outer 함수 내에서만 호출 가능
function inner() {
    // 하위 스코프
    let num = 3
    console.log(num)
}

inner()
}
