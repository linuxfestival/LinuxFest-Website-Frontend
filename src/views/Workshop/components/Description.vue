<template>
  <div class="workshopContentDescription">
    <h1 class="workshopContentDescription-title">
      <i class="material-icons rotate-180">double_arrow</i>
      {{getTitle()}}
    </h1>
    <div
      class="workshopContentDescription-desc"
      v-html="description"
    />

    <h3 class="timeline-title">{{$t('workshop.description.timeTable')}}</h3>

    <p
      class="timeline-description"
      v-for="(timeSlot, index) in times"
     :key="timeSlot.id"
    >
      {{getTimeTableText(timeSlot, index)}}
    </p>
    <h3 class="timeline-title">
      {{$t('workshop.description.registrationFee')}}
    </h3>
    <p class="timeline-description">
      {{this.getPriceText()}}
    </p>
    <RegisterButton :isRegOpen="isRegOpen" :id="registerButtonId" />
  </div>
</template>

<script>
import { getTimeTable } from '../utils';

import RegisterButton from './RegisterButton.vue';

export default {
  name: 'Description',
  components: {
    RegisterButton
  },
  props: {
    price: Number,
    description: String,
    isRegOpen: Boolean ,
    times: Array,
    registerButtonId: String,
  },
  computed: {
    isFree() {
      return this.price === 0;
    }
  },
  methods: {
    getTitle() {
      if(this.isFree) {
        return this.$t('workshop.description.aboutThisTalk')
      } else {
        return this.$t('workshop.description.aboutThisWorkshop')
      }
    },
    getPriceText() {
      if(this.isFree) {
        return this.$t('workshop.description.free')
      } else {
        return this.$t('workshop.description.priceInRials', { price: this.price })
      }
    },
    getTimeTableText(timeSlot, index) {
      return getTimeTable(timeSlot, index);
    }
  }
}
</script>

<style scoped>
  .workshopContentDescription {
  width: 680px;
  min-height: 400px;
  border-radius: 15px 0 0 15px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.workshopContentDescription-title {
  margin-top: 10px;
  font-family: 'iransans';
  color: #e4b22b;
  display: flex;
  align-items: center;
}

.workshopContentDescription-title i.material-icons {
  margin-left: 10px;
}

.workshopContentDescription-desc {
  font-family: 'iransans';
  color: white;
  text-align: justify;
  width: 95%;
  margin-right: 30px;
}

.timeline-title {
  font-family: 'iransans';
  color: #e4b22b;
  margin-right: 30px;
  margin-top: 10px;
}

.timeline-description {
  font-family: 'iransans';
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
    margin-right: 15px;
  }
}

@media only screen and (max-width: 500px ) {
  .workshopContentDescription-desc {
    margin-right: 5px;
  }
}
</style>
