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

  getStaticData = (id) => {
    const links = [
      {
        id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        netflixLink: 'https://www.netflix.com/title/60027393',
        youtubeLink: 'https://youtu.be/8ykEy-yPBFc',
      },
      {
        id: '12cfb892-aac0-4c5b-94af-521852e46d6a',
        netflixLink: '',
        youtubeLink: 'https://youtu.be/4vPeTSRd580',
      },
      {
        id: '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
        netflixLink: 'https://www.netflix.com/title/60032294',
        youtubeLink: 'https://youtu.be/92a7Hj0ijLs',
      },
      {
        id: 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
        netflixLink: 'https://www.netflix.com/title/60027106',
        youtubeLink: 'https://youtu.be/4bG17OYs-GA',
      },
      {
        id: '4e236f34-b981-41c3-8c65-f8c9000b94e7',
        netflixLink: 'https://www.netflix.com/title/80092922',
        youtubeLink: 'https://youtu.be/OfkQlZArxw0',
      },
      {
        id: 'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
        netflixLink: 'https://www.netflix.com/title/70019060',
        youtubeLink: 'https://youtu.be/awEC-aLDzjs',
      },
      {
        id: '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c',
        netflixLink: 'https://www.netflix.com/title/70035036',
        youtubeLink: 'https://youtu.be/_7cowIHjCD4',
      },
      {
        id: 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3',
        netflixLink: 'https://www.netflix.com/title/70045021',
        youtubeLink: 'https://youtu.be/0pVkiod6V0U',
      },
      {
        id: '0440483e-ca0e-4120-8c50-4c8cd9b965d6',
        netflixLink: 'https://www.netflix.com/title/28630857',
        youtubeLink: 'https://youtu.be/4OiMOHRDs14',
      },
      {
        id: '45204234-adfd-45cb-a505-a8e7a676b114',
        netflixLink: 'https://www.netflix.com/title/70035035',
        youtubeLink: 'https://youtu.be/1C9ujuCPlnY',
      },
      {
        id: 'dc2e6bd1-8156-4886-adff-b39e6043af0c',
        netflixLink: 'https://www.netflix.com/title/60023642',
        youtubeLink: 'https://youtu.be/ByXuk9QqQkk',
      },
      {
        id: '90b72513-afd4-4570-84de-a56c312fdf81',
        netflixLink: 'https://www.netflix.com/title/70019058',
        youtubeLink: 'https://youtu.be/Gp-H_YOcYTM',
      },
      {
        id: 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa',
        netflixLink: 'https://www.netflix.com/title/70028883',
        youtubeLink: 'https://youtu.be/iwROgK94zcM',
      },
      {
        id: '112c1e67-726f-40b1-ac17-6974127bb9b9',
        netflixLink: 'https://www.netflix.com/title/70142821',
        youtubeLink: 'https://youtu.be/8hxYx3Jq3kI',
      },
      {
        id: '758bf02e-3122-46e0-884e-67cf83df1786',
        netflixLink: 'https://www.netflix.com/title/70106454',
        youtubeLink: 'https://youtu.be/CsR3KVgBzSM',
      },
      {
        id: '2de9426b-914a-4a06-a3a0-5e6d9d3886f6',
        netflixLink: 'https://www.netflix.com/title/70216227',
        youtubeLink: 'https://youtu.be/9CtIXPhPo0g',
      },
      {
        id: '45db04e4-304a-4933-9823-33f389e8d74d',
        netflixLink: 'https://www.netflix.com/title/70262786',
        youtubeLink: 'https://youtu.be/9nzpk_Br6yo',
      },
      {
        id: '67405111-37a5-438f-81cc-4666af60c800',
        netflixLink: 'https://www.netflix.com/title/70293674',
        youtubeLink: 'https://youtu.be/RzSpDgiF5y8',
      },
      {
        id: '578ae244-7750-4d9f-867b-f3cd3d6fecf4',
        netflixLink: 'https://www.netflix.com/title/80013552',
        youtubeLink: 'https://youtu.be/W71mtorCZDw',
      },
      {
        id: '5fdfb320-2a02-49a7-94ff-5ca418cae602',
        netflixLink: 'https://www.netflix.com/title/80036398',
        youtubeLink: 'https://youtu.be/jjmrxqcQdYg',
      },
      {
        id: 'd868e6ec-c44a-405b-8fa6-f7f0f8cfb500',
        netflixLink: '',
        youtubeLink: 'https://youtu.be/FRFAujm3rik',
      },
      {
        id: '790e0028-a31c-4626-a694-86b7a8cada40',
        netflixLink: 'https://www.netflix.com/title/81316559',
        youtubeLink: 'https://youtu.be/Lk5YWIbwzRE',
      },
    ];

    if (typeof id === 'string') {
      return links.find((link) => link.id === id);
    }

    return links[id];
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
