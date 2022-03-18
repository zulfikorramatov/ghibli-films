<template>
  <the-header></the-header>
  <div class="container">
    <films-random-card></films-random-card>
    <div class="row">
      <div class="col-3">
        <films-list></films-list>
      </div>
      <div class="col-9">
        <films-card></films-card>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader.vue';
import FilmsList from '@/components/Films/FilmsList.vue';
import FilmsCard from '@/components/Films/FilmsCard.vue';
import FilmsRandomCard from '@/components/Films/FilmsRandomCard.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    FilmsList,
    FilmsCard,
    FilmsRandomCard,
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Roboto Slab', serif;
  margin-bottom: 30px;
}

a {
  text-decoration: none;
}

button {
  font-family: 'Roboto', sans-serif;
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
