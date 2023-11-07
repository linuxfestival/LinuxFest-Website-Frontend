<template>
  <section class="homeHeaderWrapper" id="homes">
    <!-- <h1 class="homeHeader-title">
      <span class="homeHeader-title-yazdahomin same-width">
        {{ $t("home.header.periodCounter") }}
      </span>
      <br />
      <span class="homeHeader-title-jashnvareh same-width">
        {{ $t("home.header.festival") }}
      </span>
      <br />
      <span class="homeHeader-title-linux same-width">
        {{ $t("home.header.linux") }}
      </span>
      <br />
      <span class="homeHeader-title-amirkabir same-width">
        {{ $t("home.header.amirkabir") }}
      </span>
    </h1> -->
    <div class="homeHeader-title">
      <!-- <h2 class="homeHeader-title-horizontal">
        {{ $t("home.header.sscPresents") }}
      </h2> -->
      <div class="homeHeader-title-verticle">
        <h1 class="homeHeader-title-text">
          <span class="homeHeader-title-periodCounter-number">{{ $t("home.header.periodCounter") }}</span>
          {{ $t("home.header.periodCounter2") }}
        </h1>
        <h1 class="homeHeader-title-text">
          {{ $t("home.header.festival") }}
        </h1>
        <h1 class="homeHeader-title-text">
          {{ $t("home.header.linux") }}
        </h1>
        <h1 class="homeHeader-title-text">
          {{ $t("home.header.amirkabir") }}
        </h1> 
      </div>
    </div>
    <router-link to="/" v-scroll-to="'#abouts'" class="homeHeader--startButton">
      <i class="material-icons">keyboard_arrow_down</i>
    </router-link>
  </section>
</template>
<script>
export default {
  name: 'Header',
}
</script>
<style scoped>

.homeHeaderWrapper {
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    min-height: calc(100vh);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(
        0deg,
        rgba(41, 41, 41, 0.9),
        rgba(41, 41, 41, 0.9)
      ),
      url("../../../assets/img/withEye.png") no-repeat center / 100%;
      background-size: contain;
    border-bottom: 10px solid rgb(242, 169, 56);
    flex-direction: column;
    padding: 100px 0px 30px 0px;
  }

  .homeHeader-title-horizontal {
    color: white;

    font-size: 18px;
    text-align: center;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    height: 390px;
    /* margin: 0px 30px; */
  }
  
  .homeHeader-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .homeHeader-title-periodCounter-number {
    font-size: 9.3rem;
    /* text-shadow: 0px 0px orange 3px 3px; */
    animation-name: numberAnimation;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @keyframes numberAnimation {
    0% {text-shadow: 0px 0px 10px orange;}
    50% {text-shadow: 0px 0px 18px orange;}
    100% {text-shadow: 0px 0px 10px orange;}
  }

  .homeHeader-title-text {
    font-size: 6rem;
    color: var(--secondryColor);
  }

  .homeHeader-title-verticle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 30px;
  }

  /* Media Queries */

  @media only screen and (max-width: 768px) {
    .homeHeader-title-periodCounter-number {
      font-size: 4.3rem;
    }
    
    .homeHeader-title-text {
      font-size: 3rem;
    }

    .homeHeader-title-horizontal {
      font-size: .8rem;
      height: calc(100% - 190px);
      margin: 0px 10px;
    }
  }

  @media only screen and (max-width: 300px) {
    .homeHeader-title-periodCounter-number {
      font-size: 3.3rem;
    }
    
    .homeHeader-title-text {
      font-size: 2rem;
    }

    .homeHeader-title-horizontal {
      font-size: .8rem;
      height: calc(100% - 190px);
      margin: 0px 10px;
    }
  }
</style>
