<script setup>
import { RouterLink } from 'vue-router';
const showmenu = () => {
    showmenu = !showmenu
}
// function hidemenu(){
// }
</script>

<template>
    <div class="navbar">
            <i class=" show menu fas fa-bars"  @click="showmenu()"></i>
            <div class="nav-left">
                <i class="icon fab fa-facebook-square"></i>
                <i class="icon fab fa-twitter-square"></i>
                <i class="icon fab fa-instagram-square"></i>
                <i class="icon fab fa-pinterest-square"></i> 
            </div>
            
            <div class="nav-center">
                <div class="navs">
            <i class="close menu fas fa-times" @click="hidemenu()"></i>
                <RouterLink to="/">
                    <pre class="navlist">HOME</pre>
                </RouterLink>
                
                <pre class="navlist">ABOUT</pre>
                <pre class="navlist">CONTACT</pre>
                
                <RouterLink to="/makeapost">
                    <pre class="navlist">WRITE</pre>
                </RouterLink>
                <pre class="navlist">LOGOUT</pre>
            </div>
        </div>

        <div class="nav-right">
            <RouterLink :to="{name: 'profile'}">
                <img class="profileImg" src="../assets/images/IMG-20230826-WA0002.jpg" alt="">
            </RouterLink>
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
    z-index: 3;
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
.menu{
    display: none;
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
a{
    text-decoration: none;
    color: #000;
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

@media (max-width: 700px) {
    .menu{
        display: block;
        margin: 15px;
        font-size: 24px;
        cursor: pointer;
    }
    .close{
        position: absolute;
        top: 0%;
        color: #fff;
        right: 20px;
    }
    .nav-left{
        margin-left: 2rem;
    }
    .navs{
        /* display: none; */
        position: absolute;
        top: 0;
        left: -70%;
        /* text-align: center; */
        padding: 2px;
        flex-direction: column;
        width: 70%;
        height: 100vh;
        background-color: tomato;
        z-index: 2;
    }
    .navlist{
        padding: 30px;
        color: aliceblue;
    }
    .navs pre{
        font-size: 15px;
    }
    .search{
        display: none;
    }
}
</style>