<template>
  <div class="main">
    <div class="panel">
      <h1 style="margin: 10px 50px; font-family: 'iransans'">
        {{ $t("home.calendar.calendar") }}
      </h1>
      <Timeline>
        <TimelineItem
          v-for="item in timeline"
          bg-color="#fcc113"
          class="time"
          :key="item.id"
          font-color="#ddd"
        >
          {{ item.title }}
          <br />
          <br />
          {{ item.readableDate }}
          <br />
          <br />
          {{ item.teacherNames }}
        </TimelineItem>
      </Timeline>
    </div>
  </div>
</template>

<script>
import { Timeline, TimelineItem } from 'vue-cute-timeline'
import { generateWorkshopsTimeline } from '../utils'

export default {
  components: {
    Timeline,
    TimelineItem,
  },
  props: {
    workshops: { type: Array, required: true },
  },
  computed: {
    timeline() {
      return generateWorkshopsTimeline(this.workshops)
    },
  },
}
</script>

<style scoped>
.main {
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: #252040;
  font-size: 20px;

}
.panel {
  color: white;
  margin: auto;

}
</style>
