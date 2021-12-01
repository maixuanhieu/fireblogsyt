<template>
  <div class="admin">
    <div class="container">
      <h2>Administration</h2>
      <div class="admin-info">
        <h2>Add Admin</h2>
        <div class="input">
          <input placeholder="Enter user email to make them an admin" type="text" id="addAdmins" v-model="adminEmail" />
        </div>
        <span>{{ this.functionMsg }}</span>
        <button class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.admin{
  .container{
    max-width: 1000px;
    pa
  }
}
</style>