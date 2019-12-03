# Proxy

---

>The **Proxy** object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
>
>**Proxy** 객체는 속성 조회, 할당, 열거, 함수 호출등의 대해 사용자의 커스텀 동작을 정의할 때 사용된다.

ES6에서 추가된 Proxy 객체 **기본적인 동작의 새로운 행동을 정의**할때 사용한다.

1. property 접근

2. property 값 할당

3. 함수 호출

4. 생성자 호출

   ...

~~~javascript
const state = { name: 'Kwansik Kim'}
state.name // property 접근
state.name = 'Kwansik' // property 할당
~~~



---

### Proxy 사용

~~~javascript
const p = new Proxy(target, handler);
~~~

> target : 대상이 되는 객체 (기본배열, 함수, 또 다른 Proxy 객체 etc.)
>
> handler : Proxy의 동작을 정의하는 함수 객체 (get, set, defineProperty, deleteProperty, construct, apply 등 13가지 함수를 핸들링 할 수 있다.)



##### 2-Way Data Binding을 구현하는데 사용

- Data Binding

  > **두 데이터 혹은 정보의 소스를 모두 일치시키는 기법**
  >
  > 단방향 데이터 바인딩은 데이터와 탬플릿을 결합하여 화면을 생성한다. 
  >
  > 하지만 양방향 데이터 바인딩은 데이터의 변화를 감지해 템플릿과 결합하여 화면을 갱신하고 그 화면에서의 입력에 따라 데이터를 갱신한다. **즉, 데이터와 화면 사이의 데이터가 계속해서 일치하게 되는 것이다.**

---

<br>

~~~javascript
// 양방향 Data Binding 
// 페이지 새로고침 없이 

const listeners = document.quertSelectorAll('[data-model]')

listeners.forEach(listener => {
  const name = listener.dataset.model
  listener.addEventListener('keyup', event => {
    state[name] = listener.value
  })
})

const render = () => {
  // 화면에 랜더링할 수 있게 코드 작성
}

const createState = state => {
  return new Proxy(state, {
    set (target, property, value) {
      target[property] = value
      render()
      return true
    }
  })
}

const state = createState({
  name: 'kwansik kim',
  email: 'kwansk0424@gmail.com'
})
~~~

