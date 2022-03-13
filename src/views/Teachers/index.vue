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
            <Teacher/>
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

export default {
  name: 'Teachers',
  components: {Teacher},
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
}

.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
}

.lecture-subject h1 {
  text-align: center;
  color: #521c34;
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
<script>
function openInNewTab(url) {
  window.open(url, '_blank').focus()
}

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

