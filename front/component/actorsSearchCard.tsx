// import React, { useEffect, useState } from 'react'
import { Actor_Cast_API_1, Actor_Cast_API_2, Actor_Detail_API_1, Actor_Detail_API_2, Popular_Actor_API, Poster_API } from '../apiurl/apiurl';
import { Film, Receipt, StarFill, ChatRightHeart, HeartFill, QuestionCircle } from 'react-bootstrap-icons';
import Link from 'next/link';
import ActorsLoading from './actorsLoading';
import "./style/actorsSearchCard/style.css"

export default async function ActorsSearchCard({ actor_id, actor_name, actor_popularity }) {
  // const [data, setData] = useState(null);
  // const [actorDetails, setActorDetails] = useState(null);

  // Popular_Actor_API
  const Actor_Cast_API = `${Actor_Cast_API_1}${actor_id}${Actor_Cast_API_2}`
  const Actor_Detail_API = `${Actor_Detail_API_1}${actor_id}${Actor_Detail_API_2}`

  async function getActorCastDetail() {
    const response = await fetch(Actor_Cast_API);
    const json = await response.json();
    return json;
  }
  async function getActorDetail() {
    const response = await fetch(Actor_Detail_API);
    const json = await response.json();
    return json;
  }
  const [data, actorDetails] = await Promise.all([getActorCastDetail(), getActorDetail()])

  // const data = await getActorCastDetail();
  // const actorDetails = await getActorDetail();

  const calcTotal = (x) => {
    const totalCast = data.cast.reduce((acc, el) => acc + el[x], 0);
    const totalCrew = data.crew.reduce((acc, el) => acc + el[x], 0);
    const total = totalCast + totalCrew
    return total
  }

  // 배우 5대 지표
  const total_popularity: number = Number(calcTotal("popularity").toFixed(0)) // 1
  const total_vote_count: number = calcTotal("vote_count") // 2
  const total_vote_average: number = calcTotal("vote_average")
  const movieNum: number = data.cast.length + data.crew.length // 3
  const average_vote_average: number = Number((total_vote_average / movieNum).toFixed(2)) // 4 : 출현영화 전체 평균평점
  const actor_individual_popularity: number = Number(actor_popularity.toFixed(0));// 5 

  // ★종합지표 (계수 관리하기)
  const total_rating: number = Number((
    average_vote_average * 100
    + total_vote_count * 0.01
    + actor_individual_popularity * 1
    + movieNum * 5
    + total_popularity * 0.01
  ).toFixed(0))

  return (

    <div className='actorcard'>
      {/* <li>{actor_id}</li> */}
      <a href={`/actor/${actor_id}`} >
        <div className='m-3'>
          <div className='d-flex justify-content-between align-items-center px-2'>
            <p className='p-2 h3 my-0'>{actor_name}</p>
            <p className='maincolor maincolor-border my-0 h4 px-2 py-1 rounded-5'>{total_rating}</p>
          </div>
          <div className='d-flex justify-content-center'>
            {/* 태어난 곳 주소 축소 */}
            <p>{actorDetails?.place_of_birth ? actorDetails.place_of_birth.split(', ').slice(1).join(', ') : 'Unknown'} </p>
            <p className='mx-1'>|</p>
            <p>{actorDetails.birthday}</p>
          </div>
        </div>

        <div className={`text-center`}>
          <img className={`${actorDetails.profile_path === null ? "noimg" : 'actor-img'}`}
            src={`${Poster_API}/${actorDetails.profile_path}`}
            alt={actorDetails.name}
            style={{ width: 300 }}
          />
        </div>
      </a>

      <div className='d-flex justify-content-between p-4'>
        <div>
          <StarFill className='me-2' />
          <span>Rating : </span>
          <span className='maincolor'>{average_vote_average}</span>
        </div>
        <div>
          <Receipt className='me-2' />
          <span>Votes : </span>
          <span className='maincolor'>{total_vote_count}</span>
        </div>
      </div>
      <div className='d-flex justify-content-between px-4'>
        <div>
          <ChatRightHeart className='me-2' />
          <span>Personal popularity : </span>
          <span className='maincolor'>{actor_individual_popularity}</span>
        </div>
        <div>
          <Film className='me-2' />
          <span>Movies :</span>
          <span className='maincolor'> {movieNum}</span>
        </div>
      </div>
      <div className='d-flex justify-content-between p-4'>
        <div>
          <HeartFill className='me-2' />
          <span>Total Popularity : </span>
          <span className='maincolor'>{total_popularity}</span>
        </div>
        <div>
          <a href="/criteria"><QuestionCircle className='h5 cursur-pointer' /></a>
        </div>
      </div>
    </div>
  )
}
