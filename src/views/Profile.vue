<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';

</script>

<template>
    <NavBar />
    <div class="profile">
        <div class="profileContainer">
            <div class="stuff">
                <span class="update">Update Account</span>
                <span class="delete">Delete Account</span>
            </div>
            <form  class="form">

                <div class="profilepic">
                    <img src="../assets/images/IMG-20230826-WA0002.jpg" alt="">
                </div>

                <label for="inputfile">
                    <i class="icon fas fa-camera"></i>
                </label>

                <input type="file" id="inputfile">
                
                <label class="label" for="">Username:</label>
                <input class="details" type="text" value="TeQuilaShots">
                <label class="label" for="">Email:</label>
                <input class="details" type="text" value="teQuilaShots@blogpost.com">
                <label class="label" for="">Password:</label>
                <input class="details" type="password" placeholder="********">
                <button>Update</button>
            </form>
        </div>
        <SideBar />
    </div>
</template>

<style scoped>
.profile{
    display: flex;
}
.profileContainer{
    flex: 9;
    padding: 20px;
}
#inputfile{
    display: none;
}
.stuff{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.update{
    font-size: 30px;
    color: coral;
}
.delete{
    font-size: 12px;
    color: red;
    cursor: pointer;
}
.form{
    display: flex;
    flex-direction: column;
}
.profilepic{
    position: relative;
    margin-top: 20px;
}
img{
    border-radius: 50%;
    width: 250px;
    height: 250px;
    object-fit: cover;
}
.icon{
    position: absolute;
    top: 35%;
    right: 87%;
    cursor: pointer;
    font-size: 24px;
    color: aliceblue;
    background-color: lightcoral;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: .5rem;
}
.label{
    margin: 10px 0;
}
.details{
    padding: 10px;
    border: none;
    border-bottom: 1px solid grey;
    font-size: 18px;
}

button{
    padding: 10px;
    width: 30%;
    align-self: center;
    border: none;
    color: wheat;
    background-color: teal;
    margin-top: 20px;
}

@media (max-width: 700px) {
    .profile{
        flex-direction: column;
    }

    img{
        align-self: center;
    }
    .icon{
        right: 50%;
    }
    .stuff{
        padding: 5px;
    }
}
</style>