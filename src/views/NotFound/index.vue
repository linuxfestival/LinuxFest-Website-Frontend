<template>
    <div class="notFoundPage">
        <img class="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/2048px-Icons8_flat_linux.svg.png" alt="">

        <div class="info">
            <h1 class="title">اشتباه اومدی!</h1>
            <h1 class="number title">404</h1>
            <router-link to="/" class=" btn">صفحه اصلی</router-link>
        </div>
    </div>
</template>


<!-- <script>
    export default {
        methods() {
            go
        }
    }
</script> -->


<style>
    .notFoundPage {
        width: 100%;
        padding-top: 40px;
        padding-bottom: 40px;
        min-height: calc(100vh);
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        /* background-image: ; */
    }

    .image {
        width: 40%;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        user-select: none;
    }

    .title {
        font-size: 100px;
        color: var(--mainColor);
        text-shadow: 0px 0px 13px var(--mainColor);
    }

    .number {
        color: var(--secondryColor);
    }

    .btn {
        border-radius: 10px;
        padding: 15px 50px;
        background: var(--secondryColor);
        outline: none;
        transition: 250ms;
    }

    .btn:hover {
        padding: 15px 60px;
    }
    
</style>