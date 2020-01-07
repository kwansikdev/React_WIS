# React



렌더링되는 컴포넌트가 깜박깜박 거리는 경우, 빠르게 업데이트 되는 경우가 있어서 깜박거리는 경우 => useLayoutEffect (동기적으로 작동하게 한다)



## useRef( ) vs createRef( )

<br />

### createRef( )

- 렌더링되는 돔요소에 직접적으로 접근하기 위해서 사용 input.current 까지 포함하고 있다.

### useRef( )

- 상태가 업데이트 되어서 값이 변경되어도 리렌더링이 되지 않는다.(유일)

<br />

## useEffect

useEffect 에서 의존성 value에 대해서 얕은 의존성 검사(shallow comparions)를 하기 때문에 레퍼런스에 대해서만 검사한다. 따라서 값이 변경이 안되어도 리렌더링이 된다.

객체에 대해 비교를 할때....

순차적으로 실행된다.



## useContext

