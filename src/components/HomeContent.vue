<template>
    <div class="parent">
        <div class="top child"></div>
        <div class="child">
            <p class="about-event">{{aboutThisEvent}}</p>
        </div>
        <div class="workshops child"></div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data:function () {
            return{
                aboutThisEvent: 'haloooooooooooooo'
            }
        }
    }
</script>

<style scoped>
.about-event{
    font-size: 18px;
    color: white;
    background-color: #521c34;
}
</style>