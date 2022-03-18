<template>
  <base-card>
    <div class="film">
      <div class="d-flex flex-column flex-shrink-0">
        <div class="film__poster film__poster--lg">
          <img src="@/assets/posters/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c.jpg" alt="Film poster">
        </div>
        <button class="film__btn">Watch Trailer</button>
      </div>
      <div class="film__info">
        <h2 class="film__title">My Neighbor Totoro</h2>
        <h3 class="film__subtitle">となりのトトロ (Tonari no Totoro)</h3>
        <ul class="film__details details">
          <li class="details__item">
            <span class="details__key">Release date:</span>
            <span class="details__value">1988</span>
          </li>
          <li class="details__item">
            <span class="details__key">Directed by:</span>
            <span class="details__value">Hayao Miyazaki</span>
          </li>
          <li class="details__item">
            <span class="details__key">Produced by:</span>
            <span class="details__value">Hayao Miyazaki</span>
          </li>
          <li class="details__item">
            <span class="details__key">Score:</span>
            <span class="details__value">93</span>
          </li>
        </ul>
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
export default {
  name: 'FilmsCard',
};
</script>

<style lang="scss" scoped>
.film {
  &__subtitle {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #a3a3a3;
    margin-top: 10px;
  }

  &__details {
    margin: 20px 0;
  }

  &__btn {
    font-size: 16px;
    line-height: 18px;
    color: #ffffff;
    padding: 10px 0;
    margin-top: 15px;
    border-radius: 5px;
    background-color: #109CEB;
    -webkit-transition: opacity 0.2s ease;
    -moz-transition: opacity 0.2s ease;
    -ms-transition: opacity 0.2s ease;
    -o-transition: opacity 0.2s ease;
    transition: opacity 0.2s ease;

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
