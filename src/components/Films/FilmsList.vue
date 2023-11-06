<template>
  <base-card>
    <the-loader v-if="loading"></the-loader>
    <ul class="film-list" v-else>
      <li class="film-list__item" v-for="film in films" :key="film.id">
        <a class="film-list__link"
           :class="{'active': film.id === selectedFilmId}"
           href="#"
           @click.prevent="changeFilm(film.id)"
        >
          {{ film.title }}
        </a>
      </li>
    </ul>
  </base-card>
</template>

<script>
import ApiService from '@/services/ApiService';

const apiService = new ApiService();

export default {
  name: 'FilmsList',
  emits: ['changeFilm'],
  data() {
    return {
      films: [],
      loading: true,
      selectedFilmId: '67405111-37a5-438f-81cc-4666af60c800',
    };
  },
  methods: {
    async getFilms() {
      this.films = await apiService.getFilms('/films');
      this.loading = false;
    },
    changeFilm(filmId) {
      this.selectedFilmId = filmId;
      this.$emit('changeFilm', filmId);
    },
  },
  mounted() {
    this.getFilms();
  },
};
</script>

<style lang="scss" scoped>
.film-list {
  &__link {
    display: block;
    font-size: 16px;
    line-height: 22px;
    color: #101010;
    padding: 10px 0;
    -webkit-transition: color 0.2s linear;
    -moz-transition: color 0.2s linear;
    -ms-transition: color 0.2s linear;
    -o-transition: color 0.2s linear;
    transition: color 0.2s linear;
    border-bottom: 1px solid #a3a3a3;

    &:hover, &.active {
      color: #109ceb;
    }
  }
}
</style>
