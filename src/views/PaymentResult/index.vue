<template>
  <div class="infoWrapper">
    <FulLPageLoading v-if="isLoading" />
    <h1 class="info-title" v-if="isPaymentGood">
      <i class="material-icons">done</i>
      پرداخت شما با موفقیت انجام شد
    </h1>
    <h1 class="info-title" v-else>
      <i class="material-icons">close</i>
      خطایی هنگام پرداخت رخ داد و یا توسط کاربر کنسل شد.
    </h1>
    <br />
    <!--        <h2 class="info-codes" v-if="status && status === 'GOOD'">-->
    <!--           اطلاعات پرداخت :-->
    <!--            <br>-->
    <!--            کد رهگیری : {{resultData.RetrivalRefNo}}-->
    <!--        </h2>-->
    <router-link class="info-button" to="/user/me">مشاهده پروفایل</router-link>
  </div>
</template>

<script>
import FulLPageLoading from '@/components/FullPageLoading.vue'
import { showErrorNotif } from '@/utils/notifs'

import { verifyPayment } from './requests'
import { PAYMENT_RESULT } from './constants'

export default {
  name: 'PaymentResult',
  components: {
    FulLPageLoading,
  },
  data() {
    return {
      isLoading: true,
      wrongData: false,
      resultData: {},
      status: '',
    }
  },
  computed: {
    isPaymentGood() {
      return this.status && this.status === PAYMENT_RESULT.GOOD
    },
  },
  created() {
    const {
      query: { order_id: orderId, Authority: authority, amount },
    } = this.$route
    verifyPayment({ orderId, authority, amount })
      .then((status) => {
        if (status === PAYMENT_RESULT.GOOD) {
          this.status = status
        }
      })
      .catch(() => {
        showErrorNotif()
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
  justify-content: center;
  min-height: calc(100vh - 40px);
  margin-top: 40px;
  flex-direction: column;
  background: url("../../assets/img/result.jpg") no-repeat center / cover;
}

.info-title {

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.info-title i.material-icons {
  margin-left: 10px;
  font-weight: bold;
  font-size: 30px;
}
.info-button {
  background-color: #fcc113;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  padding: 5px 10px 5px 10px;
  color: white;
  cursor: pointer;
  font-size: 20px;

}

.info-codes {
  font-family: iransans;
  font-size: 18px;
  margin-bottom: 10px;
  color: white;
}
</style>
