<template>
    <div class="parent">
        <PartialHeader title="ثبت نام در ارائه‌ها و سخنرانی‌ها" backgroundUrl="../assets/img/background2.png"/>

        <div class="workshopsListWrapper">
            <div class="workshopsList">
                <WorkshopRegisterItem @toggleSelect="toggleSelectMe(workshop._id)"
                                      v-for="(workshop, index) in workshops"
                                      :workshop="workshop"
                                      :isSelected="isInSelectedWorkshopsForRegister(workshop._id)"
                                      :key="index" v-if="workshop.isRegOpen"/>
            </div>
        </div>

        <div class="workshopsListFooter">
            <p>
                تعداد
                {{selectedWorkshopsForRegister.length}}
                ورکشاپ برای ثبت نام انتخاب شده است.
            </p>
          <div class="discount">
            <label for="discount">کد تخفیف </label>
            <input placeholder="code" id="discount" v-model="discountCode">
          </div>
            <button @click="register()" class="workshopsRegisterButton">ثبت نام</button>
        </div>
    </div>
</template>

<script>
    import WorkshopRegisterItem from '@/components/WorkshopComponents/WorkshopRegisterItem'
    import PartialHeader from '@/components/PartialHeader'
    import axios from 'axios'

    export default {
        name: "AllWorkshopsContent",
        components: {
            WorkshopRegisterItem,
            PartialHeader
        },
     async created() {
            // this.getWorkshops();
            // if (this.$route.query.workshop !== undefined) {
            //     this.toggleSelectMe(this.$route.query.workshop)
            // }
        await this.$store.dispatch('getWorkshopsFromServer')
        },
        data: function () {
            return {
                selectedWorkshop: 'empty',
                checked: 'empty',
                // workshops: [],
                discountCode:"",
                baseURL:this.$store.getters.baseUrl
            }
        },
        computed: {
            selectedWorkshopsForRegister: function () {
                return this.$store.getters.selectedWorkshopsForRegister.workshopIds;
            },
            objectToPost: function () {
              let data = []
                for(let u of this.$store.getters.selectedWorkshopsForRegister.workshopIds){
                  data.push(u);
                }
                return {
                  workshopIds: data,
                  discount:this.discountCode
                }
            },
          workshops(){
              return this.$store.getters.getAllWorkshops
          }
        },

        methods: {
            register: function () {
                console.log(this.objectToPost);
                return new Promise((resolve, reject) => {
                    axios({
                        url: this.baseURL + 'users/initpayment',
                        method: 'post',
                        data: this.objectToPost,
                        headers: this.$store.getters.httpHeaders
                    }).then(response => {
                      console.log("response:"+response);
                          console.log(response);
                          this.redirectForPayment(response);
                          resolve();

                    }).catch(error => {
                      if(error.response.status===400) {
                        this.$notify({
                          group: 'auth',
                          title: 'خطا',
                          text: 'در کارگاه ثبت نام کرده اید و یا کارگاهی برای ثبت نام انتخاب نکرده اید ',
                          type: "error"
                        });
                      }
                      else{
                        this.$notify({
                          group: 'auth',
                          title: 'خطا',
                          text: 'خطایی در سرور رخ داده است. مجددا تلاش کن',
                          type: "error"
                        });
                      }
                        console.log(error.response);
                        reject();
                    })
                })
            },

            redirectForPayment: function (response) {
                if (response.data === 'Paid') {
                    this.$notify({
                        group: "auth",
                        title: "موفقیت",
                        text: "با موفقیت در ورکشاپ های رایگان ثبت نام کردید.",
                        type: "success"
                    });
                    this.$router.push('/user/me')
                }
                else if(response.data === 'Error'){
                  this.$notify({
                    group: "auth",
                    title: "موفقیت",
                    text: "خطایی رخ داده است. لطفا مجددا تلاش کنید.",
                    type: "success"
                  });
                }
                else {
                  this.$notify({
                    group: "auth",
                    title: "موفقیت",
                    text: "به درگاه بانکی وارد می شوید.",
                    type: "success"
                  });
                    console.log("go to payment")
                    window.location = response.data;
                }

            },

            toggleSelectMe(workshopId) {
                console.log('click fired.')
                if (!this.isInSelectedWorkshopsForRegister(workshopId)) {
                    this.selectedWorkshopsForRegister.push(workshopId);
                } else {
                    this.removeSelectedWorkshop(workshopId);
                }
            },

            removeSelectedWorkshop(workshopId) {
                let workshopIndex = this.selectedWorkshopsForRegister.indexOf(workshopId);
                this.selectedWorkshopsForRegister.splice(workshopIndex, 1);
            },

            isInSelectedWorkshopsForRegister(workshopId) {
                return this.selectedWorkshopsForRegister.includes(workshopId);
            },

            getWorkshops() {
                axios({
                    url: this.$store.getters.baseUrl + 'workshops',
                    method: 'get'
                }).then(response => {
                    this.workshops = response.data;
                }).catch(error => {
                    console.log(error.response);
                })
            }
        },

    }
</script>

<style scoped>

    .parent {
        min-height: calc(100vh - 40px);
    }

    .workshopsList {
        width: 1140px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .workshopsListWrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .workshopsListTitle {
        background-color: #e8e8e8;
    }

    .workshopsListFooter {
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: 'iransans';
    }

    .workshopsRegisterButton {
        border: none;
        font-size: 15px;
        margin-top: 20px;
        padding: 5px 30px;
        font-family: 'iransans';
        background-color: #521c34;
        color: white;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.1s ease-in-out;
    }

    .workshopsRegisterButton:hover {
        box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.3);
    }
    .discount{
      margin: 20px;
      font-family: 'iransans';
    }
    .discount input{
      padding: 3px;
      margin-right: 8px;
      border-radius: 4px;
      border: solid gray 1px;
      text-align: center;
      font-size: 16px;
    }

</style>