<template>
    <div class="parent">
        <PartialHeader title="ثبت نام در کارگاه ها" backgroundUrl="../assets/img/background2.png"></PartialHeader>

        <div class="workshopsListWrapper">
            <div class="workshopsList">
                <WorkshopRegisterItem @toggleSelect="toggleSelectMe(workshop._id)" :workshop="workshop"
                                      v-for="workshop in workshops"
                                      :isSelected="isInSelectedWorkshopsForRegister(workshop._id)"
                                      :key="workshop._id"></WorkshopRegisterItem>
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
            if (this.$route.query.workshop != undefined) {
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
                return this.$store.getters.selectedWorkshopsForRegister;
            }
        },
        methods: {
            register: function () {
                console.log(this.selectedWorkshopsForRegister)
                return new Promise((resolve, reject) => {
                    axios({
                        url: this.$store.getters.baseUrl + '/users/initPayment',
                        method: 'post',
                        data: this.selectedWorkshopsForRegister,
                        headers: this.$store.getters.httpHeaders
                    }).then(response => {
                        this.$notify({
                            group: "auth",
                            title: "موفقیت",
                            text: "کارگاه موردنظر اضافه شد",
                            type: "success"
                        });
                        this.$router.push("/user/me");
                        console.log(response)
                        resolve();
                    }).catch(error => {
                        this.$notify({
                            group: 'auth',
                            title: 'خطا',
                            text: 'خطایی هنگام ارتباط با سرور رخ داد. لطفا دوباره تلاش کنید',
                            type: "error"
                        })
                        console.log(error)
                        reject();
                    })
                })

            },
            toggleSelectMe(workshopId) {
                console.log('click fired.')
                if (!this.isInSelectedWorkshopsForRegister(workshopId)) {
                    this.selectedWorkshopsForRegister.push(workshopId);
                } else {
                    this.removeSelectedWorkshop(workshopId);
                }
                console.log('selected workshops :', this.selectedWorkshopsForRegister);
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
                    url: this.$store.getters.baseUrl + '/workshops',
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
        border-radius: 30px;
        transition: all 0.1s ease-in-out;
    }

    .workshopsRegisterButton:hover {
        box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.3);
    }

</style>