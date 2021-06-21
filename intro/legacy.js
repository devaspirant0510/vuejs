let div = document.querySelector("#app");
let text = "hello world";
console.log(div);
// 선언한 변수로 querySelector 로 가져온 div 태그의 textContent 에 text 값 지정
div.textContent = text;

// text 변수만 바꾸면 화면에는 업데이트가 안됨
text = "byeWorld";
// 다시 querySelector 로 연결한  div 태그의 textContent 에 접근해서 바꿔야됨
div.textContent = text;

