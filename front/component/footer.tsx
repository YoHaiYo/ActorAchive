import React from 'react'

import "./style/footer/footer.css"

// Copyright연도 자동지정
const thisYear = new Date().getFullYear(); // 2023 (올해년도 출력)

export default function Footer() {

  return (
    <footer className='text-center py-3'>
      <p className='my-1'>©Copyright {thisYear} | All rights reserved.</p>
      <p className='my-1'>developer : SimSeHoon</p>
      <p className='my-1'>github : https://github.com/YoHaiYo</p>
      <p className='my-1'>email : 12si47bun@naver.com</p>
    </footer>
  )
}
