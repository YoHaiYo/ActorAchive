import React, { useEffect, useState } from 'react'
import { Actor_Cast_API_1, Actor_Cast_API_2, Actor_Detail_API_1, Actor_Detail_API_2, Popular_Actor_API, Poster_API } from '../apiurl/apiurl';

export default function ActorsCast({ actor_id, actor_name, actor_popularity }) {
  const [data, setData] = useState(null);
  const [actorDetails, setActorDetails] = useState(null);

  // Popular_Actor_API
  const Actor_Cast_API = `${Actor_Cast_API_1}${actor_id}${Actor_Cast_API_2}`
  const Actor_Detail_API = `${Actor_Detail_API_1}${actor_id}${Actor_Detail_API_2}`

  useEffect(() => {
    Promise.all([
      fetch(Actor_Cast_API).then(response => response.json()),
      fetch(Actor_Detail_API).then(response => response.json())
    ]).then(([data, actorDetails]) => {
      setData(data);
      setActorDetails(actorDetails);
    }).catch(error => console.error("Fetching data failed", error));
  }, [actor_id]);

  if (!data) return <div>Loading...</div>;
  // console.log(data)


  const calcTotal = (x) => {
    const totalCast = data.cast.reduce((acc, el) => acc + el[x], 0);
    const totalCrew = data.crew.reduce((acc, el) => acc + el[x], 0);
    const total = totalCast + totalCrew
    return total
  }

  // 배우 5대 지표
  const total_popularity: number = Number(calcTotal("popularity").toFixed(2)) // 1
  const total_vote_count: number = calcTotal("vote_count") // 2
  const total_vote_average: number = calcTotal("vote_average")
  const movieNum: number = data.cast.length + data.crew.length // 3
  const average_vote_average: number = Number((total_vote_average / movieNum).toFixed(2)) // 4 : 출현영화 전체 평균평점
  const actor_individual_popularity: number = actor_popularity;// 5 

  // 종합지표 (계수 관리하기)
  const total_rating: number = Number((total_popularity + total_vote_count + movieNum + average_vote_average + actor_individual_popularity).toFixed(2))

  return (

    <div className='actorcard border'>
      {/* <li>{actor_id}</li> */}
      <div className='m-3'>
        <div className='d-flex justify-content-between align-items-center px-3'>
          <p className='p-3 h2 my-0'>{actor_name}</p>
          <p className='maincolor maincolor-border my-0 h4 px-2 py-1 rounded-5'>{total_rating}</p>
        </div>
        <div className='d-flex justify-content-center'>
          <p>{actorDetails.place_of_birth} </p>
          <p className='mx-1'>|</p>
          <p>{actorDetails.birthday}</p>
        </div>
      </div>

      <div className='text-center'>
        <img src={`${Poster_API}/${actorDetails.profile_path}`} alt={actorDetails.name} style={{ width: 300 }} />
      </div>

      <div className='d-flex justify-content-between p-3'>
        <div>
          <span>Rating : </span>
          <span className='maincolor'>{average_vote_average}</span>
        </div>
        <div>
          <span>Votes : </span>
          <span className='maincolor'>{total_vote_count}</span>
        </div>
      </div>
      <div className='d-flex justify-content-between px-3'>
        <div>
          <span>Movies :</span>
          <span className='maincolor'> {movieNum}</span>
        </div>
        <div>
          <span>Personal popularity : </span>
          <span className='maincolor'>{actor_individual_popularity}</span>
        </div>
      </div>
      <div className='d-flex justify-content-between p-3'>
        <div>
          <span>Total Popularity : </span>
          <span className='maincolor'>{total_popularity}</span>
        </div>
        <div>
          <span>(?)</span>
        </div>
      </div>
    </div>
  )
}
