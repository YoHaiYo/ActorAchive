"use client" // use client : 이 컴포넌트는 client side에서 hydrate(정적 사이트를 동적으로 활성화)하겠다는 뜻.
// 백엔드에서 랜더하고 프론트에서 hydrate or interactive하겠다는 뜻이기도 하다.
// 인터렉티브한 페이지에 써야됨. 즉 useState같은 것에 필수.

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  // console.log(path)
  return (
    <nav >
      <h1><Link href="/">Logo</Link></h1>
      <ul>
        <li><Link href="/">Home</Link>{path === "/" ? "★" : ""}</li>
        <li><Link href="/all">all</Link>{path === "/all" ? "★" : ""}</li>
        <li><Link href="/criteria">criteria</Link>{path === "/criteria" ? "★" : ""}</li>
        <li><Link href="/about">about</Link>{path === "/about" ? "★" : ""}</li>
      </ul>
    </nav>
  )
}