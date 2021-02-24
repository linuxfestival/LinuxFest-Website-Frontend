<template>
  <div class="parent">
    <PartialHeader :title="company.name"/>
    <div class="careerContentWrapper">
      <span style="font-size: 25px;margin: 10px">توضیحات شرکت</span>
      <div class="careerContent">
        {{ company.description }}
      </div>
      <h1 style="border-bottom: #521c34 solid 1px;padding-bottom: 4px">فرصت های شغلی این شرکت</h1>
      <div class="jobOpportunity">
        <div class="careerDescription" v-for="job in company.job_opportunities">
          <p style="margin: 10px"><span class="title">عنوان شغلی: </span>  {{ job.jobName }}</p>
          <span class="title" style="margin-right: 10px">توضیحات:</span>
          <p style="margin: 10px">{{ job.jobDescription }}</p>
          <div>
            <a :href="job.jlink" target="_blank">توضیحات بیشتر</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PartialHeader from '@/components/PartialHeader'

export default {
  name: "Career",
  components: {
    PartialHeader
  },
  data() {
    return {
      company: {}
    }
  },
  methods:{
    getCompany(){
      axios({
        url: this.$store.getters.baseUrl+'companies/' + "find/" + this.$route.params.id,
        method: "get",
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        }
      }).then(response => {
        this.company = response.data;
      }).catch(error => {
        console.log(error.response);
      })
    }
  },
  created() {
    this.getCompany();
  }
}
</script>

<style scoped>
.careerContentWrapper {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 70px 30px 30px;
  font-family: 'iransans';
}

.careerContent {
  padding: 25px 20px;
  width: 70%;
  min-height: 70px;
  background-color: #333;
  border-radius: 15px;
  display: flex;
  color: white;
  font-size: 20px;
  margin-bottom: 70px;
}

.jobOpportunity {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  max-width:1300px;
  justify-content: center;
  align-items: center;
}

.careerDescription {
  position: relative;
  color: white;
  background-color: #521c34;
  border-radius: 15px;
  min-width: 300px;
  min-height: 200px;
  max-width: 400px;
  border: 3px solid #e4b22b;
  padding: 20px;
  font-size: 20px;
  margin: 20px;
}
.title{
  color: #e4b22b;
}
.careerDescription a {
  left: 30px;
  bottom: 30px;
  margin-top: 10px;
  color: white;
  text-decoration: none;
  float: left;
}
.careerDescription a:hover{
  color: #e4b22b;
}

</style>