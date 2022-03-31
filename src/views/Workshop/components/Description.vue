<template>
  <div class="workshopContentDescription">
    <h1 class="workshopContentDescription-title">
      <i class="material-icons">double_arrow</i>
      {{ getTitle() }}
    </h1>
    <div class="workshopContentDescription-desc" v-html="description" />

    
    <div v-if="prerequisites">
      <h3 class="prerequisites-title">{{$t("workshop.description.prerequisites_en")}}</h3>
      <div class="prerequisites-description" v-html="prerequisites"></div>
    </div>

    <h3 class="timeline-title">{{ $t("workshop.description.timeTable_en") }}</h3>

    <p
      class="timeline-description"
      v-for="(timeSlot, index) in times"
      :key="timeSlot.id"
    >
      {{ getTimeTableText(timeSlot, index) }}
    </p>
    <h3 class="timeline-title">
      {{ $t("workshop.description.registrationFee_en") }}
    </h3>
    <p class="timeline-description">
      {{ this.getPriceText() }}
    </p>
    <RegisterButton :isRegOpen="isRegOpen" :id="registerButtonId" />
  </div>
</template>

<script>
import { getTimeTable_en } from '../utils'

import RegisterButton from './RegisterButton.vue'

export default {
  name: 'Description',
  components: {
    RegisterButton,
  },
  props: {
    price: Number,
    description: String,
    prerequisites: String,
    isRegOpen: Boolean,
    times: Array,
    registerButtonId: String,
  },
  computed: {
    isFree() {
      return this.price === 0
    },
  },
  methods: {
    getTitle() {
      if (this.isFree) {
        return this.$t('workshop.description.aboutThisTalk_en')
      }
      return this.$t('workshop.description.aboutThisWorkshop_en')
    },
    getPriceText() {
      if (this.isFree) {
        return this.$t('workshop.description.free_en')
      }
      return this.$t('workshop.description.priceInRials_en', {
        price: this.price,
      })
    },
    getTimeTableText(timeSlot, index) {
      return getTimeTable_en(timeSlot, index)
    },
  },
}
</script>

<style scoped>



.workshopContentDescription {
  width: 680px;
  min-height: 400px;
  border-radius: 0 15px 15px 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.workshopContentDescription-title {
  margin-top: 10px;

  color: #fcc113;
  display: flex;
  align-items: center;
}

.workshopContentDescription-title i.material-icons {
  margin-right: 10px;
}

.workshopContentDescription-desc {

  color: white;
  text-align: justify;
  width: 95%;
  margin-left: 30px;
}

.timeline-title {

  color: #fcc113;
  margin-left: 30px;
  margin-top: 10px;
}

.timeline-description {

  color: white;
  font-size: 15px;
  margin: 5px 40px;
}

.prerequisites-title {
  color: #fcc113;
  margin-left: 30px;
  margin-top: 10px;
}

.prerequisites-description {
  color: white;
  font-size: 15px;
  margin: 5px 40px;
}

@media only screen and (max-width: 1100px) {
  .workshopContentDescription {
    padding: 20px;
    width: initial;
  }

  .workshopContentDescription-desc {
    line-height: 30px;
    margin-left: 15px;
  }
}

@media only screen and (max-width: 500px) {
  .workshopContentDescription-desc {
    margin-left: 5px;
  }
}
</style>
