<template>
  <div class="main">
    <div class="panel">
      <h1>تقویم برگزاری</h1>
    <Timeline>
      <timeline-item v-for="item in timelineItems"
                     bg-color="#e4b22b"
                     font-color="#ddd">
              {{item.title}}
      <br/>
      <br/>
              {{item.date}}  {{item.endTime}} - {{item.startTime}}
        <br/>
      <br/>
            {{item.teachers}}
      </timeline-item>
    </Timeline>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
import jalali from 'jalali-moment'
export default {

  created() {
    this.getWorkshops();
  },
  data: function () {
    return {
      workshops: [],
      timelineItems: []
    }
  },
  methods: {
    getWorkshops() {
      let i=0;
      axios({
        url: this.$store.getters.baseUrl + 'workshops',
        method: 'get'
      }).then(response => {
        this.workshops = response.data;

        let temp = [];
        for(let data of response.data){
          for(let j=0;j<data.times.length;j++) {
            let teachers = "";
            if(data.teachers.length===1)
              teachers ="مدرس: ";
            else
              teachers ="مدرسین: ";
            for(let k=0;k<data.teachers.length;k++){
              teachers += data.teachers[k].name
              if(k!==data.teachers.length-1)
                teachers+=" - ";
            }
            temp[i] = {
              mainDateForSort :this.getJalali(data.times[j].startTime).utc().locale('fa'),
              date: this.getJalali(data.times[j].startTime).utc().locale('fa').format("dddd YYYY/MM/DD"),
              startTime: this.getJalali(data.times[j].startTime).utc().locale('fa').format("HH:mm"),
              endTime: this.getJalali(data.times[j].endTime).utc().locale('fa').format("HH:mm"),
              title: data.title,
              teachers: teachers
            }
            i++;
          }
        }
        temp.sort(function (a,b){return a.mainDateForSort - b.mainDateForSort})
        this.timelineItems = temp
      }).catch(error => {
        console.log(error.response);
      })
    },
      getJalali(date) {
        return jalali(date);
    }
  },
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  }
}
</script>

<style scoped>
  .main{
    display: flex;
    flex-direction: column;
    background: #521c34;
    font-size: 20px;
    font-family: 'iransans';
  }
  .panel{
    color: white;
    margin: auto;
  }
</style>