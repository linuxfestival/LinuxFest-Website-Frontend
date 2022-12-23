<script setup>
    defineProps({
        description: {
            type: String,
            required: true
        },
    })
</script>

<template>
    <div class="kit-empty-state">
        <p class="kit-empty-state__desc">
            {{ description }}
        </p>
        <div class="kit-empty-state__actions">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    .kit-empty-state {
        display: flex;
        flex-direction: column;
        direction: rtl;
    }

    .kit-empty-state__desc {
        color: #252040;
        font-size: 1.2rem;
        text-align: right;
    }

    .kit-empty-state__actions {
        margin-top: 8px;
    }
</style>