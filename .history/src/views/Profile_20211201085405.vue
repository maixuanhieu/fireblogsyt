<template>
  <div class="profile">
      <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="c" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>