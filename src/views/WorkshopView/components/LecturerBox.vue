<script setup>
    defineProps({
        fullName: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
        },
        avatarUrl: {
            type: String,
            required: true
        },
        avatarAltText: {
            type: String,
            required: true
        },
    })
</script>

<template>
    <div class="lecturer">
        <img :src="avatarUrl" :alt="avatarAltText" class="lecturer__avatar" draggable="false" />
        <div class="lecturer__info">
            <h3 class="lecturer__name">
                {{ fullName }}
            </h3>
            <p class="lecturer__bio">
                {{ bio }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.lecturer {
    direction: ltr;
    display: flex;
}

.lecturer:not(:first-child) {
    margin-top: 12px;
}

.lecturer__name {
    direction: ltr;
    text-align: left;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
}

.lecturer__avatar {
    width: 150px;
    height: 150px;
    border-radius: 4px;
    margin-right: 12px;
}

.lecturer__bio {
    direction: ltr;
    text-align: left;
    font-size: 1.2rem;
    margin-top: 4px;
    line-height: 32px;
}
</style>