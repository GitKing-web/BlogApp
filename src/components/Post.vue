<script setup></script>

<template>
    <div class="post">
        <img src="../assets/images/IMG-20230811-WA0002.jpg" alt="">

        <div class="postInfo">
            <div class="postCategory">
                <span class="category">Photography</span>
                <span class="category">LifeStyle</span>
            </div>
            <span class="title">Lorem ipsum dolor sit amet</span>
            <hr />
            <span class="time">1 hour ago</span>
        </div>
        <p class="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem provident officiis, ea eaque
            officia iste cumque incidunt iusto odio doloremque laborum aspernatur, quas saepe consectetur voluptas earum
            distinctio mollitia facilis.</p>
    </div>
    <div class="post">
        <img src="../assets/images/IMG-20230826-WA0001.jpg" alt="">

        <div class="postInfo">
            <div class="postCategory">
                <span class="category">Art</span>
                <span class="category">Nature</span>
            </div>
            <span class="title">Lorem ipsum dolor sit amet</span>
            <hr />
            <span class="time">4 hour ago</span>
        </div>
        <p class="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem provident officiis, ea eaque
            officia iste cumque incidunt iusto odio doloremque laborum aspernatur, quas saepe consectetur voluptas earum
            distinctio mollitia facilis.</p>
    </div>
</template>

<style scoped>
.post {
    width: 385px;
    margin: 0px 25px 40px 25px;
}

img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 7px;
}

.postInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.postCategory {
    font-size: 12px;
    color: #be9656;
    line-height: 20px;
}

.category {
    margin: 15px;
    margin-right: 10px;
}

.title {
    font-size: 24px;
    font-weight: 700;
    margin-top: 15px;
    cursor: pointer;
}

.time {
    color: #999;
    font-style: italic;
    margin-top: 15px;
}
.desc{
    color: #444;
    font-size: 14px;
    line-height: 24px;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>