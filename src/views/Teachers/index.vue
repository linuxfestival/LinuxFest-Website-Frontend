<template>
  <div class="back">
    <!-- <notifications position="top center" class="noti-style" /> -->
    <div class="main-frame col-lg-8">
      <div class="lecture-subject">
        <h1>ارائه دهندگان</h1>
      </div>
      <hr/>
      <div>
        <div class="container">
          <!-- TODO set data-aos="slide-left" after test -->
            <Teacher
              v-for="teacher in teachers"
              :teacher="teacher.teacher"
              :key="teacher.teacher.id"
            />
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {
// } from 'vuelidate/lib/validators'

import Teacher from './components/Teacher.vue'
import {showErrorNotif} from '@/utils/notifs'
import {fetchTeachers} from '@/views/Teachers/requests'

export default {
  name: 'Teachers',
  components: {Teacher},
  data() {
    return {
      isLoading: true,
      teachers: [],
    }
  },
  created() {
    fetchTeachers()
      .then((teachers) => {
        console.log(teachers)
        this.teachers = teachers
      })
      .catch(() => {
        showErrorNotif()
      })
      .finally(() => {
        this.isLoading = false
      })
  },

}
</script>

<style scoped>
.back {
  background-color: rgb(216, 206, 206);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
}

.main-frame {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  /* max-width: 900px; */
  margin: 20px;
  margin-top: 80px;
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
}

.lecture-subject h1 {
  text-align: center;
  color: #252040;
  margin-bottom: 32px;
  font-size: 30px;
}

/*notification*/
.noti-style {
  padding: 0px;
  margin: 0px 5px 5px;
  font-size: 15px;
}

.d-none {
  display: none;
}

v-none {
  visibility: hidden;
}

.aut_check {
  margin: 3px;
}

.lecture-header {
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
}
</style>
