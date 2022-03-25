<template>
  <div class="workshopTeachersDescription">
    <h2 class="workshopTeachersDescription-title">
      <i class="material-icons">person</i>
      {{ getTitle() }}
    </h2>
    <div class="teacherDescriptionWrapper">
      <div
        class="teacherDescription"
        v-for="teacher in teachers"
        :key="teacher.id"
      >
        <p class="teacherDescription-name">
          <i class="material-icons">person</i>
          {{ teacher.fullName_en }}:
        </p>
        <p class="teacherDescription-desc">
          {{ teacher.description_en }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeachersDescription',
  props: {
    teachers: Array,
  },
  computed: {
    isMoreThanOne() {
      return this.teachers && this.teachers.length > 1
    },
  },
  methods: {
    getTitle() {
      if (this.isMoreThanOne) {
        return this.$t('workshop.description.teachersDescription_en')
      }
      return this.$t('workshop.description.teacherDescription_en')
    },
  },
}
</script>

<style scoped>
.teacherDescriptionWrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: auto 10px;
}

.workshopTeachersDescription {
  background-color: #252040;
  border-radius: 15px 0 0 15px;
  border-right: 3px solid #fcc113;
  padding-right: 60px;
  width: 25%;
  padding-bottom: 110px;
}

.workshopTeachersDescription-title {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.workshopTeachersDescription-title i {
  margin-left: 15px;
  margin-right: 15px;
}

.workshopTeachersDescription-title {

  color: #fcc113;
}

.teacherDescription {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 100px;
}

.teacherDescription:first-child {
  margin-top: 50px;
}

.teacherDescription-name {
  color: #fcc113;
  font-weight: bold;

  display: flex;
  align-items: center;
  margin-right: 10px;
}

.teacherDescription-name i.material-icons {
  margin-right: 5px;
}

.teacherDescription-desc {
  color: white;

  text-align: justify;
  padding: 5px 5px 5px 10px;
  margin-left: 10px;
  overflow-wrap: break-word;
  width:95%;
}

@media only screen and (max-width: 1100px) {
  .workshopTeachersDescription {
    border-right: none;
    padding: 20px 0;
    border-radius: 0;
    width: initial;
  }

  .workshopTeachersDescription-title {
    position: static;
  }

  .teacherDescription {
    margin-top: 50px;
  }
}
</style>
