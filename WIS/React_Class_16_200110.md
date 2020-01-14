# React

Value = [가위, 바위, 보]

컴퓨터가 랜덤으로 생성하는 value => Math.random(중복에 의해 충돌이 일어나지 않는 경우에만 사용해야한다. )

Math.floor : 소수점을 날려버리고 정수로 만든다. => 0 + Math.floor(Math.random() * (2 - 0))

우리가 입력하는 values...



## GraphQL

REST API 에서 각각의 데이터에 대해서 

GraphiQL 



Query: CRUd; create read update delete // 일반적인 db

Query: graphql : query는 데이터 조회

Mutation: graphql 수정 create update delete

변수를 쓸대 query 또는 mutation을 써야한다.

~~~graphql
query ($organiztion: String!) {
	organization(login: $organization) {
		name
		url
	}
}
~~~

! 는 반드시 정의되어져야한다는 뜻



