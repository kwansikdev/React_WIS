

# React



### 1. CSS

> CSS 를 import하면 그 jsx에서만 적용되는 것이 아닌 전역에 걸쳐서 적용이 된다. => styled css

 

이미지 등을 여러개 가져올 때 하나하나 import 하면 import가 많아지기 때문에 아래와 같이 작성을 할 수도 있다.

~~~jsx
// App.js
import { spinner, spinner2 } from './components/images' 

// es6 모듈 : 파일명을 은쓰고 폴더명만 써서 접근하려면 그 폴도 안에 index.js를 만들어서 

// components/images/index.js
module.exports = {
  spinner: require("url"), 
  spinner2: requeire("url")
} 


~~~



<br />



### 2. render

react는 **가독성**을 중요시하기 때문에 app.js에 DOM을 한눈에 볼수 있게 직접적으로 작성하지 않고 컴포넌트로 나누어서 작성하는 방법을 더 선호한다.

~~~jsx
// App.js
import React from 'react';

class App extends React.Component {

render() {
	return (
		<div>
			<Nav>
				<SearchBar />
			</Nav>
		</div>
	);	
}
}
~~~

~~~jsx
// Nav.jsx

import React from 'react';

const nav = props => {
	return (
		<div className="menu">
      <nav>
        <img src="" alt=""/>
      </nav>
      {props.children} // 
    </div>
	);
}
~~~





<br />



### 3. Lodash - (func) debounce

~~~jsx
__.debounce(func, [wait=0], [options={}])
~~~



debounce 함수는 debounce된 함수가 마지막으로 호출 된 후 대기 시간이 지나기 전까지 함수의 호출을 지연시키는 함수이다

debounced 된 함수는 지연된 함수를 호출을 취소하는 `cancle` 메소드와 즉시 함수를 호출하는 `flush` 메소드를 가지고 있다.

함수가 지연시간 이후에 leading edge 및/또는 trailing edge에서 호출되어져야 하는지를 가리키는 `options`을 제공하다.

`func` 함수는 debounced 함수 제공된 마지막 인자와 함께 호출되어진다. debounced 함수의 후속호출은 마지막 `func` 함수 호출 결과는 반환한다.



<br />



### 4. Ref

> Ref는 render 메서드에서 생성된 DOM 노드나 React 엘리먼트에 접근하는 방법을 제공합니다.

일반적으로 React의 데이터 플로우에서 props는 부모 컴포넌트가 자식과 상호작용 할 수 있는 유일한 수단입니다. 

자식을 수정하려면 새로운 props를 전달하여 자식을 다시 렌더링해야 하는데, 일반적인 데이터 플로우에서 벗어나 직접적으로 자식을 수정해야하는 경우가 생길수도 있습니다. 이 때 수정해야할 자식은 React 컴포넌트의 인스턴스일 수도 있다, DOM 엘리먼트일 수도 있다. 이럴 때 사용하는 것이 **Ref** 이다.



<br />

#### 4. 1. Ref 생성



##### 4.1.1 React.createRef() API

Ref는 `React.createRef()`를 통해 생성되고 `ref` 어트리뷰트를 통해 React 엘리먼트에 부착됩니다. 

보통, 컴포넌트의 인스턴스가 생성될 때 Ref를 프로퍼티로서 추가하고, 그럼으로서 컴포넌트의 인스턴스의 어느 곳에서도 Ref에 접근할 수 있게 합니다.

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

<br />

##### 4.1.2 Ref 접근하기

`render` 메서드 안에서 ref가 엘리먼트에게 전달되었을 때, 그 노드를 향한 참조는 ref의 `current` 어트리뷰트에 담기게 됩니다.

~~~jsx
const node = this.myRef.current;
~~~



ref 값은 노드의 유형의 따라 달라진다.

> `ref` 어트리뷰트가 HTML 엘리먼트에 쓰였다면, 생성자에서 `React.createRef()`로 생성된 `ref`는 자신을 전달받은 DOM 엘리먼트를 `current` 프로퍼티의 값으로서 받습니다.



> `ref` 어트리뷰트가 커스텀 클래스 컴포넌트에 쓰였다면, `ref` 객체는 마운트된 컴포넌트의 인스턴스를 `current` 프로퍼티의 값으로서 받습니다.



> **함수 컴포넌트는 인스턴스가 없기 때문에 함수 컴포넌트에 ref 어트리뷰트를 사용할 수 없습니다**.

<br />

>  DOM 엘리먼트에 Ref 사용하기

아래의 코드는 DOM 노드의 참조를 저장하기 위해 `ref`를 사용한다.

~~~jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // textInput DOM 엘리먼트를 저장하기 위한 ref를 생성합니다.
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // DOM API를 사용하여 명시적으로 text 타입의 input 엘리먼트를 포커스합니다.
    // 주의: 우리는 지금 DOM 노드를 얻기 위해 "current" 프로퍼티에 접근하고 있습니다.
    this.textInput.current.focus();
  }

  render() {
    // React에게 우리가 text 타입의 input 엘리먼트를
    // 우리가 생성자에서 생성한 `textInput` ref와 연결하고 싶다고 이야기합니다.
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
~~~

컴포넌트가 마운트될 때 React는 `current` 프로퍼티에 DOM 엘리먼트를 대입하고, 컴포넌트의 마운트가 해제될 때 `current` 프로퍼티를 다시 `null` 로 돌려 놓습니다.

`ref` 를 수정하는 작업은 `componentDidMount` 또는 `componentDidUpdate` 생명주기 메서드가 호출되기 전에 이루어집니다.

<br />

> 클래스 컴포넌트에 ref 사용하기

~~~jsx
class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}
~~~

<br />

>  Ref와 함수 컴포넌트

- **함수 컴포넌트는 인스턴스가 없기 때문에 함수 컴포넌트에 ref 어트리뷰트를 사용할 수 없습니다**.

다만, DOM 엘리먼트나 클래스 컴포넌트의 인스턴스에 접근하기 위해 **`ref` 어트리뷰트를 함수 컴포넌트에서 사용하는 것**은 됩니다.

```jsx
function CustomTextInput(props) {
  // textInput은 ref 어트리뷰트를 통해 전달되기 위해서
  // 이곳에서 정의되어야만 합니다.
  let textInput = React.createRef();

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}
```



<br />

##### 4.1.2 콜백 ref

콜백 ref를 사용할 때에는 `ref` 어트리뷰트에 `React.createRef()`를 통해 생성된 `ref`를 전달하는 대신, 함수를 전달합니다. 전달된 함수는 다른 곳에 저장되고 접근될 수 있는 React 컴포넌트의 인스턴스나 DOM 엘리먼트를 인자로서 받습니다.



~~~jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // DOM API를 사용하여 text 타입의 input 엘리먼트를 포커스합니다.
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 마운트 되었을 때 자동으로 text 타입의 input 엘리먼트를 포커스합니다.
    this.focusTextInput();
  }

  render() {
    // text 타입의 input 엘리먼트의 참조를 인스턴스의 프로퍼티
    // (예를 들어`this.textInput`)에 저장하기 위해 `ref` 콜백을 사용합니다.
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
~~~



컴포넌트의 인스턴스가 마운트 될 때 React는 `ref` 콜백을 DOM 엘리먼트와 함께 호출합니다. 그리고 컴포넌트의 인스턴스의 마운트가 해제될 때, `ref` 콜백을 `null`과 함께 호출합니다. `ref` 콜백들은 `componentDidMount` 또는 `componentDidUpdate`가 호출되기 전에 호출됩니다.

콜백 ref 또한 `React.createRef()`를 통해 생성했었던 객체 ref와 같이 다른 컴포넌트에게 전달할 수 있습니다.



~~~jsx
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}
~~~

