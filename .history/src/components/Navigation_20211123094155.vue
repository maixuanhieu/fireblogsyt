<template>
<header>
    <nav class="container">
        <div class="branding">
            <router-link class="header" :to="{ name: 'Home' }">FireBlogs</router-link>
        </div>
        <div class="nav-links">
            <ul>
               <router-link class="link" to="#">Home</router-link> 
               <router-link class="link" to="#">Home</router-link> 
               <router-link class="link" to="#">Home</router-link> 
               <router-link class="link" to="#">Home</router-link> 
            </ul>
        </div>
    </nav> 
</header>  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>