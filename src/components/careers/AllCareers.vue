<template>
  <section class="companies" id="companies">
    <div class="companiesContainer">
      <h1 class="companies-title">شرکت ها</h1>
      <section class="companies-list">
        <CompanyItem  v-for="(company, index) in getCompanies"
                      :company="company"
                       :key="index" />
      </section>
    </div>
  </section>
</template>

<script>

import CompanyItem from "./companyItem";

export default {
  name: "AllCareers",
  components:{
     CompanyItem
  },
  computed:{
    getCompanies(){
      return [{
        name: "digiKala",
        description: "digi is ..."
      },
        {
          name: "اسنپ",
          description: "اسنپ یکی از اسپانسرهاای"
        },
      ]
    }
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