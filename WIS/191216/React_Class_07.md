<img src="/Users/kwansikkim/Downloads/react.png" style="zoom:50%;" />

# [React] 19.12.16

<br />



## Redux

오픈소스 자바스크립트 라이브러리

애플리케이션 상태를 관리하기 위해 디자인됨

Router 를 도입하는 순간 최상위 컴포넌트가 없어져서 각각의 컴포넌트에 state를 저장할 수 없기 때문에 최상위 상태 저장소인 Redux 가 필요하게 된다.

- complex data flows 
- Inter-component communication
- Non heierarchical data
- many actions
- same data used in multiple 



리덕스의 목표 : 데이터의 흐름을 예측할 수 있어야 해서

ACTIONS

> JSON 객체 ( store에 대해서 ~한 액션을 해달라고 하는 요청 )
>
> 객체로 표현

REDUCERS

> 기존 데이터에 대해서 받아서 action 요청을 받아 가공해서 새로운 데이터를 반환
>
> 모든 함수가 순수함수로서 작동하게 하기 위해서

STORE

>단일 저장소



기존 state에 덮어 쓸수가 없다. 

Redux Reducer 

> "state is read-only"! 
>
> "changes are made with pure functions"
>
> 순수함수에서의 파라미터를 제외한 모든 변수 = side effects
>
> All reducers are called on each dispatch
>
> dispatch ( action의 요청을 reducers 에게 **전달**)

Redux Store

> single soure of truth
>
> Dispatch, subscribe, getState, replaceReducer
>
> to change store, return a new object
>
> 무조건 새로운 객체를 만들어서 return...!! 상태 변화를 감지할 수 있는 효율적인 방법...!
>
> ~~~jsx
> return ({
> 	...state,
> 	query: adjalksdjl
> })
> 
> // 이렇게 state를 직접적으로 접근을 하면 X
> state.query = djksdjks
> ~~~
>
> Object.assign()
>
> 

---

react에서 redux가 정의되어야하는 곳에 작성