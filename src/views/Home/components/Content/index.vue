<template>
  <div>
    <Workshops :workshops="workshops" />
    <Calendar :workshops="workshops" />
  </div>
</template>

<script>
import { showErrorNotif } from '@/utils/notifs';

import Workshops from "./components/Workshops.vue";
import Calendar from "./components/Calendar.vue";
import { fetchWorkshops } from "./requests";

export default {
  name: "Content",
  components: { Workshops, Calendar },
  data() {
    return {
      isLoading: true,
      workshops: [],
    };
  },

  created() {
    fetchWorkshops()
      .then((workshops) => {
        this.workshops = workshops;
      })
      .catch(() => {
        showErrorNotif();
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>
