<template>
  <the-header></the-header>
</template>

<script>
import TheHeader from '@/components/Layout/TheHeader.vue';

export default {
  name: 'App',
  components: { TheHeader },
};
</script>

<style lang="scss">
body {
  font-family: 'Roboto Slab', serif;
}

a {
  text-decoration: none;
}
</style>
