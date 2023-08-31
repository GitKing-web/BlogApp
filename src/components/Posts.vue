<script setup>
import Post from './Post.vue';
</script>

<template>
    <div class="posts">
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
</template>

<style scoped>
.posts{
    flex: 9;
    display: flex;
    margin: 20px;
    flex-wrap: wrap;
}
</style>