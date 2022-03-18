<template>
  <base-card>
    <div class="film">
      <div class="film__poster">
        <img src="@/assets/posters/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c.jpg" alt="Film poster">
      </div>
      <div class="film__details">
        <h2 class="film__title">My Neighbor Totoro</h2>
        <p class="film__date">1988</p>
        <p class="film__description">
          Two sisters move to the country with their father in order to be closer to their
          hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical
          spirits of the forest. When the youngest runs away from home, the older sister seeks help
          from the spirits to find her.
        </p>
      </div>
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/Base/BaseCard.vue';

export default {
  name: 'FilmsRandomCard',
  components: { BaseCard },
};
</script>

<style lang="scss" scoped>
.film {
  &__details {
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
