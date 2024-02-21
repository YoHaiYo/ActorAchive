import { Actor_Cast_API_1, Actor_Cast_API_2, Actor_Detail_API_1, Actor_Detail_API_2, Poster_API } from "../../../../front/apiurl/apiurl";
import ActorsCast from "../../../../front/component/actorsCast"

interface IPrams {
  params: { id: string }
}

async function getCastDetail(id) {
  const response = await fetch(`${Actor_Cast_API_1}${id}${Actor_Cast_API_2}`);
  const json = await response.json();
  return json;
}

async function getActorDetail(id) {
  const response = await fetch(`${Actor_Detail_API_1}${id}${Actor_Detail_API_2}`);
  const json = await response.json();
  return json;
}

export default async function Page(
  { params: { id } } // 구조분해할당 + 타입스크립트 타입지정  
    : IPrams) {
  const castData = await getCastDetail(id);
  const actorData = await getActorDetail(id);
  return (
    <div>
      <p>actor 세부페이지</p>
      <p>id : {id}</p>
      <img src={`${Poster_API}/${actorData.profile_path}`} alt={actorData.name} style={{ width: 300 }} />
      <p>{actorData.name}</p>
      <p>{actorData.birthday}</p>
      <p>{actorData.place_of_birth}</p>
      <hr />
      <h3>출연작 (for cast)</h3>
      {castData.cast.map((el, idx) => {
        return (
          <ul key={idx}>
            <li> <img src={`${Poster_API}/${el.backdrop_path}`} alt={el.name} style={{ width: 300 }} /></li>
            <li>{el.title}</li>
            <li>vote_average : {el.vote_average}</li>
            <li>vote_count : {el.vote_count}</li>
          </ul>
        )
      })}
    </div>
  )
}