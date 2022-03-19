<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>

<style scoped>
.card {
  padding: 30px;
  margin-top: 30px;
  min-height: 360px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 48px 100px rgba(17, 12, 46, 0.15);
}
</style>
