<template>
    <div class="parent">
            <PartialHeader :title="workshop.title" />
            <div class="workshopContentWrapper">
                <div class="workshopContent">
                    <div class="workshopTeachersDescription">
                        <h2 v-if="workshop.teachers.length === 1" class="workshopTeachersDescription-title">
                            <i class="material-icons">person</i>
                            توضیحات مدرس:
                        </h2>
                        <h2 v-else class="workshopTeachersDescription-title">
                            <i class="material-icons">person</i>
                            توضیحات مدرسین:
                        </h2>
                        <div class="teacherDescriptionWrapper">
                            <div class="teacherDescription" v-for="teacher in teachers" :key="teachers.indexOf(teacher)">
                                <p class="teacherDescription-name">
                                    <i class="material-icons">person</i>
                                    {{teacher.fullName}}:
                                </p>
                                <p class="teacherDescription-desc">
                                    {{teacher.description}}
                                </p>
                            </div>
                        </div>
                    </div>
<!--                    <div class="workshopTeachersImages">-->
<!--                        <img v-for="teacher in teachers" :key="teachers.indexOf(teacher)" :src="'http://linux.ce.aut.ac.ir/' + teacher.picUrl.replace('/','')" draggable="false" class="workshopTeacherImages-image" :alt="teacher.fullName + ' image'">-->
<!--                    </div>-->
                    <div class="workshopContentDescription">
                        <h1 v-if="workshop.price === 0" class="workshopContentDescription-title">
                            <i class="material-icons rotate-180">double_arrow</i>
                                در مورد این سخنرانی:
                        </h1>
                        <h1 v-else class="workshopContentDescription-title">
                            <i class="material-icons rotate-180">double_arrow</i>
                                در مورد این ارائه:
                        </h1>
                        <div class="workshopContentDescription-desc" v-html="workshop.description" ></div>

                        <h3 class="timeline-title">جدول زمانی:</h3>

                        <p class="timeline-description" v-for="timeSlot in workshop.times">
                            {{workshop.times.indexOf(timeSlot) + 1}}.
                            {{getJalali(timeSlot.startTime).utc().locale('fa').format("dddd YYYY/MM/DD")}}
                            | ساعت:
                            {{getJalali(timeSlot.startTime).utc().locale('fa').format("HH:mm")}}
                            تا
                            {{getJalali(timeSlot.endTime).utc().locale('fa').format("HH:mm")}}
                        </p>
                        <h3 class="timeline-title">
                            هزینه ثبت نام:
                        </h3>
                        <p class="timeline-description" v-if="workshop.price !== 0">
                            {{workshop.price}}
                            ریال
                        </p>
                        <p class="timeline-description" v-else>
                            رایگان
                        </p>
                        <router-link :to="'/registerworkshop/?workshop=' + workshop._id"
                                     v-if="workshop.isRegOpen" class="registerButton">ثبت نام</router-link>
                        <p v-else class="registerButton">ظرفیت ارائه تکمیل شده است.</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import jalali from 'jalali-moment'
    import Gallery from "@/components/WorkshopComponents/Gallery"
    import PartialHeader from '@/components/PartialHeader'

    export default {
        name: "WorkshopMoreContent",
        components : {
            PartialHeader,
            Gallery
        },
        data() {
            return {
                workshop : {},
                teachers : [],
                album : [
                    {
                        title: "image1",
                        description: "image1 desc",
                        url: "https://scx1.b-cdn.net/csz/news/800/2019/2-nature.jpg"
                    },
                    {
                        title : '',
                        description : '',
                        url : 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
                    }
                ]
            }
        },
        methods : {
            getJalali(date) {
                return jalali(date);
            }
        },
        computed: {

        },
        created() {
            console.log("start showing workshop");
            axios({
                url : this.$store.getters.baseUrl + "workshops/" + this.$route.params.id,
                method : 'get', 
            }).then(response => {
                console.log(response);
                this.workshop = response.data.workshop;
                this.teachers = response.data.teachers;
            }).catch(error => {
                console.log(error.response)
            })

        }
    }
</script>

<style scoped>

    .workshopContentWrapper {
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:30px;
        margin-bottom:60px;
    }

    .workshopContent {
        width:1140px;
        min-height:400px;
        background-color:#333;
        border-radius:15px;
        display:flex;
    }

    .workshopTeachersDescription {
        background-color : #521c34;
        border-radius:0 15px 15px 0;
        border-left:3px solid #e4b22b;
        display:flex;
        justify-content:flex-start;
        flex-direction:column;
        padding-left: 70px;
        width:25%;
        padding-bottom:110px;
    }

    .timeline-title {
        font-family: 'iransans';
        color : #e4b22b;
        margin-right:30px;
        margin-top:10px;
    }

    .timeline-description {
        font-family : 'iransans';
        color:white;
        font-size:15px;
        margin:5px 40px;
    }

    .teacherDescriptionWrapper {
        display:flex;
        align-items:flex-start;
        justify-content:center;
        flex-direction:column;
        margin:auto 10px;
    }

    .workshopTeachersDescription-title {
        margin-top:10px;
        display:flex;
        align-items:center;
    }

    .workshopTeachersDescription-title i {
        margin-left:15px;
        margin-right:15px;
    }

    .workshopTeachersImages {
        width:100px;
        background-color:rgba(0,255,0,0);
        min-height:400px;
        margin-right:-50px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }

    .workshopTeacherImages-image {
        width:140px;
        height:140px;
        border-radius:50%;
        border:3px solid #e4b22b;
        margin-top:100px;
        margin-bottom:10px;
    }

    .workshopTeachersDescription-title {
        font-family: 'iransans';
        color :#e4b22b;
        position: absolute;
    }

    .parent {
        background-color:#f1f1f1;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        flex-direction:column;
    } 

    i.material-icons.rotate-180 {
        transform: rotate(180deg);
    }

    .teacherDescription {
        display:flex;
        align-items:flex-start;
        justify-content:center;
        flex-direction:column;
        margin-top:190px;
    }

    .teacherDescription-name {
        color: #e4b22b;
        font-weight:bold;
        font-family: 'iransans';
        display:flex;
        align-items:center;
        margin-right:10px;
    }

    .teacherDescription-name i.material-icons {
        margin-left:5px;
    }

    .teacherDescription-desc {
        color:white;
        font-family: 'iransans';
        text-align:justify;
        padding:5px 5px 5px 10px;
        margin-right:15px;
    }

    .workshopContentDescription {
        width: 680px;
        min-height: 400px;
        border-radius: 15px 0 0 15px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    }

    .workshopContentDescription-title {
        margin-top:10px;
        font-family: 'iransans';
        color :#e4b22b;
        display:flex;
        align-items:center;
    }

    .workshopContentDescription-title i.material-icons {
        margin-left: 10px;
    }

    .workshopContentDescription-desc {
        font-family : 'iransans';
        color:white;
        text-align:justify;
        width:95%;
        margin-right:30px;
    }

    .registerButton {
       background-color: #e4b22b;
       color:white;
       text-decoration:none;
       font-size:20px;
       padding:5px 30px;
       font-family: 'iransans';
       border-radius:5px; 
       margin:auto auto 15px 10px;
    }

    @media only screen and (max-width:1100px ) {
        .workshopContent {
            flex-direction: column-reverse;
            border-radius:0;
        }
        
        .workshopTeachersImages {
            display:none;
            margin-bottom:0px;
        }

        .workshopTeachersDescription {
            border-left:none;
            padding:20px 0;
            border-radius:0;
            width:initial;
        }

        .workshopContentDescription {
            padding : 20px;
            width: initial;
        }

        .workshopContentDescription-desc {
            line-height:30px;
            margin-right:15px;
        }

        .workshopTeachersDescription-title {
            position:static;
        }

        .workshopTeacherImages-image {
            margin-top:10px;
        }

        .teacherDescription {
            margin-top:10px;
        }
    }

    @media only screen and (max-width:500px ) {
        .workshopContentDescription-desc {
            margin-right:5px;
        }
    }
</style>