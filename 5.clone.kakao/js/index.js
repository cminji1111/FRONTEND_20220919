let headerElem = document.getElementById('header')

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
