"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js 라우팅을 위해 useRouter 훅 추가

export default function SearchActor() {
  const [search, setSearch] = useState(""); // 검색어 상태 관리
  const router = useRouter(); // useRouter 훅을 사용하여 router 인스턴스를 가져옴

  const handleInputChange = (e) => {
    setSearch(e.target.value); // 입력 필드의 값이 변경될 때마다 search 상태 업데이트
  };

  const handleSearch = () => {
    router.push(`/search/${search}`); // 버튼 클릭 시, 입력된 search 값으로 라우팅
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="배우 이름 검색"
      />
      <button onClick={handleSearch}>검색</button> {/* 검색 버튼에 클릭 이벤트 핸들러 연결 */}
    </>
  );
}
