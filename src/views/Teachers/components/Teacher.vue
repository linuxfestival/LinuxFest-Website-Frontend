<template>
  <div class="card border">
    <div class="card-body">
      <div class="row">
        <!-- order-md-1 -->
        <div class="col-12 col-md-3 mb-2">
          <div class="p-2">
            <img style="width: 100%" class="rounded" :src="teacher.profile" />
            <!-- src="https://toppng.com/uploads/preview/person-png-11553989513mzkt4ocbrv.png" -->
          </div>
        </div>
        <!-- order-md-12 -->
        <div class="col-12 col-md-9">
          <ul class="p-2">
            <li class="h2 text-warning">{{ teacher.fullName }}</li>
            <li class="h6 text-secondary mb-2">{{ teacher.field }}</li>
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
      id="collapse-0"
      class="collapse"
      aria-labelledby="heading-0"
      data-parent="#accordion-0"
    >
      <div class="ps-4 pe-4 mb-2">
        <strong> چکیده: </strong>
      </div>
      <div class="ps-4 pe-4 mb-2">توضیحات ابسترکت</div>
    </div>

    <div class="card-body" id="heading-0">
      <!-- TODO w-100 -->
      <button
        id="btn-collapse-0"
        class="btn btn-light collapsed w-100"
        data-bs-toggle="collapse"
        style="
          outline: 0px !important;
          -webkit-appearance: none;
          box-shadow: none !important;
        "
        onclick="toggle_btn_text(this, '0')"
        data-bs-target="#collapse-0"
        aria-expanded="true"
        aria-controls="collapse-0"
      >
        <div class="d-flex justify-content-between p-1 ps-md-4 pe-md-4">
          <div id="btn-collapse-detail-0">توضیحات بیشتر</div>
          <i
            id="btn-collapse-icon-0"
            class="bx bx-chevron-down"
            style="font-size: 24px"
          ></i>
        </div>
      </button>
      <!-- http://localhost:85/static/58736820.jpg -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Teacher",
  props: ["teacher"],
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
