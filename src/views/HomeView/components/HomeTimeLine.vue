<template>
  <section class="home-timeline">
    <h1 class="home-timeline__title">
      تقویم برگزاری
    </h1>
    <div class="timelines">

    <article class="timeline">
      <span class="timeline__indicator" />
      <h1 class="timeline__title">
Linux Virtualization
      </h1>
      <p class="timeline__text">
        چهارشنبه ۱۴۰۱/۱/۱۷ 9:45 - 9:0
      </p>
      <p class="timeline__text">
        مدرس: سید پرهام الوانی
      </p>
    </article>

    <span class="timeline-divider" />

    <article class="timeline">
      <span class="timeline__indicator" />
      <h1 class="timeline__title">
Linux Virtualization
      </h1>
      <p class="timeline__text">
        چهارشنبه ۱۴۰۱/۱/۱۷ 9:45 - 9:0
      </p>
      <p class="timeline__text">
        مدرس: سید پرهام الوانی
      </p>
    </article>

    <span class="timeline-divider" />

    <article class="timeline">
      <span class="timeline__indicator" />
      <h1 class="timeline__title">
Linux Virtualization
      </h1>
      <p class="timeline__text">
        چهارشنبه ۱۴۰۱/۱/۱۷ 9:45 - 9:0
      </p>
      <p class="timeline__text">
        مدرس: سید پرهام الوانی
      </p>
    </article>

    <span class="timeline-divider" />

    <article class="timeline">
      <span class="timeline__indicator" />
      <h1 class="timeline__title">
Linux Virtualization
      </h1>
      <p class="timeline__text">
        چهارشنبه ۱۴۰۱/۱/۱۷ 9:45 - 9:0
      </p>
      <p class="timeline__text">
        مدرس: سید پرهام الوانی
      </p>
    </article>

    </div>
  </section>
</template>

<style scoped>
  .home-timeline {
    display: flex;
    padding: 16px;
    flex-direction: column;

    box-sizing: border-box;
    background-color: #252040;
  }

  .home-timeline__title {
    text-align: center;
    font-size: 32px;
    color: white;
    margin: 32px 0;
  }

  .timelines {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    padding-bottom: 32px;
  }

  .timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    border-left: 1px solid white;
    border-right: 1px solid white;
    color: white;
    font-size: 18px;
    width: 100%;
    padding: 16px 16px 16px 0;
  }

  .timeline__indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgb(252, 193, 19);
    position: absolute;
    top: 18px;
    left: -6px;
  }

  .timeline__text {
    margin-top: 24px;
  }

  .timeline-divider {
    margin: 16px 0 16px 16px;
    width: 100%;
    height: 2px;
    background-color: white;
  }
</style>
