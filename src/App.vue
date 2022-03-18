<template>
  <the-header></the-header>
  <div class="container">
    <films-random-card></films-random-card>
  </div>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader.vue';
import FilmsRandomCard from '@/components/Films/FilmsRandomCard.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    FilmsRandomCard,
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
