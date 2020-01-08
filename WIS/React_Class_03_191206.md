# React

<br />

### React 란?

- Ui를 위한 view 라이브러리



### 클래스 

- React.component 의 this나 method 를 사용하기 위해서 extends를 한다.

- render라는 함수를 override



데이터가 불변함을 setState를 통해서만 상태 변화가 가능하기 때문에 단방향 방식이다



### JSX

jsx문법이 나와서 닫을 때까지는 중괄호를 무조건 써야한다.



### Unidirectional Data Flow

key 는 예측할 수 있는 항상 고유값 => 정렬할 수 있게...!

ui가 언제 업데이트를 해야할지를 알려주는... 중요한 요소

map이라는 함수 또는 반복을 도는 함수를 통해서 js 문법으로 return 값이 jsx 이면 최상위 노드에서 `key`를 무조건 사용해야한다.



state는 명시적으로 초기화를 해야합니당



