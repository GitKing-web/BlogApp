<script setup></script>

<template>
    <div class="sidebar">
        <div class="sidebarItem">
            <span class="title">ABOUT ME</span>
            <img src="../assets/images/IMG-20230826-WA0002.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque architecto quis quod, dolor magnam
                corporis natus repellat aspernatur fugit eaque.</p>
        </div>

        <div class="sidebarItem">
            <span class="title">CATEGORIES</span>
            <ul class="lists">
                <li class="list">Fashion</li>
                <li class="list">Photography</li>
                <li class="list">LifeStyle</li>
                <li class="list">Music</li>
                <li class="list">Art</li>
                <li class="list">Nature</li> 
            </ul>
        </div>

        <div class="sidebarItem">
            <span class="title">FOLLOW ME</span>
            <div class="socials">
                <i class="icon fab fa-facebook-square"></i>
                <i class="icon fab fa-twitter-square"></i>
                <i class="icon fab fa-instagram-square"></i>
                <i class="icon fab fa-pinterest-square"></i> 
            </div>
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    flex: 3;
    margin: 20px;
    padding-bottom: 30px;
    background-color: #fdfbfb;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.sidebarItem {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.title {
    width: 80%;
    margin: 10px;
    border-top: 1px solid #a7a4a4;
    border-bottom: 1px solid #a7a4a4;
    padding: 3px;
    font-size: 12px;
    color: #222;
    text-align: center;
    font-weight: 600;
    line-height: 30px;
}

img{
    margin-top: 15px;
    width: 60%;
    height: 80%;
}
.sidebarItem > p {
    padding: 50px; 
    font-size: 12px;
    text-align: left;
}
.lists{
    list-style: none;
    margin-bottom: 30px;
    align-items: center;
}
.list{
    display: inline-block;
    margin-top: 15px;
    width: 50%;
    cursor: pointer;
    text-align: center;
}
.socials {
    margin-top: 15px;
    width: 250px;
    display: flex;align-items: center;
    justify-content: center;
}
.icon{
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
}
</style>