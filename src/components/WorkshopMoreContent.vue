<template>
    <div class="parent">
            <PartialHeader :title="workshop.title"></PartialHeader>
            <div class="workshopContentWrapper">
                <div class="workshopContent">
                    <div class="workshopTeachersDescription">
                        <h2 class="workshopTeachersDesciption-title">
                            <i class="material-icons">person</i>
                            توضیحات مدرسین کارگاه :
                        </h2>
                        <div class="teacherDescriptionWrapper">
                            <div class="teacherDescription" v-for="teacher in teachers" :key="teachers.indexOf(teacher)"> 
                                <p class="teacherDescription-name">
                                    <i class="material-icons">person</i>
                                    {{teacher.fullName}}
                                    :
                                </p>
                                <p class="teacherDescription-desc">
                                    {{teacher.description}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="workshopTeachersImages">
                        <img v-for="teacher in teachers" :key="teachers.indexOf(teacher)" :src="teacher.imagePath" draggable="false" class="workshopTeacherImages-image" :alt="teacher.fullName + ' image'">    
                    </div>
                    <div class="workshopContentDescription">
                        <h1 class="workshopContentDescription-title">
                            <i class="material-icons rotate-180">double_arrow</i>
                                در مورد این کارگاه :   
                        </h1>
                        <p class="workshopContentDescripion-desc">
                            {{workshop.description}}
                        </p>
                        <router-link :to="'/registerworkshop/?workshop=' + workshop._id" class="registerButton">ثبت نام</router-link>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import PartialHeader from '@/components/PartialHeader'

    export default {
        name: "WorkshopMoreContent",
        components : {
            PartialHeader,
        },
        data() {
            return {
                workshop : {},
                teachers : []
            }
        },
        computed: {
            getName: function () {
                return this.$store.getters.getWorkshopMore.title;
            },
            getDescription: function () {
                return this.$store.getters.getWorkshopMore.description;
            },
            getTeachers: function () {
                return this.$store.getters.getWorkshopMore.teachers;
            }
        },
        created() {
            console.log(this.$route.params.id);
            axios({
                url : this.$store.getters.baseUrl + "/workshops/" + this.$route.params.id,
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
    .workshopTitleWrapper {
        width:100%;
        background: url('../assets/img/background2.png') no-repeat center center;
        min-height:300px;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .workshopContentWrapper {
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        margin-top:30px;
    }

    .workshopContent {
        width:1140px;
        min-height:400px;
        background-color:#333;
        border-radius:30px;
        display:flex;
    }

    .workshopTeachersDescription {
        background-color : #521c34;
        border-radius:0 30px 30px 0;
        border-left:3px solid #e4b22b;
        display:flex;
        justify-content:flex-start;
        flex-direction:column;
        padding-left: 70px;
        width:25%;
    }

    .teacherDescriptionWrapper {
        display:flex;
        align-items:flex-start;
        justify-content:center;
        flex-direction:column;
        margin:auto 0;
    }

    .workshopTeachersDesciption-title {
        /* margin-bottom:auto; */
        margin-top:10px;
        display:flex;
        align-items:center;
    }

    .workshopTeachersDesciption-title i.material-icons {
        margin-left:5px;
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
        width:100px;
        height:100px;
        border-radius:50%;
        border:3px solid #e4b22b;
        margin-top:10px;
        margin-bottom:10px;
    }

    .workshopTeachersDesciption-title {
        font-family: 'iransans';
        color :#e4b22b;
        position: absolute;

    }

    .parent {
        min-height:100vh;
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
        margin-top:10px;
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
        /* background-color: black; */
        border-radius: 30px 0 0 40px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
    }

    .workshopContentDescription-title {
        margin-top:10px;
        font-family: 'iransans';
        color :#e4b22b;
    }

    .workshopContentDescripion-desc {
        font-family : 'iransans';
        color:white;
        padding:15px;
        text-align:justify;
    }

    .registerButton {
       background-color: #e4b22b;
       color:white;
       text-decoration:none;
       font-size:20px;
       padding:5px 30px;
       font-family: 'iransans';
       border-radius:30px; 
       margin:auto auto 15px 10px;
    }

    @media only screen and (max-width:991.8px ) {
        .workshopContent {
            flex-direction: column-reverse;
        }
        
        .workshopTeachersImages {
            display:none;
        }

        .workshopTeachersDescription {
            border-left:none;
            padding-left:0;
            border-radius:0;
            width:initial;
        }

        .workshopContentDescription {
            padding : 20px;
            width: initial;
        }

        .workshopContentDescripion-desc {
            line-height:30px;
        }

        .workshopTeachersDesciption-title {
            position:static;
        }
    }

</style>