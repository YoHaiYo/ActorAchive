import { Calendar2DateFill, Shop } from "react-bootstrap-icons";
import { Actor_Cast_API_1, Actor_Cast_API_2, Actor_Detail_API_1, Actor_Detail_API_2, Poster_API } from "../../../../front/apiurl/apiurl";
import ActorsCast from "../../../../front/component/actorsCast"
import "./style/style.css"

export const metadata = {
  title: "Actor"
}

interface IPrams {
  params: { id: string }
}

function ratingToStars(voteAverage) {
  // 평점을 2로 나누어 0에서 5 사이의 값으로 조정
  const starsFull = Math.round(voteAverage / 2);
  const starsEmpty = 5 - starsFull; // 빈 별의 개수

  // ★ 문자로 채워진 별과 ☆ 문자로 채워진 빈 별을 생성
  const fullStars = '★'.repeat(starsFull);
  const emptyStars = '☆'.repeat(starsEmpty);

  // 채워진 별과 빈 별을 결합하여 최종 문자열 반환
  return fullStars + emptyStars;
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
    <section className="actor-detail ">
      {/* <p>id : {id}</p> */}
      <div className="d-md-flex">
        <div className="actor-info">
          <div className="actor-info-content">
            <div className="text-center">
              <img src={`${Poster_API}/${actorData.profile_path}`} alt={actorData.name} style={{ width: 300 }} />
            </div>
            <p className="actor-info-name text-center">{actorData.name}</p>
            <div className="actor-info-gray d-flex align-items-center">
              <Calendar2DateFill className="me-2" />
              <p className="">Birth</p>
            </div>
            <p>{actorData.birthday}</p>
            <div className="actor-info-gray d-flex align-items-center">
              <Shop className="me-2" />
              <p className="">Birth Place</p>
            </div>
            <p>{actorData.place_of_birth}</p>
          </div>
        </div>
        <div>
          {/* <h3 className="text-center text-white my-3">Filmography</h3> */}
          <div className="d-flex flex-wrap justify-content-center">
            {castData.cast.map((el, idx) => {
              return (
                <div className="actor-detail-moviecard" key={idx}>
                  <div className="d-flex justify-content-between mx-2 align-items-center">
                    <p className="me-2">vote: {el.vote_count}</p>
                    <div className="d-flex">
                      <p className="maincolor me-1">{el.vote_average.toFixed(1)}</p>
                      <p className="me-2 maincolor">
                        {ratingToStars(el.vote_average)}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center my-2">
                    <img src={`${Poster_API}/${el.backdrop_path}`} alt={el.name} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="me-2 movie-title">{el.title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}