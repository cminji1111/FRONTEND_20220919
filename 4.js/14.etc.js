// JS에서는 매개 변수와 인자의 개수가 달라도 오류가 발생하지 않는다.
function sum(a, b) {
    // 함수 내에서 arguments를 참조하면 전달받은 인자를 유사배열 형태로 반환한다.
    let argArr = Array.from(arguments) // 유사배열을 배열을 변환한다.
    argArr.reduce(function(acc,curr){
        return acc + curr
    })
    return a + b;
}

let result = sum(3, 2, 10)

console.log(result)


----

let copy = obj // 객체는 값이 아니라 참조를 복사한다.
// copy.age = 40

let copyObj = {...obj };
// 개체의 각 프로퍼티를 복사한 것이기 때문에 원본을 변경하지 않는다. => 중첩된 객체는 여전히 참조 복사다(얕은 복사)
copyObj.age = 50
console.log("copyObj : $s, obj : %s", copyObj, obj)

copyObj.inner.type = "parent"
console.log(copyObj.inner, obj.inner)

let copyObj02 = { ...obj, weight : 67, age : 40 } // 원본 객체의 프로퍼티를 변경하거나 새로운 프로퍼티를 추가하면서 복사한다.
console.log(copyObj02)

// 삼항 연산자 : 조건 ? true일 경우 : false일 경우;
// 조건에 따라 할당할 값이 다른 경우
let num = 4
let numType = num % 2 === 0 ? "짝수" : "홀수"
// if(num % 2 === 0) numType = "even"
// else numType = "odd"

console.log("numType : %s", numType);

/* 
    비구조화 할당
        1) 객체
            - {} 안에 변수명을 선언한다.
            - 선언하고자 하는 변수의 이름과 객체의 프로퍼티명이 같다면 한번에 할당할 수 있다.
            - 객체에 없는 프로퍼티를 작성하면 undefined가 할당된다.

        2) 배열
            - [] 안에 변수명을 선언한다.
            - 변수명은 마음대로 지을 수 있다.
            - 할당할 값을 인덱스로 구분한다.
*/
// let age = obj.age;
// let name = obj,name;
let {age, name, height, inner} = obj;

let userList = ["Minji", "jc"]
let [first, second] 
console.log(age, name, height, inner);