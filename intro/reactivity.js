let div = document.querySelector("#app");

let viewModel = {};

function init() {
    Object.defineProperty(viewModel, "str", {
        // 속성에 접근했을때
        get: function (value) {
        },
        // 속성에 값을 할당했을떄의 동작을 정의
        set: function (value) {
            render(value)
        }
    })

    function render(value) {
        div.textContent = value;

    }

}

init();