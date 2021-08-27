<template>
  <section class="companies" id="companies">
    <div class="companiesContainer">
      <h1 class="companies-title">شرکت ها</h1>
      <section class="companies-list">
        <CompanyItem
          v-for="company in companies"
          :company="company"
          :key="company.id"
        />
      </section>
    </div>
  </section>
</template>

<script>
import { showErrorNotif } from '@/utils/notifs'

import CompanyItem from './components/CompanyItem.vue'
import { fetchCompanies } from './requests'

export default {
  name: 'AllCareers',
  components: {
    CompanyItem,
  },
  data() {
    return {
      isLoading: true,
      companies: [],
    }
  },
  created() {
    fetchCompanies()
      .then((companies) => {
        this.companies = companies
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
.companies {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;

}

.companiesContainer {
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.companies-title {

  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid purple;
}

.companies-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  justify-content: space-evenly;
}
</style>
