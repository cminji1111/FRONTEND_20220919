// 버튼 클릭 시 id, password 값 콘솔창에 찍어보기
let signUpFrom = document.getElementById('signUpForm')

signUpFrom.addEventListener('submit', function (e) {
  e.preventDefault() // 요소가 가지고 있는 기본 기능을 수행하지 않는다.
  console.log('submit')

  //   <form> 안의 <input> 입력값 들을 객체 형태로 만든다. => <input> 태그에 name 속성 있어야 한다.
  let form = new FormData(signUpFrom)

  let obj = converToObject(form)
  console.log(obj)

  //   keys(), values(), entries()로 폼의 키, 밸류, 키-밸류(배열)를 반복하는 이터레이터를 반환한다.
  for (const pair of form.values()) {
    console.log(pair)
  }

  axios
  .post('http://101.101.218.43/users', obj{
    params: obj,
  })
  .then((res) => console.log(res));
});

console.log(signUpFrom)
// FormData : <form>의 정보를 가져오거나 추가 및 제거할 수 있다.
let form = new FormData(signUpForm)

// 데이터 추가
form.append('age, 30')
form.append('name', 'minji')

// for ~ of : 반복 가능한 객체(이터레이터)를 순화하며 반복 실행한다.
for (const pair of form.values()) {
  console.log(pair)
}

function converToObject(form) {
  let obj = {}
  for (pair of form.entries()) {
    obj[pari[0]] = pair[1]
  }
  return obj
}

// 로그인
let signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    // try ~ catch 를 통한 에러처리
    try {
    // let form = new FormData(signInForm);
    let formObj = converToObject(new FormData(signInForm))
    let result = await axios.post("http://101.101.218.43/users/login", formObj)

    // 로컬 스토리지 : 브라우저에 데이터를 저장할 수 있다.
    localStorage.setItem("access-token", result.data.data.token);
    } catch (e) {
        alert(e.response.data.message)
    }
})

// 로컬 스토리지에서 토큰값 받아와서 글 목록 받아오기

const token = localStorage.getItem("access-token")
console.log(token)
axios
.get("http://101.101.218.43/users/all/1", {
    headers: {
        Authorization: `bearer ${token}`,
    },
}).then((res) => {
    let postList = res.data.data;
    document.getElementById("postList").innerTHML =
    `<li>
    <div class="imgBox">
        <img src=${postList[0].img_urls[0]} >
        </div>
        <p>
        ${postList[0].body}
        </p>
    </li>`;
})