<script setup>
  import { onBeforeMount, computed } from 'vue';
  import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

  import useHttp from '@/composables/useHttp.js';
  import RetryBox from '@/components/RetryBox.vue';
  import Button from '@/components/Button/index.vue';
  import EmptyState from '@/components/EmptyState.vue';
  import WorkshopService from '@/services/workshops.js';

  import WorkshopCheckboxVue from '../components/WorkshopCheckbox.vue';

  const {
    isLoading,
    data: workshops,
    errorMessage,
    execute: fetchMyWorkshops
  } = useHttp(WorkshopService.getMyWorkshops)

  onBeforeMount(() => {
    fetchMyWorkshops()
  })

  const isListEmpty = computed(() => workshops.value.length === 0);
</script>

<template>
    <div v-if="isLoading" class="workshops__loading">
      <SyncLoader
        :loading="true"
        color="black"
      />
    </div>
    <RetryBox class="workshops__retry-box" v-else-if="Boolean(errorMessage)"
      :message="errorMessage"
      @retry="execute"
    />
    <div class="workshops__row" v-else>
      <h2 class="workshops__title">ورکشاپ‌های شما</h2>
      <WorkshopCheckboxVue 
        v-for="workshop in workshops" 
        :key="workshop.id" 
        :selectable="false"
        v-bind="workshop"
      />
      <EmptyState v-if="isListEmpty" class="workshops__empty" description="شما در ورکشاپی ثبت‌نام نکرده‌اید">
        <RouterLink to="/me/register-workshops">
            <Button variant="primary">
                مشاهده لیست ارائه‌ها و ثبت‌نام
            </Button>
        </RouterLink>
      </EmptyState>
      <RouterLink v-else to="/me/register-workshops" class="workshops__register-link">
        <Button variant="primary">
            مشاهده لیست ارائه‌ها و ثبت‌نام
        </Button>
      </RouterLink>
    </div>
</template>

<style scoped>
.workshops__title {
    text-align: right;
    margin-bottom: 16px;
    font-size: 1.2rem;
}

.workshops__loading {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.workshops__register-link {
    display: flex;
    direction: rtl;
    width: fit-content;
    margin-left: auto;
    margin-top: 32px;
}

.workshops__empty {
    margin-top: 16px;
}
</style>