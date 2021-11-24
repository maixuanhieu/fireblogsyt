<template>
  <div class="blog-wrapper">
      <div class="blog-content">
          <div>
              <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
              <h2 v-else>{{ post.title }}</h2>
              <p v-if="post.welcomeScreen">{{ post.blogHTML }}</p>
              <p class="content-preview" v-else>{{ post.blogHTML }}</p>
              <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
                  Login/Register<Arrow class="arrow arrow-light" />
              </router-link>
               <router-link class="link link-light" v-else to="#">
                  View The Post<Arrow class="arrow" />
              </router-link>
          </div>
          <div class="blog-photo">
              <img v-if="post.welcomeScreen" :src="require(../assets/)" alt="" srcset="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "blogPost",
    props: ["post"],
};
</script>

<style lang="scss" scoped>

</style>