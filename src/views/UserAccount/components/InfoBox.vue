<template>
  <div class="infoBoxHeader">
    <div class="infoBoxHeader-line"></div>
    <div class="infoBoxHeader-title" :class="{'dark': isDark}">
      <h4>{{ title }}</h4>
    </div>
    <div class="infoBoxHeader-line"></div>
  </div>
</template>

<script>
export default {
  name: 'InfoBox',
  props: {
    title: String,
    isDark: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style scoped>
.infoBoxHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 10px;
  margin-left: 10px;
}

.infoBoxHeader-line {
  height: 4px;
  background-color: #fcc113;
  justify-self: stretch;
  width: 100px;
}

.infoBoxHeader-title {
  color: white;
  font-weight: bold;
  text-align: center;

}

.infoBoxHeader-title.dark {
  color: #333;
}

</style>
