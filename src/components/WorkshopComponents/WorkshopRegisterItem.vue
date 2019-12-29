<template>
    <div class="workshopRegItemWrapper">
        <div class="workshopRegItemContent" :class="[{'selected' : isSelected}]" @click="$emit('toggleSelect')">
            <i class="material-icons selectedIcon" v-if="isSelected">done</i>
            <img class="workshopRegItemImage" draggable="false" src="../../assets/img/workshop.png" :alt="'workshop ' + workshop.id + ' image'">
            <h3 class="workshopRegItemTitle">
                <i class="material-icons" v-if="isSelected">done</i>
                <i class="material-icons rotate-180" v-else>double_arrow</i>
                {{workshop.title}}
            </h3>
            <h3 class="workshopRegItemPrice">
                <i class="material-icons">attach_money</i>
                 تومان {{workshop.price}}
            </h3>
            <router-link :to="'/more/' + workshop._id" class="workshopRegItemMoreButton">اطلاعات بیشتر...</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkshopRegisterItem",
        props : {
            workshop : {},
            isSelected : false,
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .workshopRegItemWrapper {
        display : flex;
        align-items:center;
        width:100%;
        margin-top:5px;
        margin-bottom:5px;
    }

    .workshopRegItemContent {
        border-radius:30px;
        background-color: #191919;
        height:65px;
        width:calc(100%);
        display: flex;
        align-items:center;
        transition:all 0.2s ease-in;
        cursor:default;
    }

    .workshopRegItemContent.selected {
        background-color:#e4b22b;
    }

    .workshopRegItemImage {
        height:65px;
        border-radius:0 30px 30px 0;
        border-left:3px solid #f9f9f9;
    }
    .workshopRegItemTitle {
        font-family : 'iransans';
        display:flex;
        align-items:center;
        color:white;
        margin-left:auto;
    }

    .workshopRegItemTitle i.material-icons {
        margin-right:15px;
        margin-left:15px;
    }

    .workshopRegItemPrice {
        font-family : 'iransans';
        display:flex;
        align-items:center;
        color:white;
    }

    .material-icons.rotate-180 {
        transform: rotate(180deg);
    }

    .workshopRegItemMoreButton {
        margin-right:auto;
        margin-left:20px;
        background-color:#ddd;
        color: #333;
        text-decoration: none;
        font-family : 'iransans';
        padding:5px 10px;
        border-radius:30px;
    }

    .workshopRegItemContent:hover {
        background-color: #521c34;
    }

    .workshopRegItemContent:hover .workshopRegItemTitle,
    .workshopRegItemContent:hover .workshopRegItemPrice {
        color: #e4b22b;
    }

    .workshopRegItemContent:hover .workshopRegItemMoreButton {
        background-color :#e4b22b;
        color:white;
    }

    .workshopRegItemContent:hover .workshopRegItemImage {
        border-left-color: #e4b22b;
    }

    i.material-icons.selectedIcon {
        position: absolute;
        color: rgba(255,255,255,0.8);
        font-weight: bold;
        font-size: 50px;
        margin-right: 7px;
    }

    @media only screen and (max-width: 576px) {
        .workshopRegItemTitle i.material-icons {
            margin-right:5px;
            margin-left:5px;
            font-size:14px;
        }

        .workshopRegItemTitle {
            font-size:14px;
            font-weight:normal;
        }

        .workshopRegItemPrice {
            font-size: 14px;
        }

        .workshopRegItemPrice i.material-icons {
            font-size:14px;
        }

        .workshopRegItemMoreButton {
            font-size: 10px;
            font-weight: bold;
        }
    }

</style>