<template>
    <div class="workshopsListTitle">
        <h1 class="workshopsListTitle-text">{{title}}</h1>
    </div>
</template>

<script>
export default {
  name: 'PartialHeader',
  props: {
    backgroundUrl: String,
    title: String,
  },
}
</script>

<style scoped>
    .workshopsListTitle {
        background: url("../assets/img/background2.png") no-repeat center center;
        min-height: 200px;
        margin-bottom: 30px;
        margin-top:40px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-self:stretch;
    }

    .workshopsListTitle-text {

        color: white;
        font-size:2.5rem;
        text-align:center;
    }
    @media (max-width: 500px) {
      .workshopsListTitle-text{
        margin-top: 50px;
      }
    }

</style>
