<script setup></script>

<template>
    <div class="header">
        <div class="titles">
            <pre class="title">The TeQuila</pre>
            <span class="title1">Blog</span>
        </div>
        <img src="../assets/images/rose.png" alt="">
    </div>
</template>

<style scoped>
.header{
    margin-top: 60px;
}
.titles{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #444;
}
.title{
    position: absolute;
    font-size: 25px;
    top: 18%;
}
.title1{
    position: absolute;
    top: 20%;
    font-size: 150px;
    font-style: italic;
    color: #444;
}

img{
    width: 100%;
    height: 70vh;
    margin-top: 150px;
    object-fit: cover;
}
</style>