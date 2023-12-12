<template>
  <div class="workshop-item" @click="showMore()">
    <img
      class="workshop-item--image"
      src="@/assets/img/workshop.png"
      :alt="workshop.title"
    />

    <div class="workshop-item-info">
      <h2>عنوان</h2>
      <!-- <p>مدرس 1، مدرس 2</p> -->
      <div class="teachers-list">
        <h4 class="teacher-info">
          <i class="material-icons">person</i>
          مدرس
        </h4>
        <h4 class="teacher-info">
          <i class="material-icons">person</i>
          مدرس
        </h4>
      </div>
      <button>توضیحات بیشتر</button>
    </div>
    
    <!-- <div class="workshop-item--info">
      <h2 class="workshop-item--info-title">{{ workshop.title }}</h2>
      <h3 class="workshop-item--info-teachTitle">
        <i class="material-icons">person</i>
        {{ teachersTitle }}
      </h3>
      <p
        class="workshop-item--info-teachItem"
        v-for="teacher in workshop.teachers"
        :key="teacher.id"
      >
        {{ teacher.name }}
      </p>
      <button
        class="workshop-item--info-moreButton"
        @click="showMore(workshop)"
      >
        {{ $t("home.workshops.description") }}
        <i class="material-icons">keyboard_arrow_left</i>
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'WorkshopItem',
  props: {
    workshop: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hasTeachers() {
      return this.workshop.teachers && this.workshop.teachers.length > 0
    },
    hasOnlyOneTeacher() {
      return this.hasTeachers && this.workshop.teachers.length === 1
    },
    teachersTitle() {
      if (!this.hasTeachers) {
        return null
      }

      if (this.hasOnlyOneTeacher) {
        return this.$t('home.workshops.teacher')
      }

      return this.$t('home.workshops.teachers')
    },
  },
  methods: {
    showMore() {
      this.$router.push(`/workshops/${this.workshop.id}`)
    },
  },
}
</script>

<style scoped>
  .workshop-item {
    padding: 10px;
    background-color: var(--mainColor);
    color: white;
    border-radius: 15px;
    max-width: 400px;
    margin: 10px;
    cursor: pointer;
    transition: 250ms;
  }

  .workshop-item:hover {
    box-shadow: 0px 0px 6px 0px black;
  }

  .workshop-item--image {
    border-radius: 15px 15px 0px 0px;
    max-width: 100%;
  }

  .workshop-item-info {
    text-align: right;
    padding: 10px;
  }

  .workshop-item-info .teachers-list {
    margin: 15px;
  }
  .teachers-list {
    display: flex;
    flex-direction: column;
  }

  .teacher-info {
    display: flex;
  }

  .workshop-item-info button {
    padding: 10px;
    border-radius: 10px;
    background-color: transparent;
    color: white;
    border: 2px solid var(--secondryColor);
    color: var(--secondryColor);
    width: 100%;
    transition: 250ms;
  }

  .workshop-item-info button:hover {
    background-color: var(--secondryColor);
    color: var(--mainColor);
    box-shadow: 0px 0px 8px 0px var(--secondryColor);
  }
</style>
