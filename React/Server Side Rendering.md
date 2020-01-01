![](https://user-images.githubusercontent.com/37237125/70863793-2634cb80-1f8f-11ea-9660-05dd71ee7c24.png)

# Server Side Rendering

<br />

## 서버사이드 렌더링의 이점 

서버사이드 렌더링을 통해 얻을 수 있는 가장 큰 이점은 **검색엔진 최적화**입니다. 뷰 렌더링이 자바스크립트 위주로 돌아가는 프로젝트는 자바스크립트 엔진이 돌아가지 않으면 원하는 정보를 제대로 표현해 주지 않습니다.

따라서 클라이언트 렌더링만 될 경우 검색엔진 크롤러가 웹 애플리케이션의 데이터 정보를 읽어오지 못할 수도 있습니다. 크롤러에 자바스크립트 엔진이 내장되어 있으면 상관없지만, 자바스크립트 엔진이 내장되어 있지 않는 검색엔진이 제대로 크롤링을 할 수 있게 하려면 서버사이드 렌더링을 따로 구현해야 합니다.

첫 렌더링 된 html을 클라이언트에게 전달 해주기 때문에 초기로딩속도를 많이 줄일 수 있습니다. 자바스크립트 파일을 불러오고, 렌더링 작업이 완료되기 전에도 사용자가 웹 애플리케이션의 컨텐츠를 이용 할 수 있게 됩니다.



<br />

## 서버사이드 렌더링의 단점

프로젝트의 구조가 많이 **복잡**해지게 됩니다. 리액트 라우터, 리덕스 등의 라이브러리와 함께 연동해서 사용하면서, 서버에서 데이터를 가져와서 렌더링을 해줘야하는 경우에는 어려워 질 수 도 있습니다.

클라이언트에서의 초기 렌더링을 서버측에서 대신 해주기 때문에, 클라이언트의 부담은 줄어들지만, 그 부담을 서버가 가져가게 됩니다. 서버사이드 렌더링을 하게 될때는 `ReactDOMServer, renderToString` 함수를 사용하게 되는데 이 함수는 동기적으로 작동하기에 렌더링을 하는 동안 이벤트루프가 막히게 되어, 다른 작업을 못하게 됩니다.

써드파티 라이브러리를 통해서 비동기식으로 작동하게끔 코드를 작성할수 있습니다.

- rapscallion : renderToString 을 비동기로 해주며, Promise 기반으로 작동하고, 컴포넌트 단위로 캐싱할 수 있다.

- hypernova : airbnb 에서 만든 도구로, 렌더링을 위해 서버를 따로 열어서 `cluster` 를 사용해 여러 프로세스를 생성하여 렌더링을 하고, 운영서베어서 렌더링서버로 결과물을 요청하는 방식으로 작동합니다.

- React-router-server : react router v4 를 위해 만들어진 서버사이드 렌더링 라이브러리로서, Promise 비동기식 렌더링을 지원해주고, 깔끔한 방식으로 데이터를 불러올 수 있습니다. 

  <br />

  서버사이드 렌더링을 최적화 시키는 것입니다. 개인화된 데이터는 서버사이드 렌더링 하는 것을 피하고, 모든 유저에게 같은 형식으로 보여지는 뷰들을 캐싱하는 것도 좋은 방안입니다.

<br />

## 또 다른 대안

리액트 애플리케이션을 렌더링하지 않고, 서버쪽에서 라우트에 따라 필요한 **메타태그**만 넣어주는 것입니다. 크롤로에선 해당 페이지에 대한 기본 정보는 얻어 갈 수 있다. 

**prerender** 라는 서비스를 이용하는 방법도 있습니다. 리액트 코드를 문자열 형태로 변환하는 것이 아니라, 자바스크립트 렌더링 엔징을 가지고 있어서, 코드를 실행시켜 뷰를 렌더링한 결과값을 반환합니다. 렌더링 속도는 생각보다 빠르지는 않아서, 이 서비스는 오직 검색엔진 최적화를 위해서만 사용합니다. 