<template>
  <div class="workshopTeachersImages">
    <img
      v-for="teacher in teachers"
      :key="teacher.id"
      :src="teacher.avatar"
      :alt="teacher.fullName_en"
      draggable="false"
      class="workshopTeacherImages-image"
    />
  </div>
</template>

<script>
export default {
  name: 'TeacherImages',
  props: {
    teachers: Array,
  },
}
</script>

<style scoped>
.workshopTeachersImages {
  width: 100px;
  background-color: rgba(0, 255, 0, 0);
  min-height: 400px;
  margin-left: -50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
}

.workshopTeacherImages-image {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-left: 0px;
  border: 3px solid #fcc113;
  margin-top: 30px;
  margin-bottom: 10px;
}

.workshopTeacherImages-image:first-child {
  margin-top: 0;
}

@media only screen and (max-width: 1100px) {
  .workshopTeachersImages {
    display: none;
    margin-bottom: 0;
  }

  .workshopTeacherImages-image {
    margin-top: 10px;
  }
}
</style>
