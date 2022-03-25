<template>
  <div class="workshopRegItemWrapper">
    <div
      class="workshopRegItemContent"
      :class="[{ selected: isSelected }]"
      @click="handleClick()"
    >
      <i class="material-icons selectedIcon" v-if="isSelected">done</i>
      <img
        class="workshopRegItemImage"
        draggable="false"
        src="../assets/img/workshop.png"
        :alt="'workshop ' + workshop._id + ' image'"
      />
      <h3 class="workshopRegItemTitle">
          <div>
            <i class="material-icons" v-if="isRegistered || isSelected">done</i>
            <i class="material-icons rotate-180"  v-else-if="!isRegistered && !isSelected">double_arrow</i>
          </div>
          <div class="col-10 p-0 m-0 textLimit">
            {{ workshop.title }}
          </div>
      </h3>
      <h3 class="workshopRegItemPrice" v-if="isPriceShown && isFree">رایگان</h3>
      <h3 class="workshopRegItemPrice" v-else-if="isPriceShown && !isFree">
        {{ workshop.price }}
        ریال
      </h3>
      <router-link
        :to="'/workshops/' + workshop.id"
        class="workshopRegItemMoreButton"
        >اطلاعات بیشتر...</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkshopRegisterItem',
  props: {
    workshop: Object,
    isSelected: {
      type: Boolean,
      default: () => false,
    },
    isRegistered: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    isPriceShown() {
      return !this.isRegistered
    },
    isFree() {
      return this.workshop.price == 0
    },
  },
  methods: {
    handleClick() {
      if (this.isRegistered) {
        return
      }

      this.$emit('select', this.workshop)
    },
  },
}
</script>

<style scoped>
.workshopRegItemWrapper {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
}
.workshopRegItemContent {
  border-radius: 15px;
  background-color: #191919;
  height: 70px;
  width: calc(100%);
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in;
  cursor: default;
}
.workshopRegItemContent.selected {
  background-color: #fcc113;
}
.workshopRegItemImage {
  height: 70px;
  border-radius: 0 15px 15px 0;
  border-left: 3px solid #f9f9f9;
}
.workshopRegItemTitle {

  display: flex;
  align-items: center;
  color: white;
  margin-left: auto;
  width: 350px;
}

.workshopRegItemTitle .textLimit {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
          line-clamp: 2; 
  -webkit-box-orient: vertical;
}

.workshopRegItemTitle i.material-icons {
  margin-right: 15px;
  margin-left: 15px;
}
.workshopRegItemPrice {

  display: flex;
  align-items: center;
  color: white;
}
.material-icons.rotate-180 {
  transform: rotate(180deg);
}
.workshopRegItemMoreButton {
  margin-right: auto;
  margin-left: 20px;
  background-color: #ddd;
  color: #333;
  text-decoration: none;

  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
}
.workshopRegItemContent:hover {
  background-color: #252040;
}
.workshopRegItemContent:hover .workshopRegItemTitle,
.workshopRegItemContent:hover .workshopRegItemPrice {
  color: #fcc113;
}
.workshopRegItemContent:hover .workshopRegItemMoreButton {
  background-color: #fcc113;
  color: white;
}
.workshopRegItemContent:hover .workshopRegItemImage {
  border-left-color: #fcc113;
}
i.material-icons.selectedIcon {
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 50px;
  margin-right: 7px;
}
@media only screen and (max-width: 610px) {
  .workshopRegItemTitle i.material-icons {
    display: none;
  }
  .workshopRegItemTitle {
    font-size: 15px;
    margin-right: 10px;
    font-weight: normal;
    width: 150px;
    font-weight: bold;
  }
  .workshopRegItemPrice {
    font-size: 14px;
  }
  .workshopRegItemPrice i.material-icons {
    font-size: 14px;
  }
  .workshopRegItemMoreButton {
    font-size: 10px;
    font-weight: bold;
  }
}
</style>
