let headerElem = document.getElementById('header')
let navItemList = document.querySelectorAll('#gnbList li a')
let gnbListElem = document.getElementById('gnbList')

console.log(navItemList)

let currScroll = window.scrollY
console.log(currScroll)

window.addEventListener('scroll', (e) => {
  console.log('실행')
  //   scroll 내려가면 active 클래스 지우기
  if (currScroll < scrollY) {
    headerElem.classList.remove('onTop')
    headerElem.classList.remove('active')
  }
  //   scroll 올라가면 active 클래스 추가하기
  else console.log('스크린 올림')

  if (scrollY === 0) headerElem.style.borderBottom = 'none'
  currScroll = screenY
})

// window.addEventListener('wheel', function (e) {
//     console.log(e.deltaY) // 휠을 내리면 양수, 올리면 음수
//     if (e.deltaY > 0) console.log('내림')
//     else console.log('올림')
// })

// navItemList.forEach((item) => {
//   item.addEventListener('mouseenter', () => {
//     navItemList.forEach((depth) => {
//       if (item === depth) depth.classList.add('active')
//       else depth.classList.remove('active')
//     })
//   })
// })

// item.addEventListener(('mouseleave', () => {
//   navItemList.forEach((depth) => {
//     depth.classList.add('active');
//   });
// });

gnbListElem.addEventListener('mouseover', function (e) {
  /* 
  e.target : 이벤트가 발생한 요소
  e.currentTarget : 이벤트가 바인딩된 요소
*/
  if (e.target.matches('#gnbList > li > a')) {
    navItemList.forEach((item) => {
      if (e.target === item) item.classList.add('active')
      else item.classList.remove('active')
    })
  }
})

gnbListElem.addEventListener('mouseleave', function () {
  navItemList.forEach((item) => {
    item.classList.add('active')
  })
})

gnbListElem.addEventListener('click', function (e) {
  // depth01 클릭시에만 동작.
  if (e.target.matches('#gnbList > li > a')) {
    // a 태그 클릭 시 상위 노트(li) 안에 .depth02 요소 있는지 확인
    if (e.target.parentNode.querySelector('.depth02')) {
      // null, undefined는 false처럼 작동한다.
      e.proventDefault() // 요소의 기본 기능을 실행하지 않는다.
      let depth01List = gnbListElem.querySelectorAll('#gnbList li')
      depth01List.forEach((depth) => {
        depth.classList.remove('on')
      })
      // 내가 클릭 li
      e.target.parentNode.classList.add('on')
    }
  }
})
