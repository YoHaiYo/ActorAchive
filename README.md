### 정리할내용

* .env.local로 apikey관리 : NEXT_PUBLIC_ACTOR_API_KEY=your_api_key 형식으로 작성

* prefetch로 로딩속도 향상.

* 배우id값을 라우터 주소로 전달하고,actor/[id]폴더로 받기

* popularity : 산정근거 : https://developer.themoviedb.org/docs/popularity-and-trending

* 하위컴포넌트에서 상위컴포넌트로 전달하는 방법 사용 -> 서버 컴포넌트에서는 useState, useEffect 허용안됨.

* map은 기본적으로 동기함수라서 map 안에서 await로 el.id를 타고 또 다른 api를 호출 할 수 없었음. map 안에서 비동기함수 getMovieRevenue, getMoviePopularity 따로 정의하여 호출하는 방법채택함.
(actor)\actor\[id]\page.tsx

* ★ 비동기로 데이터 랜더링 : 서버와 클라이언트 확실히 구분하기 ! 클라이언트에서만 리액트 훅 사용해서 컨트롤. 서버에선 유저가 랜더링전에 정적 html으로 되기 때문!

* import { Metadata } from "next" 로 페이지마다 meta title 따로관리

* 세부페이지서 네비게이션 작동안하는거 Link태그 -> a태그로 바꿔서 해결.
  
- Link 태그는 새로 고침하지 않고 라우팅을 처리하기 때문에 a태그로 새로고칭해서 확실하게 이동시키기.

* 배우카드의 로딩 스켈레톤도 구현시키자 (부트스트랩은 placeholder 로 명명됨.)

* 랜덤으로 배우목록 보여주기 기능

* 서버사이드, 클라이언트 사이드 배우점수카드 구분 -> 서버 : actorsSearchCard / 클라이언트 : actorsCard