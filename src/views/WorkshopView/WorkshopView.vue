<script setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

import useHttp from '@/composables/useHttp.js';
import RetryBox from '@/components/RetryBox.vue';
import Button from '@/components/Button/index.vue';

import LecturerBox from './components/LecturerBox.vue';
import ItemBox from './components/ItemBox.vue';
import { fetchWorkshop } from './requests.js';

const {
  isLoading,
  data: workshop,
  errorMessage,
  execute
} = useHttp(fetchWorkshop)
const route = useRoute()
const id = route.params.id;

onBeforeMount(() => {
  execute(id)
})

</script>

<template>
  <section class="workshop" v-if="isLoading">
    <SyncLoader :loading="true" color="black" />
  </section>
  <section class="workshp" v-else-if="Boolean(errorMessage)">
    <RetryBox class="workshops__retry-box" :message="errorMessage" @retry="() => execute(id)" />
  </section>
  <section class="workshop" v-else>
    <header class="workshop__header">
      <h1 class="workshop__title">
        {{ workshop.title }}
      </h1>
    </header>
    <main class="workshop__body">
      <ItemBox title="About This Talk">
        <div v-html="workshop.description" />
      </ItemBox>
      <ItemBox title="Time Table">
        <p v-for="time in workshop.times" :key="time.id">{{ time.date }}</p>
      </ItemBox>
      <ItemBox title="Lecturers">
        <LecturerBox v-for="teacher in workshop.teachers" :key="teacher.id" :fullName="teacher.fullName"
          :avatarUrl="teacher.avatarUrl" :avatarAltText="teacher.avatarAltText" :bio="teacher.bio" />
      </ItemBox>
      <ItemBox title="Registration">
        <div class="item-register">
          <p>
            Fee: {{ workshop.isFree ? 'Free' : workshop.price }} |
            Status: {{ workshop.isOpen ? 'Open' : 'Closed' }}
          </p>
          <Button v-if="workshop.isOpen" class="register-button">Register</Button>
        </div>
      </ItemBox>
    </main>
  </section>
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
  max-width: 1140px;
  padding: 0 16px;
  margin: 0 auto;
  margin-top: 32px;
}

.item-register {
  display: flex;
}

.register-button {
  margin-left: auto;
}
</style>