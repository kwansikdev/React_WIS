# React



this.setState

기존의 상태를 유지 + 병합

~~~jsx
state = {lang: 'ko'};
this.setState({
  'new': 'react'
})

// results
{
  lang: 'ko',
  'new': 'react' 
}
~~~



React Hooks 상태 변화 함수

기존 상태 X , 파라미터로 받은 새로운 상태만 업데이트

~~~jsx
state = {lang: 'ko'};
상태변화함수 ({
  'new': 'react'
})

// results
{
  'new': 'react' 
}
~~~



---

Object.is

레퍼런스까지 비교하므로 동적으로 입력되기 때문에 매번 변화가 있다고 인식하기 떄문에 매번 render함수가 실행된다. 

따라서 useCallback, useMemo를 사용해서 기억을 해둔다.



---

localStorage : 브라우저가 refresh 되어도 데이터를 보관할 수 있다 (+ 리덕스)



localStorage.setItem

localStorage.getItem