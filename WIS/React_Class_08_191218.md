<img src="https://user-images.githubusercontent.com/37237125/70891079-da833000-2029-11ea-849b-72259d30370e.png" style="zoom:50%;" />

# [React]12.18

<br />



### reducer 의 필요성 

- 순수함수로서 state를 변경하기 위해서 우리가 기존에 작성했던 코드는 순수함수가 아닐 수도 있다. 외부변수에 의해서 state 의 내용이 우리가 예상했던 것대로 흘러가지 않을 수 있기 때문이다
- 따라서 순수함수로서 작성을 하여 불변성을 유지하기 위해서 reducer를 사용한다.

 

<br />

### Connect 함수

- Props 에 액션과 디스패치 함수를 넣어주려고 사용한다
- 함수는 리덕스 스토어안에 있는 상태를 props로 넣어줄수도있고, 액션을 디스패치하는 함수를 props 로 넣어 줄 수 있다.

> **bindActionCreators**
>
> : 자동으로 Action Create 함수에 Dispatch 가 감싸진 상태로 호출 할 수 있다.

> **mapStateToProps**
>
> : 컴포넌트에 props로 넣어줄 Redux Store에 관련된 함수

> **mapDispatchToProps**
>
> : 컴포넌트에 props로 넣어줄 액션을 디스패치하는 함수들에 관련된 함수





