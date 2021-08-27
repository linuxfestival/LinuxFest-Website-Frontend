<template>
  <section class="workshops" id="workshops">
    <div class="workshopsContainer">
      <h1 class="workshops-title">
        {{ $t("home.workshops.workshopsAndTalks") }}
      </h1>
      <section class="workshops-list">
        <WorkshopItem
          v-for="workshop in workshops"
          :workshop="workshop"
          :key="workshop.id"
        />
      </section>
    </div>
  </section>
</template>

<script>
import WorkshopItem from './WorkshopItem.vue'

export default {
  name: 'Workshops',
  components: { WorkshopItem },
  props: {
    workshops: { type: Array, default: () => [] },
  },
}
</script>

<style scoped>
.workshops {
  width: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}

.workshopsContainer {
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}

.workshops-title {

  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid purple;
}

.workshops-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  justify-content: space-evenly;
}
</style>
