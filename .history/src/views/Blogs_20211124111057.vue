<template>
      <div class="blog-card-wrap">
          <div class="blog-cards container">
              <div class="toggle-edit">
                  <span>Toggle Editing Post</span>
                  <input type="checkbox" v-model="editPost" name="" id="">
              </div>
              <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
          </div>
      </div>
</template>

<script>
export default {
    name: "blogs",
    components: {},
    computed: {
        sampleBlogCards(){
            return this.$store.state.sampleBlogCards;
    },
}
</script>

<style>

</style>