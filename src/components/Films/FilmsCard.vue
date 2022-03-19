<template>
  <div class="film">
    <div class="d-flex flex-column flex-shrink-0 me-4" v-if="hasPoster">
      <div class="film__poster film__poster--lg">
        <img :src="filmPoster" alt="Film poster">
      </div>
      <a
        class="film__btn"
        v-if="videoLinks.youtubeLink"
        :href="videoLinks.youtubeLink"
        data-fancybox
      >
        Watch Trailer
      </a>
      <a
        class="film__btn film__btn--black"
        v-if="videoLinks.netflixLink"
        :href="videoLinks.netflixLink"
      >
        Watch on Netflix
      </a>
    </div>
    <div class="film__info">
      <h2 class="film__title">{{ selectedFilm.title }}</h2>
      <h3 class="film__subtitle">
        <span>{{ selectedFilm.originalTitle }}</span> ({{ selectedFilm.originalTitleRomanised }})
      </h3>
      <ul class="film__details details">
        <li class="details__item">
          <span class="details__key">Release date:</span>
          <span class="details__value">{{ selectedFilm.releaseDate }}</span>
        </li>
        <li class="details__item">
          <span class="details__key">Directed by:</span>
          <span class="details__value">{{ selectedFilm.director }}</span>
        </li>
        <li class="details__item">
          <span class="details__key">Produced by:</span>
          <span class="details__value">{{ selectedFilm.producer }}</span>
        </li>
        <li class="details__item">
          <span class="details__key">Score:</span>
          <span class="details__value">{{ selectedFilm.score }}</span>
        </li>
      </ul>
      <p class="film__description">{{ selectedFilm.description }}</p>
      <div class="film__footer" v-if="!hasPoster">
        <a
          class="film__btn film__btn--lg"
          v-if="videoLinks.youtubeLink"
          :href="videoLinks.youtubeLink"
          data-fancybox
        >
          Watch Trailer
        </a>
        <a
          class="film__btn film__btn--lg film__btn--black"
          v-if="videoLinks.netflixLink"
          :href="videoLinks.netflixLink"
        >
          Watch on Netflix
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox';
import ApiService from '@/services/ApiService';

Fancybox.bind('[data-fancybox]');

const apiService = new ApiService();

export default {
  name: 'FilmsCard',
  props: {
    selectedFilm: Object,
  },
  data() {
    return {
      videoLinks: {},
    };
  },
  computed: {
    hasPoster() {
      const xhr = new XMLHttpRequest();
      xhr.open('HEAD', this.filmPoster, false);
      xhr.send();

      return xhr.status !== 404;
    },
    filmPoster() {
      return `/posters/${this.selectedFilm.id}.jpg`;
    },
  },
  methods: {
    setStaticData() {
      this.videoLinks = apiService.getStaticData(this.selectedFilm.id);
    },
  },
  mounted() {
    this.setStaticData();
  },
};
</script>

<style lang="scss" scoped>
.film {
  &__info {
    margin: 0;
  }

  &__subtitle {
    font-size: 18px;
    line-height: 24px;
    color: #a3a3a3;
    margin-top: 10px;

    span {
      font-family: 'Roboto', sans-serif;
    }
  }

  &__details {
    margin: 20px 0;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    max-width: 250px;
  }

  &__btn {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 18px;
    color: #ffffff;
    padding: 10px 0;
    margin-top: 15px;
    text-align: center;
    border-radius: 5px;
    background-color: #109CEB;
    -webkit-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;
    -ms-transition: opacity 0.2s ease;
    -o-transition: opacity 0.2s ease;
    transition: opacity 0.2s ease;

    &--lg {
      padding: 10px 50px;
    }

    &--black {
      background-color: #101010;
    }

    &:hover {
      opacity: 0.75;
    }
  }
}

.details {
  &__item {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  &__key, &__value {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
  }

  &__key {
    color: #101010;
  }

  &__value {
    color: #a3a3a3;
    margin-left: 5px;
  }
}
</style>
