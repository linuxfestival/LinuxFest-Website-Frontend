<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="workshop__item-box">
        <h2 class="workshop__item-title">{{title}}</h2>
        <div class="workshop__item-desc">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.workshop__item-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    box-sizing: border-box;

    background-color: #333;
    border-radius: 4px;
    margin-bottom: 16px;
}

.workshop__item-title {
    color: #fcc113;
    font-size: 2rem;

    direction: ltr;
    text-align: left;
}

.workshop__item-desc {
    margin-top: 16px;
    color: #f9f9f9;
    font-size: 1.5rem;

    direction: ltr;
    text-align: left;
    line-height: 38px;

    padding-left: 24px;
}
</style>