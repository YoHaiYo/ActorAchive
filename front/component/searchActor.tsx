"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 라우팅을 위해 useRouter 훅 추가
import { Search } from 'react-bootstrap-icons';
import "./style/seachActor/style.css"


export default function SearchActor() {
  const [search, setSearch] = useState(""); // 검색어 상태 관리
  const router = useRouter(); // useRouter 훅을 사용하여 router 인스턴스를 가져옴

  const handleInputChange = (e) => {
    setSearch(e.target.value); // 입력 필드의 값이 변경될 때마다 search 상태 업데이트
  };

  const handleSearch = () => {
    // router.push(`/search/${search}`); // 버튼 클릭 시, 입력된 search 값으로 라우팅
    window.location.href = `/search/${search}`;
  };

  // 엔터 키를 누를 때 검색 실행
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search-actor d-flex align-items-center py-1 px-2'>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search Actors"
        onKeyPress={handleKeyPress} // 엔터 키 입력 감지를 위한 이벤트 핸들러 추가

      />
      <Search onClick={handleSearch} className='cursor-pointer' />
      {/* <button style={{ backgroundColor: "transparent" }}></button>  */}
    </div>
  );
}