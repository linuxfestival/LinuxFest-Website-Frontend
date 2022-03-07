<template>
  <div class="careerDescription">
    <p style="margin: 10px">
      <span class="title">عنوان شغلی: </span> {{ opportunity.name }}
    </p>
    <span class="title" style="margin-right: 10px">توضیحات:</span>
    <p style="margin: 10px">{{ opportunity.description }}</p>
    <div>
      <a :href="opportunity.link" target="_blank">توضیحات بیشتر</a>
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
