let container = document.getElementById('container')

/* 
    DOM 노드 생성
        - 요소 노드, 텍스트 노드, 속성 노드 등 다양한 노드를 생성해서 동적으로 추가를 한다.
*/

let divElem = document.createElement('div')
let textNode = document.createTextNode('텍스트')

// 상위 노드에 자식 노드 첨부하기
divElem.appendChild(textNode)
divElem.addEventListener('click', function () {
  alert('click')
})
container.append(divElem)


let numList = document.getElementById("numList")

for(let i=1; i <= 10; ++i) {
    let liElem = document.createElement("li");
    let numText = document.createTextNode(i);
}

let classAttr = document.createAttribute("class"); // 속성 생성
// classAttr.value = "box"; //속성값 설정

// liElem.setAttributeNode(classAttr); // 속성 노드 첨부
// liElem.appendChild(numText);
// numList.append(liElem);

// 요소가 가지고 있는 텍스트들을 innerText, innerHTML 프로퍼티로 가지고 있다.
// => 다른 값을 할당하면 다시 렌더링이 일어난다.
// => 산술 할당 연산자를 통해 기존 값들을 유지한 상태에서 내용을 추가할 수 있다.
// => innerHTML은 태그나 속성들을 파싱한다.
// => 안의 내용을 다 지운 다음에 렌더링이 일어난다 => 이벤트 바인딩 되어있으면 지워진다.

console.log(container.innerHTML);
// container.innerHTML += `<div class="box">innerText</div>`

// innerHTML 성능 개선 : 하나의 문자열로 다 더해놓은 뒤, 문자열 한번만 innerHTML에 할당 (꿀팁!!)
let str = "";
for(let i =1; i <= 10, ++i) {
    console.log(numList.innerHTML);
    numList.innerHTML = `<li>${1}</li>`
}

numList.innerHTML += str;