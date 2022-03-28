<template>
  <div :id="'accordion-'+teacher.id" class="shadow-sm mb-5" data-aos="fade-out">
    <div class="card border">
      <div class="card-body">
        <div class="row">
          <!-- order-md-1 -->
          <div class="col-12 col-md-3 mb-2">
            <div class="p-2">
              <img style="width: 100%" class="rounded" :src="teacher.profile" loading="lazy"/>
              <!-- src="https://toppng.com/uploads/preview/person-png-11553989513mzkt4ocbrv.png" -->
            </div>
          </div>
          <!-- order-md-12 -->
          <div class="col-12 col-md-9">
            <ul class="p-2">
              <li class="h2 text-warning">{{ teacher.fullName }}</li>
              <li class="h6 text-secondary mb-2">{{ teacher.degree }}</li>
              <li class="h6">
                {{ teacher.affiliation }}
                <span v-if="teacher.resume"> - </span>
                <a
                  v-if="teacher.resume"
                  :href="teacher.resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-info"
                  style="text-decoration: none"
                  >دریافت رزومه</a
                >
              </li>
              <hr />
              <li class="mb-4">
                {{ teacher.description }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        :id="'collapse-'+teacher.id"
        class="collapse"
        :aria-labelledby="'heading-'+teacher.id"
        :data-parent="'#accordion-'+teacher.id"
      >
        <div class="ps-4 pe-4 mb-2">
          <strong> چکیده: </strong>
        </div>
        <div class="ps-4 pe-4 mb-2">{{ teacher.lecture_abstract }}</div>
      </div>

      <div class="card-body" :id="'heading-'+teacher.id">
        <!-- TODO w-100 -->
        <button
          :id="'btn-collapse-'+teacher.id"
          class="btn btn-light collapsed w-100"
          data-bs-toggle="collapse"
          style="
            outline: 0px !important;
            -webkit-appearance: none;
            box-shadow: none !important;
          "
          :data-bs-target="'#collapse-'+teacher.id"
          aria-expanded="false"
          :aria-controls="'collapse-'+teacher.id"
          @click="areaExpanded = !areaExpanded"
          ref="toggle_btn"
        >
          <div class="d-flex justify-content-between p-1 ps-md-4 pe-md-4">
            <div class="fs-6 fw-bold">{{ teacher.lecture_title }}</div>
            <div :id="'btn-collapse-detail-'+teacher.id">
              {{areaExpanded ? "بستن": "توضیحات بیشتر"}}
              </div>
          </div>
        </button>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Teacher",
  props: ["teacher"],
  data() {
    return {
      areaExpanded: false,
    }
  },
}
</script>

<style scoped>
.lecture-subject h1 {
  text-align: center;
  color: #252040;
  margin-bottom: 32px;
  font-size: 30px;
}

v-none {
  visibility: hidden;
}
</style>
