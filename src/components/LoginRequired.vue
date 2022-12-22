<script setup>
    import { storeToRefs } from 'pinia';

    import useAuthStore from '@/stores/auth.js';

    const authStore = useAuthStore()

    const { isLoggedIn } = storeToRefs(authStore) 
</script>

<template>
    <slot v-if="isLoggedIn" />
    <div v-else>Login Required.</div>
</template>