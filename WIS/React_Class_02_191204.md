# React_02

/** @jsx virtualDOM */

Function virtualDOM (type(어떠한 종류의 가상돔의 타입, props(속성), ...child(해당하는 요소의 자식요소)) {

}



type(virtualDOM의 해당 요소의 타입)

props(virtualDOM의 해당 요소의 속성) 

...child(해당하는 요소의 자식요소)





JSX

> class => className
>
> img태그에서 alt 무조건!
>
> 변수 사용시 {} 중괄호 사용!
>
> 모든 속성들은 camelCase 사용!



리액트는 하나하나를 컴포넌트로 본다



상태 변화가 없는.. =  Stateless component

커스텀하는 컴포넌트는 무조건 대문자로 시작





componentDidMount  : 랜더함수가 실행 된 이후 실행되는 함수

setState : state안에 있는 상태를 변화시키고 싶으면 무조건 사용하는 함수! 객체를 받는다

​				: 비동기이므로 콜백을 받는다.



++this.state.counter = this.state.counter += this.state.counter + 1



리액트에서 이벤트발생시 이밴트 핸들러에 인수를 넣고 싶으면 () => function(val) 로....



bind 하는 경우는 setState 를 건들이는 경우에만 사용

setState가 상위 클래스에 정의되어있기 때문에...



최대한 함수정의를 사용.. 파라미터