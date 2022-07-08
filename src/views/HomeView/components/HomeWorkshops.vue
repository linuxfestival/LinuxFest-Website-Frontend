<script setup>
  import { onBeforeMount } from 'vue';
  import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

  import useHttp from '@/composables/useHttp.js';
  import RetryBox from '@/components/RetryBox.vue';

  import { fetchWorkshops } from '../requests.js'
  import WorkshopBox from './WorkshopBox.vue';

  const {
    isLoading,
    data,
    errorMessage,
    execute
  } = useHttp(fetchWorkshops)

  onBeforeMount(() => {
    execute()
  })
</script>

<template>
  <section class="workshops">
    <h1 class="workshops__title">
      ارائه‌ها و سخنرانی‌ها
    </h1>
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
      <div class="workshops__col" v-for="workshop in data" :key="workshop.id">
        <WorkshopBox v-bind="workshop" />
      </div>
    </div>
  </section>
</template>

<style scoped>
  .workshops {
    max-width: 1366px;
    display: flex;
    flex-direction: column;


    margin: 0 auto;
    padding: 0;
  }

  .workshops__title {
    text-align: center;
    margin: 48px 0 32px 0;
    font-size: 32px;
  }

  .workshops__row {
    display: flex;
    flex-wrap: wrap;
  }

  .workshops__col {
    box-sizing: border-box;
    padding: 16px;
    display: flex;
  }

  .workshops__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 32px 0;
  }

  .workshops__retry-box {
    margin-bottom: 32px;
  }

  @media only screen and (min-width: 1366px) {
    .workshops__col {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
    }
  }

  @media only screen and (max-width: 1366px) {
    .workshops__col {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    .workshops__col {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
</style>
