<script setup>
import { storeToRefs } from 'pinia';

import LoginRequired from '@/components/LoginRequired.vue';
import useAuthStore from '@/stores/auth.js';

import UserInfo from './components/UserInfo.vue';

const authStore = useAuthStore()

const { user } = storeToRefs(authStore)
</script>

<template>
    <LoginRequired>
        <section class="workshop">
            <header class="workshop__header">
                <h1 class="workshop__title">
                    حساب کاربری
                </h1>
            </header>
            <main class="workshop__body">
                <div class="user__view">
                    <RouterView />
                </div>
                <div class="user__sidebar">
                    <UserInfo :firstName="user.firstName" :lastName="user.lastName" :phoneNumber="user.phoneNumber"
                        :email="user.email" />
                </div>
            </main>
        </section>
    </LoginRequired>
</template>

<style scoped>
.workshop {
    direction: ltr;
    text-align: left;
}

.workshop__header {
    min-height: 200px;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    /* TODO: Background image is too large, optimize and reduce size */
    background-image: url('../../assets/images/workshop-backgrund.png');
    background-repeat: no-repeat;
    background-position: 90%;
}

.workshop__title {
    color: white;
    font-size: 2.5rem;
    text-align: center;
}

.workshop__body {
    width: 100%;
    max-width: 1400px;
    padding: 0 16px;
    margin: 0 auto;
    margin-top: 32px;
    display: flex;
}

.user__sidebar {
    width: 350px;
    border-radius: 4px;
}

.user__view {
    width: calc(100% - 374px);
    margin-right: 24px;
    border-radius: 4px;
}
</style>