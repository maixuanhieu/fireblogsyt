<template>
    <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <router-link class="header" :to="{ name: 'home'}">
                        FireBlogs
                    </router-link>
                    <ul>
                        <li>
                            <a href="#"><youTube class="svg-icon" /></a>
                        </li>

                        <li>
                            <a href="#"><twitter class="svg-icon" /></a>
                        </li>

                        <li>
                            <a href="#"><instagram class="svg-icon" /></a>
                        </li>

                        <li>
                            <a href="#"><linkedin class="svg-icon" /></a>
                        </li>
                    </ul>
                </div>

                <div class="col-2">
                    <ul>
                        <router-link class="link" ></router-link>
                        <router-link></router-link>
                        <router-link></router-link>
                        <router-link></router-link>
                    </ul>
                </div>

            </div>
            <div class="right">
                <p>Copyright 2021 All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>