<template>
  <div class="infoWrapper">
    <PartialHeader
      title="حساب کاربری"
      backgroundUrl="../assets/img/background2.png"
    />
    <div class="infoMiddleWrapper">
      <div class="userInfoBox">
        <InfoBox title="اطلاعات شخصی" />
        <InfoItem title="نام و نام خانوادگی:" :content="user.fullName" />
        <InfoItem title="ایمیل:" :content="user.email" />
        <InfoItem title="‌‌شماره تماس:" :content="user.phone" />
        <InfoItem title="سن:" :content="user.age" v-if="user.age" />
        <InfoItem
          title="شماره دانشجویی:"
          :content="user.studentNumber"
          v-if="user.studentNumber"
        />
        <InfoItem>
          <router-link class="infoItemButton" to="/user/edit">
            ویرایش اطلاعات
          </router-link>
        </InfoItem>
      </div>

      <div class="workshopsInfoBox">
        <InfoBox :title="workshopsTitle" :isDark="true" />
        <WorkshopRegisterItem
          :key="workshop.id"
          v-for="workshop in workshops"
          :workshop="workshop"
          :isRegistered="true"
        />
        <router-link to="/registerworkshop" class="infoBox-link"
          >مشاهده لیست ارائه‌ها و سخنرانی‌ها</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import WorkshopRegisterItem from '@/components/WorkshopRegisterItem.vue'
import PartialHeader from '@/components/PartialHeader'
import { showErrorNotif } from '@/utils/notifs'

import InfoBox from './components/InfoBox.vue'
import InfoItem from './components/InfoItem.vue'
import { fetchUserAndWorkshops } from './requests'

export default {
  name: 'UserAccount',
  components: {
    WorkshopRegisterItem,
    PartialHeader,
    InfoItem,
    InfoBox,
  },
  data() {
    return {
      isLoading: true,
      user: {},
      workshops: [],
    }
  },
  computed: {
    workshopsTitle() {
      return `لیست ارائه‌ها و سخنرانی‌های ثبت نام شده`
      // return `لیست ارائه‌ها و سخنرانی‌های ثبت نام شده ${this.workshops.length}`
    },
  },
  created() {
    fetchUserAndWorkshops()
      .then(({ user, workshops }) => {
        this.user = user
        this.workshops = workshops
      })
      .catch(() => {
        showErrorNotif('خطایی هنگام ارتباط با سرور رخ داد. لطفا اتصال اینترنت خود را بررسی کنید')
      })
      .finally(() => {
        this.isLoading = false
      })
  },
}
</script>

<style scoped>
.infoWrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: calc(100vh - 40px);
  background-color: #e8e8e8;
  flex-direction: column;
}

.infoMiddleWrapper {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  align-self: stretch;
  margin-top: 40px;
}

.userInfoBox {
  background-color: black;
  border-radius: 15px;
  flex-flow: column wrap;
  display: flex;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
}

.infoItemButton {
  margin: auto;
  margin-bottom: 10px;

  text-decoration: none;
  color: white;
  background-color: #fcc113;
  border-radius: 5px;
  padding: 5px 25px;
}

.workshopsInfoBox {
  background-color: #f4f4f4;
  border-radius: 15px;
  flex-flow: column wrap;
  display: flex;
  padding: 20px;
  width: calc(70% - 60px);
  box-shadow: 0px 0 25px rgba(0, 0, 0, 0.2);
}

.infoBox-link {

  text-align: center;
  text-decoration: none;
  margin-top: 30px;
  color: white;
  background-color: #fcc113;
  align-self: center;
  padding: 5px 20px;
  border-radius: 5px;
}

@media only screen and (max-width: 876px) {
  .infoMiddleWrapper {
    flex-direction: column;
    align-items: stretch;
  }
  .userInfoBox {
    margin: 10px;
  }

  .workshopsInfoBox {
    margin: 10px;
    width: initial;
  }
}
</style>
