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
        created() {
            this.getWorkshops();
            if (this.$route.query.workshop !== undefined) {
                this.toggleSelectMe(this.$route.query.workshop)
            }
        },
        data: function () {
            return {
                selectedWorkshop: 'empty',
                checked: 'empty',
                workshops: []
            }
        },
        computed: {
            selectedWorkshopsForRegister: function () {
                return this.$store.getters.selectedWorkshopsForRegister.workshopIds;
            },
            objectToPost: function () {
                return this.$store.getters.selectedWorkshopsForRegister;
            }
        },

        methods: {
            register: function () {
                console.log(this.objectToPost);
                return new Promise((resolve, reject) => {
                    axios({
                        url: 'http://linux.ce.aut.ac.ir/users/initpayment',
                        method: 'post',
                        data: this.objectToPost,
                        headers: this.$store.getters.httpHeaders
                    }).then(response => {
                      console.log("response:");
                        if(response.data !== 'OK') {
                            this.$notify({
                                group: "auth",
                                title: "موفقیت",
                                text: "به درگاه پرداخت برده می شوید",
                                type: "success"
                            });
                        }
                        console.log(response);
                        this.redirectForPayment(response);
                        resolve();
                    }).catch(error => {
                      if(error.response.status===400) {
                        this.$notify({
                          group: 'auth',
                          title: 'خطا',
                          text: 'در کارگاه ثبت نام کرده اید. ',
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
                if (response.data === 'OK') {
                    this.$notify({
                        group: "auth",
                        title: "موفقیت",
                        text: "با موفقیت در ورکشاپ های رایگان ثبت نام کردید.",
                        type: "success"
                    });
                    this.$router.push('/user/me')
                } else {
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

</style>