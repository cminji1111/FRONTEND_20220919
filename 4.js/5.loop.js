/*
    for(초기값 변수; 조건식; 증감식)
    조건식이 참이라면 코드블록을 실행하고 증감식을 실행한다. => 반복
*/

for (var i = 0; i < 5; ++i) {
  console.log(`i : ${i}번째 실행`)
  for (var j = 0; j < 3; j++) {
    console.log(`j : ${j}번째 실행`)
  }
}

/*
    문제 구구단 출력해보기
    2 x 3 = 4
*/

var b = 'number'
for (var b = 2; b < 10; b++) {
  for (var a = 1; a < 10; a++) {
    console.log(`b * ${a} = ${b * a}`)
  }
}

for (var i = 2; i <= 9; ++i) {
  console.log(i + '단 시작')
  for (var j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
}

/*
    while : () 안의 조건식이 true라면 반복 실행 => false일 때까지 실행
    반복횟수가 불명확할 때 사용한다. => 사용자의 동작에 따라 반복문을 멈춘다.
    
    while문을 멈추는 방법 2가지
    1. 밖에 변수에 true를 할당한 후 특정 조건에서 false로 변경
    2. 특정 조건에서 break를 통해 반복문 탈출
*/

// var i = 0
// while (true) {
//   console.log('실행')
//   if (i >= 10) break
//   i++
// }

var i = 0
while (true) {
  var value = prompt('숫자를 입력해주세요')
  console.log(value)
}

var value = prompt('숫자를 입력해주세요')
// if(typeof parseIntparseInt(value) ===

// console.log(typeof parseInt(value))

// do ~while : 코드블록 한번은 실행한 후 그 다음부터 조건 체크를 한다.
do {
  console.log('do while문 실행!')
} while (false)
