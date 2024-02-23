"use client" // use client : 이 컴포넌트는 client side에서 hydrate(정적 사이트를 동적으로 활성화)하겠다는 뜻.
// 백엔드에서 랜더하고 프론트에서 hydrate or interactive하겠다는 뜻이기도 하다.
// 인터렉티브한 페이지에 써야됨. 즉 useState같은 것에 필수.

import Link from "next/link"
import { usePathname } from "next/navigation"
import SearchActor from "./searchActor";
import "./style/navigation/navigation.min.css"
import React, { useEffect, useState } from 'react'
import { List } from "react-bootstrap-icons";

export default function Navigation() {
  const [toggle, setToggle] = useState(false)


  const path = usePathname();
  // console.log(path)
  return (
    <header id="hd">
      {/* pc-view */}
      <nav className="pc-view fixed-top py-4 container container-fluidxxx
      d-flex justify-content-between align-items-center">
        <h1 className="w-0 z-up"><a href="/">LogoPC</a></h1>
        <div className="navi navi-ani-off d-flex justify-content-between">
          <ul id="gnb" className="d-flex justify-content-center align-items-center rounded-4 p-3">
            <li className={`mx-3 ${path === "/" ? "nav-active" : ""}`}><a href="/">Home</a></li>
            <li className={`mx-3 ${path === "/actor" ? "nav-active" : ""}`}><a href="/actor">Actor</a></li>
            <li className={`mx-3 ${path === "/criteria" ? "nav-active" : ""}`}><a href="/criteria">Criteria</a></li>
            <li className={`mx-3 ${path === "/about" ? "nav-active" : ""}`}><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="d-flex w-0 justify-content-end">
          <SearchActor />
        </div>
      </nav>
      {/* mobile-view */}
      <nav className={`mobile-view fixed-top py-4 d-flex justify-content-center border-bottom`}>
        <div className="d-flex justify-content-between align-items-center mx-3">
          <h1 className="z-up"><a href="/">LogoMobile</a></h1>
          {/* <button onClick={() => setToggle(!toggle)}>햄버거바</button> */}
          <List onClick={() => setToggle(!toggle)} className="cursur-pointer hamburger-btn"></List>
        </div>
        <div className={`${toggle ? "active" : ""} navi position-relative text-end`}>
          <ul id="gnb" className="text-center">
            <li className={`m-3 `}>
              <a href="/">Home</a>
              <div className="gnb-divider"></div>
            </li>
            <li className={`m-3 `}>
              <a href="/actor">Actor</a>
              <div className="gnb-divider"></div>
            </li>
            <li className={`m-3 `}>
              <a href="/criteria">Criteria</a>
              <div className="gnb-divider"></div>
            </li>
            <li className={`m-3 `}>
              <a href="/about">About</a>
              <div className="gnb-divider"></div>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <SearchActor />
          </div>
        </div>
      </nav>
    </header>
  )
}