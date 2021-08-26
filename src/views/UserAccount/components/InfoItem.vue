<template>
  <div class="infoItem">
    <h3 class="infoItemTitle" v-if="title">{{ title }}‌</h3>
    <p class="infoItemContent" v-if="content">{{ content }}</p>
    <slot />
  </div>
</template>

<script>
export default {
  name: "InfoItem",
  props: {
    title: String,
    content: String,
  },
};
</script>

<style scoped>
.infoItem {
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}

.infoItemTitle {
  color: white;
  font-size: 14px;

}

.infoItemContent {
  color: #e4b22b;
  font-size: 17px;
  font-weight: bold;
  margin-right: 5px;
  margin-top: 5px;

}
</style>
