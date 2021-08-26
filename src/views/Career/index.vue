<template>
  <div class="parent">
    <PartialHeader :title="company.name" />
    <div class="careerContentWrapper">
      <span style="font-size: 25px; margin: 10px">توضیحات شرکت</span>
      <div class="careerContent">
        {{ company.description }}
      </div>
      <h1 style="border-bottom: #521c34 solid 1px; padding-bottom: 4px">
        فرصت های شغلی این شرکت
      </h1>
      <div class="jobOpportunity">
        <Opportunity
          v-for="opportunity in company.opportunities"
          :key="opportunity.id"
          :opportunity="opportunity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PartialHeader from "@/components/PartialHeader";

import Opportunity from "./components/Opportunity.vue";
import { fetchCompany } from "./requests";

export default {
  name: "Career",
  components: {
    PartialHeader,
    Opportunity
  },
  data() {
    return {
      isLoading: true,
      company: {},
    };
  },
  created() {
    const {
      params: { id },
    } = this.$route;

    console.log('id:', id)
    fetchCompany(id)
      .then((company) => {
        this.company = company;
      })
      .catch((err) => {})
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>

<style scoped>
.careerContentWrapper {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 70px 30px 30px;
  font-family: "iransans";
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
  max-width: 1300px;
  justify-content: center;
  align-items: center;
}

.title {
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
.careerDescription a:hover {
  color: #e4b22b;
}
</style>
