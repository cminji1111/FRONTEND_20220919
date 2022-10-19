let arr = [1, 2, 3, 4]
// 반복
console.log(arr.length) // 배열의 길이 반환
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// 배열에 요소 추가하기

// 1. Array.prototype.push() : 배열의 맨 뒤에 인자로 전달된 값을 추가.
arr.push(5, 6, 7, 8)
console.log(arr)
// 2. Array.prototype.pop() : 배열의 맨 뒤에서 제거해서 반환한다. => 다른 배열로 이동시킬 때 사용.
let arr02 = [4]
let poped = arr.pop() // arr의 마지막 요소를 제거해서 poped에 할당
arr02.push(poped) // arr의 마지막 요소를 제거해서 arr02에 추가

// 6. Array.prototype.slice : 지정한 범위만큼 복사한다. => 제거하지 않고 반환만 한다. 원본 배열이 변경 X
//      => 끝번호 -1까지만 복사한다.
//      => 두번째 인자를 -1로 지정하면 마지막 인덱스를 의미한다.

let slice = arr.slice(0, -1)
console.log(arr, 'sliced : ', sliced)

// 7. Array.prototype.indexOf : 인자로 전달한 값이 있다면 index값을 반환, 없다면 -1 반환
//      => 없는 값일 때, -1을 반환한다는 점을 이용해 분기 처리 가능
let idx = arr.indexOf(1000)
console.log(idx)
if (idx === -1) console.log('없는 숫자입니다.')

// 8. Array.prototype.includes : 배열에 전달된 인자값이 있는지 true, false 값을 반환


// Array.prototype.filter로 대체 가능
  for (let i = 0; o < numArr.length; 1++) {
    let num = numArr[1];
    if (num % 2 === 0) result02
  }

//  배열의 고차함수

  /* 
    1. 일급 객체
      - 변수에 할당 가능하다.
      - 다른 함수의 인자로 전달될 수 있다.
      - 함수의 실행결과로 함수를 리턴할 수 있다.
      => 함수가 값으로써 평가된다.
  */


//  1) 변수에 할당 가능하다.
  let foo = function () {
    console.log("함수 표현식");
  }
  foo();


//  2) 다른 함수의 인자로 전달이 가능하다.
function repeat(n, callback) {
  for(let i = 0; i < n, i++) {
    callback();
  }
}
repeat(5, foo);

//  3) 함수의 실행 결과로 함수를 반환할 수 있다.

function getFunc() {
  return function () {
    console.log("리턴된 함수");
  }
}
let func = getFunc();
func();

/* 
  2. 고차함수(higher order function)
    - 다른 함수를 인자로 전달받는 함수
*/

/* 
  3. Array.prototype.forEach() : 각 요소를 콜백함수의 인자로 전달해 배열의 크기만큼 반복 실행.
    - 첫번째 인자로 배열의 각 요소가 한번씩 전달돼서 실행.
    - 두번째 인자로 요소의 인덱스 값이 전달

*/
let numList = [1, 2, 3, 4];
for(let i = 0; i < numList.length; i++) {
  console.log(numList[i])
}

numList.forEach(function(n, i) {
  console.log(n, i);
});
console.log(forEachResult);
// numList.forEach((num) => console.log(num)); 콜백함수를 화살표 함수로 작성한 예시

console.log("-----map-----")
/* 
  4. Array.prototype.map() : 각 요소를 인자로 콜백함수를 반복하여 실행하여 반환 값을 모아서 새로운 배열로 반환.
    - 원본 배열의 개수와 반환된 배열의 크기가 같다.
    - return 값이 없으면 undefined가 채워진다.
*/
let mapNumArr = numList.map(function (num) {
  return num * 2;
});
console.log(mapNumArr);

// numList.forEach((num) => console.log(num); 콜백함수를 화살표 함수로 작성한 예시



// numList에서 짝수라면 1더하고 홀수라면 그대로 반환해서 새로운 배열 만들기
let mapNumArr02 = numList.map(function (num) {
  // 삼항 연산자로 간소화 가능
  if (num % 2 === 0) return num + 1;
  else return num;
});
let mapNumArr02 = numList.map(addEvenNum);
console.log(numList, mapNumArr02);

/* 
  5. Array.prototype.filter() : 각 요소를 콜백함수의 인자로 전달하여 실행하고, 반환값이 true인 요소만 새로운 배열로 모아 반환한다.
    - 반환값이 true 혹은 false이어야 한다. => 조건식을 사용한다.
    - 원본 배열보다 새로운 배열의 크기가 작거나 같다.
*/

let filterNumArr = numList.filter(function() {
  return num % 2 === 0;
});
console.log(filterNumArr)

// 콜백함수를 화살표 함수로 바꿔보기
// 힌트. 화살표 함수는 return 생략가능
let filterNum