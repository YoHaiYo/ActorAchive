### 정리할내용

* prefetch로 로딩속도 향상.

* 배우id값을 라우터 주소로 전달하고,actor/[id]폴더로 받기

* popularity : 산정근거 : https://developer.themoviedb.org/docs/popularity-and-trending

* 하위컴포넌트에서 상위컴포넌트로 전달하는 방법 사용 -> 서버 컴포넌트에서는 useState, useEffect 허용안됨.

* map은 기본적으로 동기함수라서 map 안에서 await로 el.id를 타고 또 다른 api를 호출 할 수 없었음. map 안에서 비동기함수 getMovieRevenue, getMoviePopularity 따로 정의하여 호출하는 방법채택함.
(actor)\actor\[id]\page.tsx

* ★ 비동기로 데이터 랜더링 : 서버와 클라이언트 확실히 구분하기 ! 클라이언트에서만 리액트 훅 사용해서 컨트롤. 서버에선 유저가 랜더링전에 정적 html으로 되기 때문!

* import { Metadata } from "next" 로 페이지마다 meta title 따로관리