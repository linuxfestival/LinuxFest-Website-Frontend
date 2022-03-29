<template>
  <div class="careerDescription">
    <p style="margin: 10px">
      <span class="title h5">Job title:</span> {{ opportunity.name }}
    </p>
    <span class="title h5" style="margin-left: 10px">Description:</span>
    <p style="margin: 10px">{{ opportunity.description }}</p>
    <div style="margin: 10px">
      <a class="text-decoration-none h5" :href="opportunity.link" target="_blank">More info</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Opportunity',
  props: {
    opportunity: Object,
  },
}
</script>

<style scoped>

.title {
  color: #fcc113;
}

.careerDescription {
  position: relative;
  color: white;
  background-color: #252040;
  border-radius: 15px;
  min-width: 300px;
  min-height: 200px;
  max-width: 400px;
  border: 3px solid #fcc113;
  padding: 20px;
  font-size: 20px;
  margin: 20px;
}
</style>
