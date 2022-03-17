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
          <div id="accordion-0" class="shadow-sm mb-5" data-aos="fade-out">
            <Teacher
              v-for="teacher in teachers"
              :teacher="teacher.teacher"
              :key="teacher.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {
// } from 'vuelidate/lib/validators'

import Teacher from './components/Teacher.vue'
// import {showErrorNotif} from '@/utils/notifs'
// import {fetchTeachers} from '@/views/Teachers/requests'

export default {
  name: 'Teachers',
  components: {Teacher},
  data() {
    return {
      isLoading: true,
      teachers: [
        {
          'teacher': {
            '_id': '622a4d9edaf9ef56668c3971',
            'fullName': 'علی نوروزیییییهه',
            'fullName_en': 'new teacher',
            'description': 'توضحات نورزیه۲',
            'description_en': 'In english',
            'affiliation': 'دانشگاه صنعتی امیرکبیر',
            'affiliation_en': 'AUT',
            'field': 'ریاضی فیزیک',
            'field_en': 'MATH',
            'createdAt': '2022-03-10T19:12:30.151Z',
            'updatedAt': '2022-03-10T19:12:41.541Z',
            '__v': 0,
            'picUrl': '/api/teachers/pic/622a4d9edaf9ef56668c3971'
          },
          'workshops': []
        }
      ],
    }
  },

  // created() {
  //   fetchTeachers()
  //     .then((teachers) => {
  //       this.teachers = teachers
  //     })
  //     .catch(() => {
  //       showErrorNotif()
  //     })
  //     .finally(() => {
  //       this.isLoading = false
  //     })
  // },
}

// eslint-disable-next-line no-unused-vars
function openInNewTab(url) {
  window.open(url, '_blank').focus()
}

// eslint-disable-next-line no-unused-vars
function toggle_btn_text(ele, index) {
  let detail_element = 'btn-collapse-detail-' + index
  detail_element = document.getElementById(detail_element)

  let icon_element = 'btn-collapse-icon-' + index
  icon_element = document.getElementById(icon_element)

  // console.log('area element id = ' + ele.innerHTML);
  if (String(detail_element.innerHTML).trim() === 'توضیحات بیشتر') {
    detail_element.innerHTML = 'بستن'
    icon_element.classList.remove('bx-chevron-down')
    icon_element.classList.add('bx-chevron-up')
  } else {
    detail_element.innerHTML = 'توضیحات بیشتر'
    icon_element.classList.remove('bx-chevron-up')
    icon_element.classList.add('bx-chevron-down')
  }
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
