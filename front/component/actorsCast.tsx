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
  const total_popularity = calcTotal("popularity") // 1
  const total_vote_count = calcTotal("vote_count") // 2

  const total_vote_average = calcTotal("vote_average")
  const movieNum = data.cast.length + data.crew.length // 3
  const average_vote_average = total_vote_average / movieNum // 4
  const actor_individual_popularity = actor_popularity;// 5 

  // 종합지표 (계수 관리하기)
  const total_rating = total_popularity + total_vote_count + movieNum + average_vote_average + actor_individual_popularity

  return (
    <ul >
      {/* <li>{actor_id}</li> */}
      <h3>{actor_name}</h3>
      <p><img src={`${Poster_API}/${actorDetails.profile_path}`} alt={actorDetails.name} style={{ width: 300 }} /></p>
      <li>birthday : {actorDetails.birthday}</li>
      <li>place_of_birth : {actorDetails.place_of_birth}</li>
      <li><h3>total_rating : {total_rating}</h3></li>
      <li>actor_popularity : {actor_individual_popularity}</li>
      <li>movieNum : {movieNum}</li>
      <li>totalPopularity : {total_popularity}</li>
      <li>average_vote_average : {average_vote_average}</li>
      <li>total vote_count : {total_vote_count}</li>
      <hr />
    </ul>
  )
}
