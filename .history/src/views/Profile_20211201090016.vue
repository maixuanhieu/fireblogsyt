<template>
  <div class="profile">
      <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
      <div class="container">
          <h2>Account Settings</h2>
          <div class="profile-info">
              <div class="initials">{{ $store.state.profileInitials }}</div>
              <div class="admin-badge">
                  <adminIcon class="icon" />
                  <span>admin</span>
              </div>

              <div class="input">
                  <label for="firstName">First Name:</label>
                  <input type="text" v-model="firstName" id="firstName" />
              </div>

              <div class="input">
                  <label for="lastName">Last Name:</label>
                  <input type="text" v-model="lastName" id="lastName" />
              </div>

              <div class="input">
                  <label for="username">Username:</label>
                  <input type="text" v-model="userame" id="username" />
              </div>

              <div class="input">
                  <label for="firstName">First Name:</label>
                  <input type="text" v-model="firstName" id="firstName" />
              </div>
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