<template>
  <section class="homeHeaderWrapper" id="homes">
    <img alt="poster" src="../../../assets/img/coming-soon.jpg" draggable="false" class="poster">
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 10px solid rgb(242, 169, 56);
}

.poster {
  width: 100%;
}

.homeHeader--startButton i {
  font-size: 60px;
}

@media only screen and (max-width: 660px) {
  .homeHeaderWrapper {
    background-size: 140%;
  }
}

@media only screen and (max-width: 560px) {
  .homeHeaderWrapper {
    background-size: 200%;
    flex-direction: column-reverse;
  }
}
</style>
