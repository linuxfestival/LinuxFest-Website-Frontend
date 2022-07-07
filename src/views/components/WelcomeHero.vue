<script setup>

</script>

<template>
  <section class="welcome-hero">
    <div class="welcome-hero__texts">
        <p class="welcome-hero__meta">
انجمن علمی دانشکده مهندسی کامپیوتر دانشگاه<br /> صنعتی امیرکبیر برگزار می کند:
          </p>

                <h1 class="welcome-hero__title">
        <p class="welcome-hero__small-title">
          سیزدهمین دوره
</p>
جشنواره
<br />
لینوکس
<br />
امیرکبیر
        </h1>
      </div>
    </section>
</template>

<style scoped>
  .welcome-hero {
    margin-top: 60px;
    height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    justify-content: center;


background: linear-gradient(
0deg
,rgba(41,41,41,.9),rgba(41,41,41,.9)),url(@/assets/images/pengiun.png) no-repeat top/100%;
  }

  .welcome-hero__texts {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .welcome-hero__title {
    color: #fcc113;
    font-size: 145px;
    line-height: 128px;
    font-weight: 900;
  }

  .welcome-hero__small-title {
    font-size: 84px;
  }

  .welcome-hero__meta {
    writing-mode: vertical-rl;
    color: white;
    font-size: 18px;
    margin-left: 32px;
    line-height: 24px;
    text-align: center;
  }
</style>
