<template>
  <base-card>
    <ul class="film-list">
      <li class="film-list__item">My Neighbor Totoro</li>
      <li class="film-list__item">My Neighbor Totoro</li>
      <li class="film-list__item">My Neighbor Totoro</li>
      <li class="film-list__item">My Neighbor Totoro</li>
      <li class="film-list__item">My Neighbor Totoro</li>
    </ul>
  </base-card>
</template>

<script>
import BaseCard from '@/components/Base/BaseCard.vue';

export default {
  name: 'FilmsList',
  components: { BaseCard },
};
</script>

<style lang="scss" scoped>
.film-list {
  &__item {
    font-size: 16px;
    line-height: 22px;
    color: #101010;
    cursor: pointer;
    padding: 10px 0;
    -webkit-transition: color 0.2s linear;
    -moz-transition: color 0.2s linear;
    -ms-transition: color 0.2s linear;
    -o-transition: color 0.2s linear;
    transition: color 0.2s linear;
    border-bottom: 1px solid #a3a3a3;

    &:hover {
      color: #109ceb;
    }
  }
}
</style>
