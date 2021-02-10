<template>
  <section class="companies" id="companies">
    <div class="companiesContainer">
      <h1 class="companies-title">شرکت ها</h1>
      <section class="companies-list">
        <CompanyItem  v-for="(company, index) in companies"
                      :company="company"
                       :key="index" />
      </section>
    </div>
  </section>
</template>

<script>

import CompanyItem from "./companyItem";
import axios from "axios";
export default {
  name: "AllCareers",
  components:{
     CompanyItem
  },
  data(){
    return{
      companies:[]
    }
  },
  methods:{
    getCompanies(){
      axios({
        url : this.$store.getters.baseUrl+"companies/",
        method : "GET",
      }).then(response => {
        console.log(response);
        this.companies = response.data;
      }).catch(error => {
        console.log(error.response);
      });
    }
  },
  created() {
    this.getCompanies();
  }
}
</script>

<style scoped>
.companies {
  width: 100%;
  display:flex;
  min-height:100vh;
  align-items:center;
  justify-content:center;
  padding-bottom:30px;
  font-family: 'iransans';
}

.companiesContainer {
  max-width:1300px;
  display : flex;
  align-items:center;
  justify-content:flex-start;
  flex-direction:column;
}

.companies-title {
  font-family: 'iransans';
  font-size:30px;
  margin-top:30px;
  margin-bottom:30px;
  border-bottom:1px solid purple;
}

.companies-list {
  display:flex;
  flex-wrap: wrap;
  width:100%;
  max-width:1300px;
  justify-content: space-evenly;
}
</style>