"use client"

import React, { useState, useEffect } from 'react'
import { Popular_Actor_API } from '../apiurl/apiurl';
import Link from 'next/link';
import ActorsCast from './actorsCast';

export default function ActorsList() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  // Popular_Actor_API

  useEffect(() => {
    const Popular_Actor_API_page = `${Popular_Actor_API}&page=${page}`
    fetch(Popular_Actor_API_page)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Fetching data failed", error));
  }, [page]); // 페이지 바뀔때마다 마운트

  if (!data) return <div>Loading...</div>;
  // console.log(data)
  return (
    <div>
      <h2>actors</h2>
      <button onClick={() => { setPage(1) }}><Link href={`/actorlist/${page}`}>1</Link></button>
      <button onClick={() => { setPage(2) }}><Link href={`/actorlist/${page}`}>2</Link></button>
      <span>...</span>
      <button onClick={() => { setPage(500) }}><Link href={`/actorlist/${page}`}>500</Link></button>



      {data.results.map((el, idx) => {
        return (
          <Link href={`/actor/${el.id}`} key={idx}>
            <p>{el.id}</p>
            <p>{el.name}</p>
            <p>{el.popularity}</p>
            <ActorsCast
              actor_id={el.id}
              actor_name={el.name}
              actor_popularity={el.popularity}
            />
          </Link>
        )
      })}
    </div >
  );
}
