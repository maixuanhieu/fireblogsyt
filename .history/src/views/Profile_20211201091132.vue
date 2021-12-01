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
                  <input type="text" v-model="username" id="username" />
              </div>

              <div class="input">
                  <label for="email">Email:</label>
                  <input disabled type="text" v-model="email" id="email" />
              </div>

              <button>Save Changes</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.profile{
    .container{
        max-width: 1000px;
        padding: 60px 25px;

        .h2{
            text-align: center;
            margin-bottom: 16px;
            font-weight: 300;
            font-size: 32px;
        }

        .profile-info{
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            padding: 32px;
            background-color: #f1f1f1;
            display: flex;
            flex-direction: column;
            max-width: 600px;
            margin: 32px auto;

            .initials{
                position: absolute;
                width: 80px;
                height: 80px;
                font-size: 32px;
                background-color: #303030;
                color: #fff;
                display: flex;
                align-self: center;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }
        }
    }
}
</style>