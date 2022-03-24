<template>
  <section class="aboutEventWrapper" id="abouts">
    <div class="aboutEventContainer">
      <h1 class="aboutEvent-title">
        <i class="material-icons">keyboard_arrow_left</i>
        {{ $t("home.about.linuxFest") }}
      </h1>
      <p class="aboutEvent-description">
        {{ $t("home.about.linuxFestFull") }}
      </p>
    </div>
    <router-link to="/" v-scroll-to="'#workshops'" class="about--startButton">
      <i class="material-icons">keyboard_arrow_down</i>
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'AboutEvent',
}
</script>

<style scoped>
.aboutEventWrapper {
  width: 100%;
  border-bottom: 5px solid rgb(242, 169, 56);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  background: #252040 no-repeat left / 50%;
  /*background: #252040 url(../../../assets/img/pinguin.png) no-repeat left / 50%;*/
}

.aboutEventContainer {
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.aboutEvent-title {
  color: rgb(242, 169, 56);

  font-size: 28px;
  margin: 15px 30px;
  display: flex;
  align-items: center;
}

.aboutEvent-description {
  color: white;

  margin: 0 30px 30px 30px;
  line-height: 50px;
  text-align: justify;
  font-size: 20px;
}

.about--startButton {
  color: white;
  transition: all 0.2s ease-in;
}

.about--startButton i.material-icons {
  font-size: 60px;
}

.about--startButton:hover {
  color: rgb(242, 169, 56);
}
</style>
