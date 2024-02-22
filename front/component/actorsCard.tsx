"use client"

import React, { useState, useEffect, Suspense } from 'react'
import { Popular_Actor_API, Poster_API } from '../apiurl/apiurl';
import Link from 'next/link';
import ActorsCast from './actorsCast';
import './style/actorsCard/style.min.css'

export default function ActorsCard() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState(1); // 사용자 입력 페이지 번호를 위한 state 추가

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

  if (!data) return <div>Loading...</div>;

  return (
    <section>
      <div className='actor-pagination d-flex justify-content-center'>
        {page > 1 ? <button className='btn-active maincolor-bg' onClick={goToPreviousPage}>Before</button> : <button className='btn-noactive' >X-Before</button>}
        <input
          type="number"
          value={page}
          onChange={handleInputChange}
        />
        {page < 500 ? <button className='btn-active maincolor-bg' onClick={goToNextPage}>Next</button> : <button className='btn-noactive' >X-Next</button>}
      </div>

      <div className='actorcard-wrap'>
        {data.results.map((el, idx) => (
          <Link prefetch href={`/actor/${el.id}`} key={idx}>
            <div>
              {/* <p>{el.name}</p> */}
              {/* <p><img src={`${Poster_API}/${el.profile_path}`} alt={el.name} style={{ width: 300 }} /></p> */}
              <ActorsCast
                actor_id={el.id}
                actor_name={el.name}
                actor_popularity={el.popularity}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

