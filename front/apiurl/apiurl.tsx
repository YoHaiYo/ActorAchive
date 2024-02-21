const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const Poster_API = `https://image.tmdb.org/t/p/original`
export const Popular_Actor_API = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=ko-KR`

// Actor_Detail_API : https://api.themoviedb.org/3/person/500?api_key=${apiKey}&language=ko-KR
// Actor_Detail_API_1{actor_id}Actor_Detail_API_2
export const Actor_Detail_API_1 = `https://api.themoviedb.org/3/person/`
export const Actor_Detail_API_2 = `?api_key=${apiKey}&language=ko-KR`

// https://api.themoviedb.org/3/person/500/movie_credits?api_key=${apiKey}&language=ko-KR
// Actor_Cast_API_1{actor_id}Actor_Cast_API_2
export const Actor_Cast_API_1 = `https://api.themoviedb.org/3/person/`
export const Actor_Cast_API_2 = `/movie_credits?api_key=${apiKey}&language=ko-KR`

// https://api.themoviedb.org/3/movie/74?api_key=${apiKey}&language=ko-KR
// Movie_detail_API_1{movie_id}Movie_detail_API_2
export const Movie_detail_API_1 = `https://api.themoviedb.org/3/movie/`
export const Movie_detail_API_2 = `?api_key=${apiKey}&language=ko-KR`