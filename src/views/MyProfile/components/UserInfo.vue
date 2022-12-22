<script setup>
    import { computed } from 'vue';

    import Button from '@/components/Button/index.vue'

    const props = defineProps({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        }
    })

    const fullName = computed(() => `${props.firstName} ${props.lastName}`)

    console.log(fullName)
</script>

<template>
    <div class="user__info">
        <h3 class="user__info-title">اطلاعات شخصی شما</h3>
        <div class="user__info-box">
            <p class="user__info-box-title">
                نام و نام خانوادگی:
            </p>
            <p class="user__info-box-value">
                {{ fullName }}
            </p>
        </div>
        <div class="user__info-box">
            <p class="user__info-box-title">
                شماره تماس:
            </p>
            <p class="user__info-box-value">
                {{ phoneNumber }}
            </p>
        </div>
        <div class="user__info-box">
            <p class="user__info-box-title">
                ایمیل:
            </p>
            <p class="user__info-box-value">
                {{ email }}
            </p>
        </div>
        <RouterLink class="user__info-button" to="/me/edit">
            <Button variant="secondary">ویرایش اطلاعات</Button>
        </RouterLink>
    </div>
</template>

<style scoped>
    .user__info {
        background-color: #444;
        padding: 16px;
        box-sizing: border-box;
        border-radius: 4px;
        height: fit-content;

        display: flex;
        flex-direction: column;
        direction: rtl;
    }

    .user__info-title {
        color: white;
        font-size: 1.3rem;
        text-align: right;
        line-height: 28px;
        padding-bottom: 8px;
        border-bottom: 1px solid #f9f9f9;
    }

    .user__info-box {
        display: flex;
        flex-direction: column;
        color: white;
        text-align: right;
    }

    .user__info-box:not(:first-of-type) {
        margin-top: 16px;
    }
    .user__info-box-title {
        font-size: 1.1rem;
        line-height: 2.5;
    }

    .user__info-box-value {
        margin-top: 5px;
    }

    .user__info-button {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
    }
</style>