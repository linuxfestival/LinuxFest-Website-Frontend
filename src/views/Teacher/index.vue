<template>
  <div class="back">
    <!-- <notifications position="top center" class="noti-style" /> -->
    <div class="main-frame col-lg-8">
      <div class="lecture-subject">
        <h1>ارائه دهندگان</h1>
      </div>
      <hr />
      <div>
        <div class="container">
          <!-- TODO set data-aos="slide-left" after test -->
          <div id="accordion-0" class="shadow-sm mb-5" data-aos="fade-out">
            <div class="card border">
              <div class="card-body">
                <div class="row">
                  <!-- order-md-1 -->
                  <div class="col-12 col-md-3 mb-2">
                    <div class="p-2">
                      <img
                        style="width: 100%"
                        class="rounded"
                        src="https://toppng.com/uploads/preview/person-png-11553989513mzkt4ocbrv.png"
                      />
                    </div>
                  </div>
                  <!-- order-md-12 -->
                  <div class="col-12 col-md-9">
                    <ul class="p-2">
                      <li class="h2 text-warning">جان دو</li>
                      <li class="h6 text-secondary mb-2">دکترای تشخیص صدا</li>
                      <li class="h6">
                        دانشگاه صنعتی امیرکبیر -
                        <a
                          href="https://google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="link-info"
                          >Google-Scholar</a
                        >
                      </li>
                      <hr />
                      <li class="mb-4">
                        <!-- biography -->
                        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی
                        آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک
                        گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از
                        ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و
                        کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر
                        گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
                        معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                        آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا
                        صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده
                        بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و
                        قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از
                        آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت
                        حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی
                        وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی،
                        صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و
                        صفحه‌بندی را به پایان برند.
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
                  <div
                    class="d-flex justify-content-between p-1 ps-md-4 pe-md-4"
                  >
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {
// } from 'vuelidate/lib/validators'

export default {
  name: "Teachers",
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
  window.open(url, "_blank").focus();
}

function toggle_btn_text(ele, index) {
  let detail_element = "btn-collapse-detail-" + index;
  detail_element = document.getElementById(detail_element);

  let icon_element = "btn-collapse-icon-" + index;
  icon_element = document.getElementById(icon_element);

  // console.log('area element id = ' + ele.innerHTML);
  if (String(detail_element.innerHTML).trim() === "توضیحات بیشتر") {
    detail_element.innerHTML = "بستن";
    icon_element.classList.remove("bx-chevron-down");
    icon_element.classList.add("bx-chevron-up");
  } else {
    detail_element.innerHTML = "توضیحات بیشتر";
    icon_element.classList.remove("bx-chevron-up");
    icon_element.classList.add("bx-chevron-down");
  }
}
</script>

