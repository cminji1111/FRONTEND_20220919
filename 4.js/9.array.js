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
