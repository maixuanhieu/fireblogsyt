<template>
  <div class="reset-password">
    <div class="form-wrap">
      <form class="reset">
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
}
</script>

<style lang="scss" scoped>

</style>