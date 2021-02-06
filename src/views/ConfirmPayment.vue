<template>
    <div class="infoWrapper">
        <h1 class="info-title" v-if="status && status === 'GOOD'">
            <i class="material-icons">done</i>
            پرداخت شما با موفقیت انجام شد
        </h1>
        <h1 class="info-title" v-else>
            <i class="material-icons">close</i>
            خطایی هنگام پرداخت رخ داد و یا توسط کاربر کنسل شد.
        </h1>
        <br>
<!--        <h2 class="info-codes" v-if="status && status === 'GOOD'">-->
<!--           اطلاعات پرداخت :-->
<!--            <br>-->
<!--            کد رهگیری : {{resultData.RetrivalRefNo}}-->
<!--        </h2>-->
        <button class="info-button" @click="showProfile">مشاهده پروفایل</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ConfirmPayment",
        data() {
            return {
                wrongData: false,
                resultData: {},
                status:""
            }
        },
        methods : {
          showProfile(){
            this.$router.push('/user/me');
          }
        },
        created() {
          console.log("confirmPayment:")
            try {
                    console.log("resultQuery")
                    axios({
                      url: this.$store.getters.baseUrl+"users/verifyPayment?order_id="+this.$route.query.order_id+"&amount="+this.$route.query.amount+"&Authority="+this.$route.query.Authority,
                      method: 'get'
                    }).then(response => {
                      if(response.status === 200){
                        console.log(response)
                        this.status = "GOOD"
                      }
                    }).catch(error => {
                      console.log(error.response);
                    })
            } catch (e) {
                this.$router.push('/user/me');
            }
        },
    }
</script>

<style scoped>
    .infoWrapper {
        display:flex;
        align-items:center;
        justify-content:center;
        min-height:calc(100vh - 40px);
        margin-top:40px;
        flex-direction:column;
        background: url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80") no-repeat center / cover;
        /*background-color:black;*/
    }

    .info-title {
        font-family : 'iransans';
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
    }

    .info-title i.material-icons {
        margin-left: 10px;
        font-weight: bold;
        font-size: 30px;
    }
    .info-button {
        background-color: #e4b22b;
        border-radius: 5px;
        border: none;
        margin-top:15px;
        padding: 5px 10px 5px 10px;
        color: white;
        cursor:pointer;
        font-size: 20px;
        font-family: 'iransans';
    }

    .info-codes {
        font-family: iransans;
        font-size: 18px;
        margin-bottom:10px;
        color:white;
    }
</style>