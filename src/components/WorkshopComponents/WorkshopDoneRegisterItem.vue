<template>
    <div class="workshopRegItemWrapper">
        <div class="workshopRegItemContent">
            <img class="workshopRegItemImage" draggable="false" src="../../assets/img/workshop.png" :alt="'workshop ' + workshop.id + ' image'">
            <h3 class="workshopRegItemTitle">
                <i class="material-icons rotate-180" >double_arrow</i>
                {{workshop.title}}
            </h3>
            <router-link :to="'/workshops/' + workshop._id" class="workshopRegItemMoreButton">اطلاعات بیشتر...</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkshopDoneRegisterItem",
        props : {
            workshop : {
                type : Object,
            },
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
        border-radius:15px;
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
        border-radius:0 15px 15px 0;
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
        border-radius:5px;
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

        .workshopRegItemPrice i.material-icons {
            font-size:14px;
        }

        .workshopRegItemMoreButton {
            font-size: 10px;
            font-weight: bold;
        }
    }

</style>