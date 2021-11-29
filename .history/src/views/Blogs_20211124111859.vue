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
import BlogCard from "../components/BlogCard";
export default {
    name: "blogs",
    components: { BlogCard },
    computed: {
        sampleBlogCards(){
            return this.$store.state.sampleBlogCards;
    },
    },
}
</script>

<style lang="scss" scoped>
input[type="checkbox"]{
    position: relative;
    border: none;
    -webkit-appearance: none;
    background: 
}
</style>