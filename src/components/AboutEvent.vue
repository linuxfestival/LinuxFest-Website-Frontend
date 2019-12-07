<template>
    <div class="about-event">
        <div><h1>درباره این ایونت</h1>
            <p class="about-event">{{ aboutThisEvent}}</p>
        </div>
        <div class="image">
            <img src="../assets/pinguin.png" alt="PINGUIN">
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutEvent",
        data: function () {
            return {
                aboutThisEvent: 'Default'
            }
        }
    }
</script>

<style scoped>
    div.about-event {
        background-color: #521c34;
        min-height: 300px;
        padding: 10px 50px 10px 50px;
        text-align: right;
    }
    p.about-event {
        color: white;
        z-index: 1;
    }
    .about-event {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        position: relative;
    }
    .about-event h1 {
        color: #e4b22b;
        font-size: 40px;
    }
    img {
        width: 1000px;
        height: 100%;
        position: absolute;
        left: -300px;
        top: 0;
    }
</style>