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
                <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="" srcset="">
                <img v-else :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="" srcset="">
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

.blog-wrapper{
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    @media(min-width: 700px){
        min-height: 650px;
        max-height: 650px;
        flex
    } 
}

</style>