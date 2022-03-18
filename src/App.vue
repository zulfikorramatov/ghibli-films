<template>
  <the-header></the-header>
  <div class="container">
    <films-random-card></films-random-card>
    <div class="row">
      <div class="col-3">
        <films-list></films-list>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader.vue';
import FilmsRandomCard from '@/components/Films/FilmsRandomCard.vue';
import FilmsList from '@/components/Films/FilmsList.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    FilmsRandomCard,
    FilmsList,
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Roboto Slab', serif;
}

a {
  text-decoration: none;
}

.film {
  display: flex;

  &__poster {
    flex-shrink: 0;
    max-width: 200px;
    margin-right: 25px;
    border-radius: 5px;
    overflow: hidden;

    &--lg {
      width: 250px;
    }

    img {
      display: block;
      width: 100%;
    }
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
