

# React



### 1. async / await

>**async**
>
>AsyncFunction 객체를 반화하는 하나의 비동기 함수.
>
>비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, 암시적으로 **항상** Promise 객체를 사용하여 결과를 반환한다.



> **await**
>
> **Promise** 를 받아 처리하는 키워드. 
>
> await 을 사용하기 위해서는 await가 포함된 함수가 async 로 선언되어야 한다.

async 함수 내에서 await를 사용하여 코드를 마치 동기적으로 작성할 수 있다.



try / catch 를 쓰는 이유는 에러가 발생했을 때 catch 로 넘어가서 오류를 반환하고 다음 코드의 실행을 보장해주기 때문에 사용한다.

사용안했을 시 에러가 발생하면 에러를 반환하고 더 이상 코드가 진행되지 않는다.



<br />



### 2. HOCs : High Order Components (고차 컴포넌트)

고차 컴포넌트는 컴포넌트를 재사용하기 위한 리액트의 advanced technique 이다. 

React API의 한부분은 아니다.

구체적으로, HOCs는 컴포넌트를 인수로 받고 반환하는 함수이다.

컴포넌트가 props를 UI로 변환하는 반면에, 고차 컴포넌트는 컴포넌트를 다른 컴포넌트로 변환한다.



<br />



### 3. 비동기

for...Each문을 사용하면 코드 실행의 순서를 보장 받을 수 없다. 단, for...of 문이나 for문은 순서를 보장받는다.



<br />



### 4. state

상태가 변할 수 있는 state는 최상위 컴포넌트만 가질 수 있으며, 하위 컴포넌트는 props를 받아서 사용하며 state를 변경시킬 수 있다.



##### 4.1. State 업데이트는 비동기적일 수도 있다.

> setState() 호출을 단일 업데이트로 한꺼번에 처리할 수 있다.
>
> `this.props` 와 `this.state` 가 비동기적으로 업데이트 될 수 있기 때문에 그 다음의 state를 계산할 때 해당 값에 의존해서는 안된다.



##### 4.2. State 업데이트는 병합됩니다.

> setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합합니다.
>
> ~~~jsx
> constructor(props) {
> 	super(props);
> 	this.state ={
> 		post: [],
> 		comments: []
> 	}
> }
> 
> // 별도의 setState() 호출로 변수를 독립적으로 업데이트 할 수 있다.
> conponentDidMount() {
>   fetchPosts().then(response => {
>   	this.setState({
>       posts: response.posts //
>     });
>   });
> 
>   fetchComments().then(response => {
>     this.setState({
>       comments: response.comments //
>     });
>   });
> }
> ~~~



##### 4.3. 데이터는 아래로 흐른다.

> 부모 컴포넌트나 자식 컴포넌트 모두 특정 컴포넌트가 유상태인지 또는 무상태인지 알 수 없고, 그들이 함수나 클래스로 정의되었는지에 대해서 관심을 가질 필요가 없다.
>
> 이렇기 때문에 **state** 가 소유하고 설정한 컴포넌트 이외에는 어떠한 컴포넌트에도 접근할 수 없다.
>
> **컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달 할 수 있다.**



일반적으로 이를 '하향식' 또는 '단방향식' 데이터 흐름이라고 한다. 

모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 그 state로부터 파생된 UI 또는 데이터는 오직 트리구조에서 자신의 "아래"에 있는 컴포넌트에만 영향을 미친다.



<트리구조가 props들의 폭포라고 생각하면 컴포넌트의 state는 임의의 점에서 만나지만 동시에 아래로 흐르는 부수적인 수원이라고 할 수 있다>



<br />



### 5. npm 모듈

> **lodash** : 기능적 프로그래밍 패터다임을 사용하여 기능을 제공하는 JavaScript 라이브러리
>
> **react-infinite-scroller** : 무한 스크롤러
>
> **uuid** : 범용고유식별자, 중복없는 ID값을 생성

