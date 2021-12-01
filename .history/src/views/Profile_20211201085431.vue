<template>
  <div class="profile">
      <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
      <div class="container">
          <h2>Acco</h2>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>