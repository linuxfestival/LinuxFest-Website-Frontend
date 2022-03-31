<template>
  <ContentWithLoader class="parent" :isLoading="isLoading">
    <PartialHeader :title="workshop.title" />
    <div class="workshopContentWrapper" dir="ltr">
      <div class="workshopContent">
        <TeachersDescription :teachers="workshop.teachers" />
        <TeacherImages :teachers="workshop.teachers" />
        <Description
          :registerButtonId="workshop.id"
          :description="workshop.description"
          :prerequisites="workshop.prerequisites"
          :isRegOpen="workshop.isRegOpen"
          :price="workshop.price"
          :times="workshop.times"
        />
      </div>
    </div>
  </ContentWithLoader>
</template>

<script>
import PartialHeader from '@/components/PartialHeader'
import ContentWithLoader from '@/components/ContentWithLoader'
import { showErrorNotif } from '@/utils/notifs'

import TeachersDescription from './components/TeachersDescription.vue'
import TeacherImages from './components/TeacherImages.vue'
import Description from './components/Description.vue'
import { fetchWorkshopById } from './requests'

export default {
  name: 'WorkshopMoreContent',
  components: {
    PartialHeader,
    TeacherImages,
    Description,
    TeachersDescription,
    ContentWithLoader,
  },
  data() {
    return {
      workshop: {},
      isLoading: true,
    }
  },
  created() {
    const { id } = this.$route.params
    fetchWorkshopById(id)
      .then((workshop) => {
        this.workshop = workshop
      })
      .catch(() => {
        showErrorNotif()
      })
      .finally(() => {
        this.isLoading = false
      })
  },
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

@media only screen and (max-width: 1100px) {
  .workshopContent {
    flex-direction: column-reverse;
    border-radius: 0;
  }
}
</style>
