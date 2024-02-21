import { Actor_Cast_API_1, Actor_Cast_API_2, Actor_Detail_API_1, Actor_Detail_API_2, Poster_API, Search_Actor_API } from "../../../../front/apiurl/apiurl";
import ActorsCast from "../../../../front/component/actorsCast";

interface IPrams {
  params: { actorname: string }
}

// async function getCastDetail(actorname) {
//   const response = await fetch(`${Actor_Cast_API_1}${id}${Actor_Cast_API_2}`);
//   const json = await response.json();
//   return json;
// }

async function getActorDetail(actorname) {
  const response = await fetch(`${Search_Actor_API}${actorname}`);
  const json = await response.json();
  // console.log(json)
  return json;

}


export default async function Page(
  { params: { actorname } } // 구조분해할당 + 타입스크립트 타입지정  
    : IPrams) {
  // const castData = await getCastDetail(actorname);
  const actorData = await getActorDetail(actorname);

  return (
    <div>
      <p>actor 세부페이지</p>
      {/* <p>id : {id}</p> */}
      {/* <img src={`${Poster_API}/${actorData.profile_path}`} alt={actorData.name} style={{ width: 300 }} /> */}
      {/* <p>{actorData.name}</p>
      <p>{actorData.birthday}</p>
      <p>{actorData.place_of_birth}</p> */}
      <hr />

      <h3>검색결과</h3>
      {actorData.results.map((el, idx) => {
        return (
          <ul key={idx}>
            <li><img src={`${Poster_API}/${el.profile_path}`} alt={el.name} style={{ width: 300 }} /></li>
            <li>{el.name}</li>
            <li>
              <p>Known For</p>
              {
                el.known_for.map((eel, iidx) => {
                  return (
                    <ul key={iidx}>
                      <li><img src={`${Poster_API}/${eel.backdrop_path}`} alt={eel.name} style={{ width: 300 }} /></li>
                      <li>title : {eel.title || eel.original_name || eel.name}</li>
                    </ul>
                  )
                })
              }
            </li>
          </ul>
        )
      })}
    </div>
  )
}