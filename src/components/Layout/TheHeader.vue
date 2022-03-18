<template>
  <header class="header">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <a class="logo" href="/">Studio Ghibli Films</a>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a class="nav__link" href="#">Posters</a>
            </li>
            <li class="nav__item">
              <a class="nav__link" href="#">Illustrator</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style lang="scss" scoped>
@mixin whiteToBlue {
  color: #ffffff;
  -webkit-transition: color 0.2s linear;
  -moz-transition: color 0.2s linear;
  -ms-transition: color 0.2s linear;
  -o-transition: color 0.2s linear;
  transition: color 0.2s linear;

  &:hover {
    color: #109ceb;
  }
}

.header {
  padding: 15px 0;
  background-color: #101010;
}

.logo {
  font-size: 32px;
  line-height: 42px;
  @include whiteToBlue();
}

.nav {
  &__list {
    display: flex;
  }

  &__item {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  &__link {
    font-size: 18px;
    line-height: 24px;
    @include whiteToBlue();
  }
}
</style>
