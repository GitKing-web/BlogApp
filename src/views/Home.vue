<script setup>
import NavBar from '../components/NavBar.vue';
import Header from '../components/Header.vue';
import Posts from '../components/Posts.vue';
import SideBar from '../components/SideBar.vue';

</script>

<template>
    <NavBar />
    <Header />
    <div class="body">
        <Posts />
        <SideBar />
    </div>
</template>

<style scoped>
.body{
    display: flex;
}
</style>