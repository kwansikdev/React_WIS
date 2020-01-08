# React

실행시 외부환경에서의 환경변수를 가져오는 방법

```jsx
// App.js
key: process.env.REACT_APP_환경변수명(대문자로)

// .env
REACT_APP_환경변수명=환경변수
```



encodeURIComponent()

한글을 입력하면 특수하게 변경된 String 값으로 변경해준다.



~~~
git checkout -b branch 이름
~~~



~~~
REACT_APP_KEY=key npm start // 터미널에서 .env 파일을 만드는 것과 똑같음 Linux & Mac
($env:REACT_APP_key = "abcdef") -and (npm start) // window 환경
~~~



# React Router

? 뒤에 나오는 변수 => Query String : 어떠한 이벤트를 입력할 수 있다. 데이터를 호출할 때 정의

? 앞에 있는 주소는 우리가 정의한 주소.  

라우팅 



~~~
npm install react-router --save
~~~



~~~jsx
<Router>
	<Switch>
  	<Route path="" component={component}/>
  </Switch>
</Router>
~~~



~~~jsx
// 데이터를 전달하는 방법

// Query String 으로 작성
https://www.youtube.com/watch?v=MsFoS6kdTd4 // ?뒤로 &로 여러 데이터를 한번에 작성해서 전달 가능

// REST APi 규격으로 작성
https://www.youtube.com/watch/MsFoS6kdTd4 // `/` 뒤에 오직 한개의 데이터만 작성해서 전달 가능
~~~



~~~jsx
<Router>
  <Switch>
    // exact는 path가 완전히 일치 할떄만 랜더링을 하게 한다.
    <Route exact path="/watch" component={VideoPlayer}/>
    
    // exact 없을때는 path가 부분적으로만 맞아도 순서에 따라 위에 있는 것이 선택된다
    // 즉 선택된 아래 Route는 절대로 실행이 되는 경우가 없다.
    <Route path="/watch/:videoId" component={VideoPlayer}/>
  </Switch>
</Router>
~~~



exact 를 붙이는 Route에는 변수를 붙일 수 없다.

props.match.params



history.push('/watch?v={videoId})



SPA



goback



setTimeout(() => )