// 동기(Synchronous) : 코드를 완료한 뒤에 다음 코드를 실행
console.time("동기");
console.log("실행");
for (let i = 0; i < 10000, i++) {}
console.timeEnd("동기");
console.log("종료")

// 비동기(Asynchronous) : 코드가 완료되지 않아도 다음 코드를 실행한다.
//      => setTimeout, setInterval, Promise 등
//      => 이미지 불러오기, 서버에서 데이터 받아 오기 등
//      => 비동기 처리란 비동기 처리에 필요한 시간을 기다렸다가 결과를 가지고 처리

let num = 0;

setTimeout(function() {
    num = 10;
    addAndPrint(num)
}, 2000);

function addAndPrint(num) {
num++;
}

/* 
    Promise : resolve(성공), reject(실패)를 통해 비동기 처리를 할 수 있는 객체
        => resolve될 때까지 기다린 후에 then()의 콜백함수를 실행한다.
        => reject될 경우 catch()의 콜백함수를 실행한다.
*/

let promise = nes Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000)
})

promise
    .then((res) => {
        // 데이터를 받아온 후 화면에 출력
    console.log("result : ", res);
})
.catch((err) => {
    console.log("에러발생!", err)
})



let data = render(10);

// fetch() : 서버로부터 데이터를 받아오는 함수 => Promise를 반환한다.
//      => Promise의 결과가 json이라서 Body.json()을 통해 파싱하여 Promise를 반환한다.
//      => 결과적으로 them을 중첩해서 사용해야한다. => 가독성이 떨어질 수 있다. 

fetch("https://jsonplanceholder.typicode.com/posts/1").then((res) => {
    res.json().then((data) => console.log(data.title));
})

async function fetchData() {
    let result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await result.json();

    console.log(data);
}

async function fetchAxios() {
    fetchAxios.get()
}