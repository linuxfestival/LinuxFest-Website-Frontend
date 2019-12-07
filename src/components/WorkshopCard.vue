<template>
    <div class="main-frame">
        <div class="left"></div>
        <div class="right"></div>
    </div>
</template>

<script>
    export default {
        name: "WorkshopCard",
        data: function () {
            return {
                workshop:{
                    name: '',
                    teacher: '',
                    photo: ''
                }
            }
        }
    }
</script>

<style scoped>
    .main-frame{
        width: 150px;
        height: 70px;
    }
    .left{
        background-color: #292929;
    }
    .right{
        background-color: white;
    }
</style>