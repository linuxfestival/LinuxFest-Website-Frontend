<template>
  <div class="main">
    <div class="panel">
      <h1 style="margin:10px 50px; font-family: 'iransans'">{{$t('home.calendar.calendar')}}</h1>
    <Timeline>
      <TimelineItem
        v-for="item in timeline"
        bg-color="#e4b22b"
        class="time"
        :key="item.id"
        font-color="#ddd"
      >
        {{item.title}}
        <br/>
        <br/>
        {{item.readableDate}}
        <br/>
        <br/>
        {{item.teacherNames}}
      </TimelineItem>
    </Timeline>
    </div>
  </div>
</template>

<script>
import { Timeline, TimelineItem } from 'vue-cute-timeline'
import { generateWorkshopsTimeline } from '../utils';

export default {
  components: {
    Timeline,
    TimelineItem,
  },
  props: {
    workshops: { type: Array, required: true }
  },
  computed: {
    timeline() {
      return generateWorkshopsTimeline(this.workshops);
    }
  },
}
</script>

<style scoped>
  .main{
    padding: 30px;
    display: flex;
    flex-direction: column;
    background: #521c34;
    font-size: 20px;
    font-family: 'iransans';
  }
  .panel{
    color: white;
    margin: auto;
    font-family: 'iransans';
  }
  .time{
    font-family: 'iransans';
  }
</style>
