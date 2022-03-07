<template>
  <section class="aboutEventWrapper">
    <div class="aboutEventContainer">
      <h1 class="aboutEvent-title">
        {{ sponsorTitle }}
      </h1>
      <p class="aboutEvent-description">{{ sponsorDescription }}</p>
      <img
        src="@/assets/img/white_snapp.png"
        alt="Snapp Logo"
        class="aboutEvent-logo"
        draggable="false"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Sponsor',
  data() {
    return {
      sponsorTitle: 'حامی ما',
      sponsorTitleIcon: 'keyboard_arrow_left',
      sponsorDescription:
        'تیم فنی اسنپ از بدو شروع به کار تاکنون با قدرت گرفتن از ابزارهای متن‌باز (open source) و سیستم عامل لینوکس، اقدام به پیاده‌سازی زیرساختی امن، قابل اطمینان و مقیاس‌پذیر، در اسنپ کرده‌است. در این زیرساخت، تمامی سرورها از سیستم‌عامل لینوکس استفاده کرده و از ابزار‌های مجازی‌سازی مختلفی برای اشتراک منابع، استفاده می‌شود. در کنار این سیستم‌عامل، نرم‌افزارهای متن‌باز، لایه‌های دیگر زیرساخت اسنپ را نیز تشکیل می‌دهند. \n'
        + 'با رشد تیم فنی اسنپ و افزایش تعداد کاربران، اسنپ با هدف بهبود سرعت عملکرد در توسعه کد و بهینه‌سازی منابع، تصمیم به تشکیل تیم cloud و استفاده از تکنولوژی‌های این حوزه کرد. این تیم با استفاده از فناوری‌هایی مانند “kubernetes” و “openstack” تلاش می‌کند تا مطمئن‌ترین و بهینه‌ترین سرویس را برای کاربران خود، فراهم کند.  \n'
        + 'باتوجه به موارد ذکر شده، اسنپ با استفاده از این زیرساخت، قابلیت خدمت‌رسانی به بیش‌از ۲ میلیون کاربر روزانه را دارد.',
    }
  },
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
  background: #252040;
}

.aboutEventContainer {
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.aboutEvent-title {
  color: rgb(242, 169, 56);

  font-size: 25px;
  margin: 20px 30px;
  display: flex;
  align-items: center;
}

.aboutEvent-description {
  color: white;

  margin: 0 30px 30px 30px;
  line-height: 50px;
  text-align: justify;
  font-size: 18px;
}

.aboutEvent-logo {
  width: 40%;
  margin-bottom: 30px;
}
</style>
