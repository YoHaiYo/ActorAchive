import { Actor_Cast_API_1, Actor_Cast_API_2, Actor_Detail_API_1, Actor_Detail_API_2, Poster_API, Search_Actor_API } from "../../../../front/apiurl/apiurl";
import ActorsCard from "../../../../front/component/actorsCard";
import ActorsCast from "../../../../front/component/actorsCard";
import ActorsSearchCard from "../../../../front/component/actorsSearchCard";
import "./style/style.css"
export const metadata = {
  title: "Search"
}
interface IPrams {
  params: { actorname: string }
}

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
    <section className="search-page">
      {/* <h3>검색결과</h3> */}
      {actorData.results.map((el, idx) => {
        return (
          <div key={idx}>
            <div className="d-md-flex">
              {/* 배우정보 */}
              <ActorsSearchCard
                actor_id={el.id}
                actor_name={el.name}
                actor_popularity={el.popularity}
              />
              {/* 참여작품들 */}
              <div>
                <h3 className="text-center text-white my-3">Filmography</h3>
                <div className="d-flex flex-wrap justify-content-center">
                  {
                    el.known_for.map((eel, iidx) => {
                      return (
                        <div className="movies text-center actor-info-content" key={iidx}>
                          <div className="text-center"><img src={`${Poster_API}/${eel.backdrop_path}`} alt={eel.name} /></div>
                          <p>{eel.title || eel.original_name || eel.name}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className="infocard-divider" />
          </div>
        )
      })}
    </section >
  )
}