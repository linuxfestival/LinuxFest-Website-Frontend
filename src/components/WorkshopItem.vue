<template>
    <div class="workshop-item" @click="showMore()">
        <img class="workshop-item--image" src="../assets/img/workshop.png" :alt="'workshop ' + workshop.id + ' image'">
        <div class="workshop-item--info">
            <h2 class="workshop-item--info-title">{{workshop.title}}</h2>
            <h3 v-if="workshop.teachers.length == 1" class="workshop-item--info-teachTitle">
                <i class="material-icons">person</i>
                مدرس :
            </h3>
            <h3 v-else-if="workshop.teachers.length > 1" class="workshop-item--info-teachTitle">
                <i class="material-icons">person</i>
                مدرسین :
            </h3>
            <p class="workshop-item--info-teachItem" v-for="teacher in workshop.teachers" :key=teacher.id>
                {{teacher.name}}
            </p>
            <button class="workshop-item--info-moreButton" @click="showMore(workshop)">
                توضیحات
                <i class="material-icons">keyboard_arrow_left</i>    
            </button>    
        </div>
    </div>
</template>

<script>
export default {
    name : "WorkshopItem",
    props : {
        workshop : {}
    },
    methods:{
        showMore:function () {
            this.$router.push('/more/'+this.workshop._id)
        }
    }
}
</script>

<style scoped>
    .workshop-item {
        border-radius:30px;
        min-width:350px;
        min-height:200px;
        max-width:350px;
        background-color: rgb(41,41,41);
        display:flex;
        cursor:pointer;
        transition:all 0.1s ease-in;
        margin:10px;
    }

    .workshop-item:hover {
        box-shadow:0 0 30px rgba(0,0,0,0.3);
        background-color: #521c34;
    }

    .workshop-item:hover > .workshop-item--info {
        color: rgb(242,169,56);
    } 

    .workshop-item:hover  .workshop-item--info-moreButton {
        background-color: rgb(242,169,56);
        color:white;
    }

    .workshop-item--info {
        width:calc(50% - 3px);
        border-radius:30px 0 0 30px;
        border-right:3px solid white;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        flex-direction:column;
        color:white;
    }

    .workshop-item--info-title {
        margin-top:20px;
        font-family :'Arial';
        font-size:20px;
    }

    .workshop-item--info-teachTitle {
        margin-top:10px;
        margin-right:10px;
        font-family: 'iransans';
        font-size:12px;
        align-self:flex-start;
    }

    .workshop-item--info-teachItem {
        margin-top:5px;
        margin-right:15px;
        font-family: 'iransans';
        font-size:15px;
        align-self:flex-start;
        font-weight: bolder;
    }

    .workshop-item--info-moreButton{
        width:calc(100% - 20px);
        border-radius:40px;
        display:flex;
        align-items:center;
        justify-content: center;
        margin:auto 10px 20px 10px;
        font-family: 'iransans';
        border:none;
        cursor: pointer;
    }
    .workshop-item--image {
        width:50%;
    }

</style>