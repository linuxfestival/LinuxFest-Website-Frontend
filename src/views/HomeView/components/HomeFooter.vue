<script setup>

</script>

<template>
  <footer class="home-footer">
    <img src="@/assets/images/ssc-logo.png" alt="SSC" class="home-footer__logo">
    <img src="@/assets/images/snapp-logo.png" alt="snapp" class="home-footer__supporter" />
    <p class="home-footer__copyright">
      تمامی حقوق برای انجمن علمی دانشکده مهندسی کامپیوتر دانشگاه صنعتی امیرکبیر محفوظ می باشد.
    </p>
  </footer>
</template>

<style scoped>
  .home-footer {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home-footer__logo {
    width: 140px;
    height: 140px;
    margin: 32px 0;
  }

  .home-footer__supporter {
    width: 140px;
    margin-bottom: 32px;
  }

  .home-footer__copyright {
    color: white;
    text-align: center;
    margin-bottom: 32px;
  }
</style>
