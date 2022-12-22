<script setup>
    import { computed } from 'vue';
    import Button from '@/components/Button/index.vue';

    const props = defineProps({
        selectedWorkshops: {
            type: Array,
            required: true
        }
    })

    const selectedCount = computed(() => props.selectedWorkshops.length)
    const isEmpty = computed(() => selectedCount.value === 0)
</script>

<template>
    <div class="register-box">
        <p class="register-box__desc" v-if="isEmpty">
            ورکشاپی برای ثبت‌نام انتخاب نشده است
        </p>
        <p class="register-box__desc" v-else>
            شما {{ selectedCount }} ورکشاپ برای ثبت‌نام انتخاب کرده‌اید.
        </p>
        <Button :disabled="isEmpty" type="submit" variant="primary" class="register-box__button">
            ثبت‌نام
        </Button>
    </div>
</template>

<style scoped>
    .register-box {
        margin-top: 16px;
        padding: 16px;
        
        color: black;

        display: flex;
        flex-direction: column;
        direction: rtl;
    }

    .register-box__button {
        width: fit-content;
    }

    .register-box__desc {
        margin-bottom: 16px;
        text-align: right;
    }
</style>
