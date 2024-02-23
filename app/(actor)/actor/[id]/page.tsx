import { Actor_Cast_API_1, Actor_Cast_API_2, Actor_Detail_API_1, Actor_Detail_API_2, Poster_API } from "../../../../front/apiurl/apiurl";
import ActorsCast from "../../../../front/component/actorsCast"
import "./style/style.css"

export const metadata = {
  title: "Actor"
}

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
    <section className="actor-detail">
      {/* <p>id : {id}</p> */}
      <div className="d-flex">
        <div className="actor-info">
          <img src={`${Poster_API}/${actorData.profile_path}`} alt={actorData.name} style={{ width: 300 }} />
          <p>{actorData.name}</p>
          <p>Birth</p>
          <p>{actorData.birthday}</p>
          <p>Birth Place</p>
          <p>{actorData.place_of_birth}</p>
        </div>
        {/* <h3>출연작 (for cast)</h3> */}
        <div className="d-flex flex-wrap">
          {castData.cast.map((el, idx) => {
            return (
              <div className="actor-detail-movie" key={idx}>
                <img src={`${Poster_API}/${el.backdrop_path}`} alt={el.name} />

                <p>{el.title}</p>
                <p>vote_average : {el.vote_average}</p>
                <p>vote_count : {el.vote_count}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}