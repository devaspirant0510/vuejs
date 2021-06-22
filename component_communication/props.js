Vue.component(
    "app-global",{
        template:"<p>hello</p>"
    }
)
// props 는 상위 컴포넌트에서 하위컴포넌트로 데이터 전달
// 상위 컴포넌트에서 값이 바뀌면 연결된 하위컴포넌트의 값도 같이 바뀜

// 자식컴포넌트의 appHeader 부분
let appHeader = {
    // template 에 props_data 를 넣으면 상위컴포넌트에서 데이터가 바뀔때마다 동적으로 업데이트 됨
    template:"<h1>{{props_data}}</h1>",
    // props 데이터의 이름
    props:['props_data']
}

let appContent = {
    template:"<div>{{number_data}}</div>",
    props:['number_data']
}
const vm = new Vue({
    el:"#app",
    components:{
        "app-header":appHeader,
        "app-content":appContent,
        "app-footer":{
            template:"<footer>footer</footer>"
        }
    },data:{
        message:"props example",
        num:10
    }

})