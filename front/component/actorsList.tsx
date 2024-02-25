"use client"

import React, { useState, useEffect, Suspense } from 'react'
import { Popular_Actor_API, Poster_API } from '../apiurl/apiurl';
import Link from 'next/link';
import ActorsCast from './actorsCard';
import './style/actorsCard/style.min.css'
import { Shuffle, Arrow90degDown, ArrowLeftCircleFill, ArrowLeftSquareFill, ArrowRightCircleFill, ArrowRightSquare, ArrowRightSquareFill } from 'react-bootstrap-icons';
import { CardSubtitle } from 'react-bootstrap';



export default function ActorsList() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState(1); // 사용자 입력 페이지 번호를 위한 state 추가

  // 랜덤 페이지로 이동하는 함수
  const goToRandomPage = () => {
    // 1과 500 사이의 랜덤 정수를 생성합니다.
    const randomPage = Math.floor(Math.random() * 500) + 1;
    setPage(randomPage);
  };

  const handlePageInput = (e) => {
    if (e.key === 'Enter') {
      const newPage = Number(e.target.value);
      if (!isNaN(newPage) && newPage > 0 && newPage <= 500) {
        setPage(newPage);
      }
    }
  };

  // pagePagination UI 관리
  function ActorPagination() {
    return (
      <div className='actor-pagination d-flex justify-content-center align-items-center'>
        {page > 1 ? (
          <ArrowLeftSquareFill className='actor-pagination-btn btn-active maincolor' onClick={goToPreviousPage} />
        ) : (
          <ArrowLeftSquareFill className='actor-pagination-btn' />
        )}

        <input
          type="number"
          defaultValue={page}
          onKeyPress={handlePageInput}
          className='actor-pagination-input'
        />

        <Shuffle className='actor-pagination-btn maincolor-bg actor-shuffle-btn' onClick={goToRandomPage}></Shuffle>
        {page < 500 ? (
          <ArrowRightSquareFill className='ms-0 actor-pagination-btn btn-active maincolor' onClick={goToNextPage} />
        ) : (
          <ArrowRightSquareFill className='ms-0 actor-pagination-btn' />
        )}

      </div>
    );
  }

  useEffect(() => {
    const Popular_Actor_API_page = `${Popular_Actor_API}&page=${page}`;
    fetch(Popular_Actor_API_page)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Fetching data failed", error));
    // console.log(page)
  }, [page]);

  const goToNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setPage(prevPage => Math.max(1, prevPage - 1));
  };

  const handleInputChange = (e) => {
    const newPage = Number(e.target.value);
    setInputPage(e.target.value); // 입력값을 inputPage state에 저장

    // 입력한 페이지 번호로 바로 이동
    if (!isNaN(newPage) && newPage > 0) {
      setPage(newPage);
    }
  };

  if (!data) return <></>;

  return (
    <section className='actor-container'>
      <ActorPagination />

      <div className='actorcard-wrap'>
        {data.results.map((el, idx) => (
          <div className='actorcard-container' key={idx}>
            {/* <p>{el.name}</p> */}
            {/* <p><img src={`${Poster_API}/${el.profile_path}`} alt={el.name} style={{ width: 300 }} /></p> */}
            <ActorsCast
              actor_id={el.id}
              actor_name={el.name}
              actor_popularity={el.popularity}
            />
          </div>
        ))}
      </div>
      <ActorPagination />
    </section>
  );
}

