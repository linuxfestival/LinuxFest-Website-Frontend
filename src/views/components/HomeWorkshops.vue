<script setup>
  import WorkshopBox from './WorkshopBox.vue';
</script>
<template>
  <section class="workshops">
    <h1 class="workshops__title">
      ارائه‌ها و سخنرانی‌ها
    </h1>
    <div class="workshops__row">
      <div class="workshops__col">
        <WorkshopBox />
      </div>
      <div class="workshops__col">
        <WorkshopBox />
      </div>
      <div class="workshops__col">
        <WorkshopBox />
      </div>
      <div class="workshops__col">
        <WorkshopBox />
      </div>
      <div class="workshops__col">
        <WorkshopBox />
      </div>
      <div class="workshops__col">
        <WorkshopBox />
      </div>
      <div class="workshops__col">
        <WorkshopBox />
      </div>
      <div class="workshops__col">
        <WorkshopBox />
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
    max-height: 278px;
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
