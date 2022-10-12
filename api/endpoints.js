
const API_KEY = 'd5826b4e12c757147537031e74238c63';
const baseUrl = 'https://api.themoviedb.org/3/'

const endpoints = {
  fetchTending: `${baseUrl}trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${baseUrl}discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${baseUrl}movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentarries: `${baseUrl}discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default endpoints;