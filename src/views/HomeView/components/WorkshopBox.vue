<script setup>
  import { computed } from 'vue'
  import { RouterLink } from 'vue-router';

  import Button from '@/components/Button/index.vue';
  import * as paths from '@/router/paths.js'

  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    teachers: {
      type: Array,
      default() { return [] }
    } 
  })

  const teachersTitle = computed(() => {
    return props.teachers.length > 1 ? 'مدرسین' : 'مدرس'
  })  

  const workshopLinkTo = computed(() => ({
      name: paths.WORKSHOP.name,
      params: { 'id': props.id }
  }))

</script>
<template>
  <RouterLink :to="workshopLinkTo" class="workshop-box">
    <img src="@/assets/images/workshop-box.png" class="workshop-box__image" alt="workshopname" />
    <div class="workshop-box__info">
      <p class="workshop-box__title">{{title}}</p>
      <p class="workshop-box__teachers-title">
        {{teachersTitle}}
      </p>
      <p class="workshop-box__teacher" v-for="teacher in teachers" :key="teacher.id">{{teacher.name}}</p>

      <Button class="workshop-box__button">
        توضیحات
      </Button>
    </div>
  </RouterLink>
</template>

<style scoped>
  .workshop-box {
    display: flex;
    width: 100%;
    border-radius: 16px;
    background-color: #292929;
    transition: background-color .2s ease-in-out;
    transition: box-shadow .1s ease-in-out;
    height: 250px;
  }

  .workshop-box:hover {
    box-shadow: 0 0 30px rgb(0 0 0 / 30%);
    background-color: #252040;
  }

  .workshop-box__image {
    border-radius: 0 16px 16px 0;
    border-left: 2px solid white;
    flex-shrink: 0;
    width: 40%;
  }

  .workshop-box__info {
    display: flex;
    flex-direction: column;
    padding: 16px;
    color: white;
    flex-grow: 1;
  }

  .workshop-box__title {
    text-align: center;
    direction: rtl;
    font-size: 18px;
    margin: 8px 0 16px 0;
    line-height: 24px;
  }

  .workshop-box__teachers-title {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .workshop-box__teacher:not(:last-of-type) {
    margin-bottom: 8px;
  }

  .workshop-box__button {
    margin-top: auto;
    text-align: center;
    background-color: white;
    color: black;
  }
</style>
