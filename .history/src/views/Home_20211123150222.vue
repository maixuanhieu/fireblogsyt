<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost/>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost"
export default {
  name: "Home",
  components: { BlogPost },
  data(){
    return{
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
        "Weekly blog articles with all things programming including HTML, CSS, Javascript and more. Register today to never miss a post.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
