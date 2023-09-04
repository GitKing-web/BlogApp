<script setup>
import NavBar from '../components/NavBar.vue';


</script>

<template>
    <NavBar />
    <div class="write">
        <img src="../assets/images/IMG-20230826-WA0001.jpg" alt="">
        <form class="form">
            <div class="stuff">
                <label for="fileInput">
                    <i class="icon fas fa-plus"></i>
                </label>
                <!-- <span>Add Image</span> -->
                <input type="file" id="fileInput">
                <input type="text" placeholder="Title" class="input title" autofocus="true">
            </div>
            <div class="stuff">
                <textarea placeholder="Tell your story..." class="input text"></textarea>
            </div>
            <button class="submit">Publish</button>
        </form>
    </div>
</template>

<style scoped>
#fileInput{
    display: none;
    cursor: pointer;
}
.title{
    outline: none;
}
.write{
    margin-top: 50px;
}
.stuff{
    margin-left: 150px;
    display: flex;
    align-items: center;
}
.icon{
    width: 30px;
    height: 30px;
    color: gray;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    font-weight: 400;
}

img{
    width: 70vw;
    margin-left: 200px;
    border-radius: 20px;
    padding: 8px;
    height: 50vh;
    object-fit: cover;
}
.form{
    position: relative;
}
.input{
    font-size: 30px;
    border: none;
    padding: 20px;
    width: 70vw;
}
.text{
    font-size: 20px;
    height: 100vh;
}
.text:focus{
    outline: none;
}
.submit{
    position: absolute;
    top: 20%;
    right: 60px;
    color: aliceblue;
    background-color: teal;
    padding: 15px;
    border: none;
    cursor: pointer;
    font-size: 18px;
}

@media (max-width: 700px) {
    img{
        margin: 0;
        /* margin-left: 0; */
        width: 100vw;
    }
    .stuff{
        margin: 0;
        width: 100vw;
        margin: 10px;
        position: relative;
    }
}
</style>