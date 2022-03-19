<template>
  <the-header></the-header>
  <div class="container">
    <films-random-card></films-random-card>
    <div class="row">
      <div class="col-3">
        <films-list @change-film="changeFilm"></films-list>
      </div>
      <div class="col-9">
        <base-card>
          <the-loader v-if="loading"></the-loader>
          <films-card v-else :selectedFilm="selectedFilm"></films-card>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader.vue';
import FilmsList from '@/components/Films/FilmsList.vue';
import FilmsCard from '@/components/Films/FilmsCard.vue';
import FilmsRandomCard from '@/components/Films/FilmsRandomCard.vue';

import ApiService from '@/services/ApiService';

const apiService = new ApiService();

export default {
  name: 'App',
  components: {
    TheHeader,
    FilmsList,
    FilmsCard,
    FilmsRandomCard,
  },
  data() {
    return {
      loading: true,
      selectedFilm: {},
    };
  },
  methods: {
    async getFilm(id) {
      this.selectedFilm = await apiService.getFilm(id);
      this.loading = false;
    },
    changeFilm(id) {
      this.loading = true;
      this.getFilm(id);
    },
  },
  mounted() {
    this.getFilm('67405111-37a5-438f-81cc-4666af60c800');
  },
};
</script>

<style lang="scss">
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto Slab', serif;
  margin-bottom: 30px;
}

a {
  text-decoration: none;
}

button {
  border: none;
  cursor: pointer;
}

.film {
  display: flex;

  &__poster {
    flex-shrink: 0;
    max-width: 200px;
    border-radius: 5px;
    overflow: hidden;

    &--lg {
      max-width: 250px;
    }

    img {
      display: block;
      width: 100%;
    }
  }

  &__info {
    margin-left: 25px;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #101010;
  }

  &__description {
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
