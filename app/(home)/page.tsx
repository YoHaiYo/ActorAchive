/// app/page.tsx
"use client"

import "./style/style.css"

import { useEffect } from 'react';

export default function Page() {

  /// home 페이지에 body 클래스 다르게줘서 배경스타일 관리
  /*  useEffect(() => {
     document.body.classList.add('layout-home');
     // 컴포넌트 언마운트 시 클래스명 제거
     return () => {
       document.body.classList.remove('layout-home');
     };
   }, []); */

  return <div id="home">
    <div className="home-header-bg"></div>
    <div className="home-shadow"></div>
    <div className="home-bg">
      <div className="position-absolute top-50 end-0 start-0">
        <p className="h2" >Who is Best Actor?</p >
        <br />
        <p>"Discover the stars who truly shine.</p>
        <br />
        <p>welcome to the only platform where the greatest actors are celebrated, not just through popularity, but by genuine merit.</p>
        <br />
        <p>With our unique, data-driven approach, we redefine excellence in cinema, spotlighting the talents that set the bar.</p>
        <br />
        <p>Join us in celebrating the artistry that transcends the screen, where every accolade is earned, and every star truly deserves their place in the spotlight."</p>

        <button className="mt-5 btn maincolor-bg text-white">Show Right now</button>
      </div>
    </div>
  </div>
}