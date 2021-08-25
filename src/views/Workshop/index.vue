<template>
  <p v-if="isLoading">Loading...</p>
  <div
    class="parent"
    v-else
  >
    <PartialHeader :title="workshop.title" />
    <div class="workshopContentWrapper">
      <div class="workshopContent">
        <TeachersDescription :teachers="workshop.teachers" />
        <TeacherImages :teachers="workshop.teachers" />
        <Description
          :registerButtonId="workshop.id"
          :description="workshop.description"
          :isRegOpen="workshop.isRegOpen"
          :price="workshop.price"
          :times="workshop.times"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PartialHeader from '@/components/PartialHeader'

import TeachersDescription from './components/TeachersDescription.vue';
import TeacherImages from './components/TeacherImages.vue';
import Description from './components/Description.vue';
import { fetchWorkshopById } from './requests';

export default {
  name: "WorkshopMoreContent",
  components: {
    PartialHeader,
    TeacherImages,
    Description,
    TeachersDescription
  },
  data() {
    return {
      workshop: {},
      isLoading: true,
    }
  },
  created() {
    const {
      id
    } = this.$route.params;
    fetchWorkshopById(id)
      .then(workshop => {
        this.workshop = workshop;
      })
      .finally(() => {
        this.isLoading = false;
      })
  }
}
</script>

<style scoped>
.workshopContentWrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 60px;
}

.workshopContent {
  width: 1140px;
  min-height: 400px;
  background-color: #333;
  border-radius: 15px;
  display: flex;
}

.parent {
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

i.material-icons.rotate-180 {
  transform: rotate(180deg);
}

@media only screen and (max-width: 1100px ) {
  .workshopContent {
    flex-direction: column-reverse;
    border-radius: 0;
  }
}
</style>
