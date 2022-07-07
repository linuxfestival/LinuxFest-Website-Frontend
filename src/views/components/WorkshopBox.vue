<template>
  <article class="workshop-box">
    <img src="@/assets/images/workshop-box.png" class="workshop-box__image" alt="workshopname" />
    <div class="workshop-box__info">
      <p class="workshop-box__title">Pen testing with Kali Linux</p>
      <p class="workshop-box__teachers-title">
        مدرس
      </p>
      <p class="workshop-box__teacher">احسان عدالت</p>
      <p class="workshop-box__teacher">احسان عدالت</p>
      <p class="workshop-box__teacher">احسان عدالت</p>

      <button class="workshop-box__button">
        توضیحات
      </button>
    </div>
  </article>
</template>

<style scoped>
  .workshop-box {
    display: flex;
    width: 100%;
    border-radius: 16px;
    background-color: #292929;
  }

  .workshop-box__image {
    border-radius: 0 16px 16px 0;
    border-left: 2px solid white;
    flex-shrink: 0;
    width: 40%;
  }

  .workshop-box__info {
    display: flex;
    flex-direction: column;
    padding: 16px;
    color: white;
    flex-grow: 1;
  }

  .workshop-box__title {
    text-align: center;
    direction: rtl;
    font-size: 18px;
    margin: 8px 0 16px 0;
    line-height: 24px;
  }

  .workshop-box__teachers-title {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .workshop-box__teacher:not(:last-of-type) {
    margin-bottom: 8px;
  }

  .workshop-box__button {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: none;
    border: none;

    margin-top: 24px;
    font-size: 16px;
  }
</style>
