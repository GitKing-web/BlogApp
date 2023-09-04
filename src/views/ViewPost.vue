<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
</script>

<template>
    <NavBar />
    <div class="singlepost">
        <div class="post">
            <div class="postwrapper">
                <img src="../assets/images/IMG-20230811-WA0002.jpg" alt="">
                <h1 class="title">Lorem ipsum dolor sit amet.
                    <div class="icons">
                        <i class="edit far fa-edit"></i>
                        <i class="delete far fa-trash-alt"></i>
                    </div>
                </h1>
                <div class="info">
                    <span class="author">Author: <b>TeQuilaShots</b></span>
                    <span class="time"><i>1 hour ago</i></span>
                </div>
                <div class="desc">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa consequatur corporis nemo
                        atque repellat est quibusdam ipsum iste expedita vero excepturi adipisci doloribus mollitia, illo
                        aperiam, vitae dolorem? Numquam.</p>
                </div>
            </div>
        </div>
        <SideBar />
    </div>
</template>

<style scoped>
.singlepost {
    display: flex;
}

.post {
    flex: 9;
}

.title {
    margin: 10px;
    font-size: 24px;
    text-align: center;
}

.postwrapper {
    padding: 10px;
}

img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-radius: 7px;
}
.icons{
    float: right;
    font-size: 24px;
}
.icons .delete{
    color: tomato;
}
.edit, .delete {
    font-size: 25px;
    margin-left: 15px;
    cursor: pointer;
}
.info{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}
.author, .time{
    color: #be9656;
}
.desc p{
    font-size: 18px;
    color: #666;
    line-height: 1.6;
    padding: 2px;
}
.desc p::first-letter{
    margin-left: 20px;
    font-size: 30px;
    font-weight: 600;
}

@media (max-width: 700px) {
    .singlepost{
        flex-direction: column;
    }
}
</style>