# GraphQL

변수를 받을 경우에는 `query` 를 꼭 써야한다.

mutation 은 무조건 붙여야한다.

~~~graphql
myFiled: [String!]

myField: null // valid
myField: [] // valid
myField: ['a', 'b'] // valid
myField: ['a', null, 'b'] // error
~~~

list가 `null` 이어도 되지만 list의 요소가 `null` 이면 안된다

~~~graphql
myFiled: [String]!

myField: null // error
myField: [] // valid
myField: ['a', 'b'] // valid
myField: ['a', null, 'b'] // valid
~~~

Iist 가 `null` 이면 안되지만, list의 요소가 `null` 을 포함해도 된다.



인터페이스

필드명은 무조건 적어야하지만, 필드명의 내용은 바꿀 수 있다.

~~~bash
npm i apollo-client apollo-cache-inmemory apollo-link-http graphql graphql-tag react-apollo     
~~~



## Apollo GraphQL

