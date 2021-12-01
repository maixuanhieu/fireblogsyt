<template>
  <div class="profile">
      <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
      <div class="container">
          <h2>Account Settings</h2>
          <div class="profile-info">
              <div class="initials">{{ }}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>