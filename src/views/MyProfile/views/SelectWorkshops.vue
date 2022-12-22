<script setup>
  import { onBeforeMount, ref, computed } from 'vue';
  import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

  import useHttp from '@/composables/useHttp.js';
  import RetryBox from '@/components/RetryBox.vue';
  import WorkshopService from '@/services/workshops.js';

  import WorkshopCheckboxVue from '../components/WorkshopCheckbox.vue';
  import RegisterBoxVue from '../components/RegisterBox.vue';

  const {
    isLoading,
    data,
    errorMessage,
    execute
  } = useHttp(WorkshopService.getAll)

  onBeforeMount(() => {
    execute()
  })

  // eslint-disable-next-line no-unused-vars
  const openWorkshops = computed(() => data?.filter?.(({ isRegOpen }) => isRegOpen) || [])
  const selectedWorkshops = ref([])

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
    <form class="workshops__row" v-else>
      <h2 class="workshops__title">ورکشاپ‌های مورد نظر را از لیست زیر انتخاب کنید</h2>
      <WorkshopCheckboxVue 
        v-for="workshop in data" 
        :key="workshop.id" 
        v-bind="workshop"
        v-model="selectedWorkshops"
        :selectable="true"
      />
      <RegisterBoxVue 
        :selected-workshops="selectedWorkshops" 
      />
    </form>
</template>

<style scoped>
.workshops__title {
    text-align: right;
    margin-bottom: 16px;
    font-size: 1.2rem;
}

.workshops__loading {
    margin: 0 auto;
}
</style>