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
      <div className="position-absolute home-bg-positon end-0 start-0 text-white">
        <p className="h1" >Who is Best Actor?</p >
        <br />
        <p className="h3">Discover the best in cinema with our unique actor scoring system! </p>
        <br />
        <p className="h3">Explore over 10,000 profiles to see who tops the charts in cinematic excellence. </p>
        <br />
        <p className="h3">Dive in now and find out who reigns supreme in the world of movies!</p>

        <button className="mt-5 btn maincolor-bg text-white">Show Right now</button>
      </div>
    </div>
  </div>
}