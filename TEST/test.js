let container1 = document.querySelector('.container1')
let container2 = document.querySelectorAll('.container2 button')

let slideIdx = 0

container2.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    console.log('실행')
    slideIdx = idx
    container1.style.transform = `translateX(${slideIdx * -100}vw)`
  })
})
