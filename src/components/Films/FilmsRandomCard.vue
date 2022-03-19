<template>
  <base-card>
    <the-loader v-if="loading"></the-loader>
    <div class="film" v-else>
      <div class="film__poster">
        <img :src="filmPoster" alt="Film poster">
      </div>
      <div class="film__info">
        <h2 class="film__title">{{ randomFilm.title }}</h2>
        <p class="film__date">{{ randomFilm.releaseDate }}</p>
        <p class="film__description">{{ randomFilm.description }}</p>
      </div>
    </div>
  </base-card>
</template>

<script>
import ApiService from '@/services/ApiService';

const apiService = new ApiService();

export default {
  name: 'FilmsRandomCard',
  data() {
    return {
      loading: true,
      randomFilm: {},
    };
  },
  methods: {
    async getFilm() {
      this.loading = true;
      const id = this.getRandomId();
      this.randomFilm = await apiService.getFilm(id);
      this.loading = false;
    },
    getRandomId() {
      const randomNum = Math.floor(Math.random() * 20);
      return apiService.getStaticData(randomNum).id;
    },
  },
  computed: {
    filmPoster() {
      return `${process.env.BASE_URL}posters/${this.randomFilm.id}.jpg`;
    },
  },
  mounted() {
    this.getFilm();
    setInterval(() => {
      this.getFilm();
    }, 7500);
  },
};
</script>

<style lang="scss" scoped>
.film {
  &__info {
    max-width: 800px;
  }

  &__date {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #a3a3a3;
    margin: 10px 0 20px;
  }
}
</style>
