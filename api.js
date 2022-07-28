export const API_ENDPOINT = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  return fetch(`${API_ENDPOINT}/trending/all/day?api_key=${process.env.MOVIE_API_KEY}`)
}