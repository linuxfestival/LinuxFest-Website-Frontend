<script setup>
    defineProps({
        name: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <span class="material-symbols-outlined">
        {{ name }}
    </span>
</template>