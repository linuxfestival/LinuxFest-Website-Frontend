<template>
  <ContentWithLoader :isLoading="isLoading">
    <Workshops :workshops="workshops" />
    <Calendar :workshops="workshops" />
  </ContentWithLoader>
</template>

<script>
import { showErrorNotif } from '@/utils/notifs'
import ContentWithLoader from '@/components/ContentWithLoader.vue'

import Workshops from './components/Workshops.vue'
import Calendar from './components/Calendar.vue'
import { fetchWorkshops } from './requests'

export default {
  name: 'Content',
  components: { Workshops, Calendar, ContentWithLoader },
  data() {
    return {
      isLoading: true,
      workshops: [
        {
          title: 'test title',
          teachers: {name: 'test name', id: 1}
        },
        
        {
          title: 'test title',
          teachers: [{name: 'test name', id: 1}, {name: 'test name', id: 2}]
        }
      ],
    }
  },

  created() {
    this.isLoading = false
    fetchWorkshops()
      .then((workshops) => {
        this.workshops = workshops
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
