import axios from 'axios';

export default class ApiService {
  getResource = async (url) => {
    const response = await axios.get(` https://ghibliapi.herokuapp.com${url}`);

    if (response.status !== 200) {
      throw new Error(`Could not fetch https://ghibliapi.herokuapp.com${url}`);
    }

    return response.data;
  };

  getFilms = async () => {
    const films = await this.getResource('/films');
    return films.map((film) => this.transformFilm(film));
  };

  getFilm = async (id) => {
    const film = await this.getResource(`/films/${id}`);
    return this.transformFilm(film);
  };

  transformFilm = (film) => ({
    id: film.id,
    title: film.title,
    originalTitle: film.original_title,
    originalTitleRomanised: film.original_title_romanised,
    description: film.description,
    director: film.director,
    producer: film.producer,
    releaseDate: film.release_date,
    score: film.rt_score,
  });
}
