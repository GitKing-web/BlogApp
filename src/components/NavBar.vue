<script setup></script>

<template>
    <div class="navbar">
        <div class="nav-left">
            <i class="icon fab fa-facebook-square"></i>
            <i class="icon fab fa-twitter-square"></i>
            <i class="icon fab fa-instagram-square"></i>
            <i class="icon fab fa-pinterest-square"></i> 
        </div>

        <div class="nav-center">
            <div class="navs">
                <pre class="navlist">HOME</pre>
                <pre class="navlist">ABOUT</pre>
                <pre class="navlist">CONTACT</pre>
                <pre class="navlist">WRITE</pre>
                <pre class="navlist">LOGOUT</pre>
            </div>
        </div>

        <div class="nav-right">
            <img class="profileImg" src="../assets/images/IMG-20230826-WA0002.jpg" alt="">
            <i class="search fas fa-search"></i>
        </div>
    </div>
</template>

<style scoped>
.navbar{
    background-color: #fff;
    width: 100%;
    height: 60px;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 999;
}
.nav-left, .nav-right{
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon{
    font-size: 24px;
    margin: 10px;
    cursor: pointer;
    color: #444;
}
.nav-center{
    flex: 6;
}
.navs{
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}
.navlist{
    margin-right: 15px;
    font-size: 25px;
    font-weight: 50;
    cursor: pointer;
}
.profileImg{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}
.search{
    font-size: 18px;
    margin-left: 15px;
    color: #666;
    cursor: pointer;
}
</style>