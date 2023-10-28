<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- CEIT SSC Google Map iFrame -->
      <!--            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1362.2287533063493!2d51.40939688664675!3d35.7029894660746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb68840e07e8e513!2sComputer%20Engineering%20%26%20IT%20Department!5e0!3m2!1sen!2s!4v1576590359730!5m2!1sen!2s" class="footer-map" frameborder="0" allowfullscreen="true"></iframe>-->

      <div class="footer-social">
        <!-- Footer CEIT CSS Linked Logo here -->
        <a class="footer-social--ceitlogo">
          <img
            src="../assets/img/AUT-CEIT-SSC.png"
            alt="ceit logo"
            style="width: 140px; height: 140px"
          />
        </a>
       <!-- <a class="footer-social--ceitlogo">
          <img
            src="../assets/img/snapp.png"
            alt="snapp logo"
            style="width: 140px"
          /> -->
        </a>
        <div class="footer-social--items">
          <a
            class="footer-social--item"
            target="_blank"
            :href="socialItem.link"
            v-for="socialItem in socialLinks"
            :key="socialItem.link"
          >
            <font-awesome-icon :icon="socialItem.icon" />
          </a>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <p class="footer-copyright--text">
        تمامی حقوق برای انجمن علمی دانشکده مهندسی کامپیوتر دانشگاه صنعتی
        امیرکبیر محفوظ می باشد.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      socialLinks: [
        {
          icon: ['fab', 'google'],
          name: 'gmail',
          link: 'mailto:CElinuxfest@gmail.com',
        },
        {
          icon: ['fab', 'telegram'],
          name: 'telegram',
          link: 'https://t.me/LinuxFest',
        },
        {
          icon: ['fab', 'twitter'],
          name: 'twitter',
          link: 'https://twitter.com/LinuxFestival',
        },
        {
          icon: ['fab', 'instagram'],
          name: 'instagram',
          link: 'https://instagram.com/linuxfest.aut',
        },
      ],
    }
  },
}
</script>

<style scoped>
.footer {
  background-color: black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.footer-container {
  max-width: 1140px;
  min-height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 30px;
}

.footer-map {
  border-radius: 15px;
  height: 300px;
  width: 300px;
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.footer-social--ceitlogo {
  display: flex;
  flex-direction: column;
}

.footer-social--ceitlogo img {
  width: 400px;
  margin-bottom: 20px;
}

.footer-social--items {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 40px;
  justify-content: space-evenly;
}

.footer-social--item {
  color: #f9f9f9;
  font-family: "Arial";
  margin: 10px;
  text-decoration: none;
}

.footer-social--item:hover {
  text-decoration: underline;
}

.footer-copyright--text {

  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}

@media only screen and (max-width: 576px) {
  .footer-social--ceitlogo img {
    width: 100%;
  }

  .footer-map {
    width: calc(100% - 20px);
  }

  .footer-social--ceitlogo {
    margin-top: 20px;
  }
}
</style>
