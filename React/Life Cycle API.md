![](https://user-images.githubusercontent.com/37237125/71223919-78237b80-2318-11ea-9538-0408bba178f6.png)

# React Life Cycle

<br />

React 의 Components 는 생명주기를 갖는다. 생명주기란 Components가 생성되어 사용되고 소멸되기까지의 일련의 과정을 말합니다. 

Life Cycle API 는 Components가  DOM 위에 생성되기 전 / 후 및 데이터가 변경되어 상태를 업데이트하기 전 / 후로 실행되는 메소드들입니다.

<br />

## Method

### 1. constructor

```jsx
constructor(props) {
	super(props);
}
```

> 생성자 메소드로서 컴포넌트가 처음 만들어질 때 실행됩니다.
>
> 이 메소드에서 기본 state를 설정할 수 있다.

### 2. componentWillMount

~~~jsx
conponentWillMount() {
	console.log('componentWillMount');
}
~~~

> 컴포넌트가 DOM 위에 그려지는 render 함수가 실행되기 전에 실행됩니다.

### 3. render

~~~jsx
render() {
	return (
		<div></div>
	);
}
~~~

> 컴포넌트 렌더링을 담당합니다.
>
> 

### 4.  componentDidMount

```jsx
componentDidMount() {
	console.log('componentDidMount');
}
```

> 컴포넌트가 처음으로 렌더링 된 이후에  실행됩니다.
>
> 이 안에서 다른 JavaScript 프레임워크를 연동하거나, setTimeout, setInterval 및 Ajax 처리 등을 넣습니다.

### 5. componentDidUpdate

```jsx
componentDidUpdate(prevProps, prevState, snapshot) {
  console.log('componentDidUpdate')
}
```

> state가 변경된 직후에 호출되어 실행됩니다. 최초 렌더링직후에는 호출되지 않습니다.
>
> 컴포넌트가 갱신되었을 때, DOM을 조작하기 위해서 사용하면 좋습니다.
>
> 변화에 대해서 모든 것을 감시하고 있기 때문에 조건문을 사용해서 특정한 변화에 대해서만 감시 할 수 있게 해야합니다. 안그러면 무한루프에 빠지게 됩니다.
>
> `getSnapshotBeforeUpdate()` 를 구현한다면, 해당 메소드가 반환하는 값을 3번째 인자인 `snapshot` 으로 넘겨집니다. 반환값이 없다는 undefined 값을 가집니다.

### 6. componentWillUnmount

```jsx
componentWillUnMount() {
	console.log('componentWillUnMount');
}
```

> 컴포넌트가 Mount가 해제되어제거되기(DOM에서 제거될 때) 직전에 호출되어 실행됩니다.
>
> 이 메서드 내에서 타이머제거, 네트워크 요청 취소, `componentDidMount`	 내에서 생성된 구독 해제 등 필요한 정리 작업을 실행하면 됩니다.  