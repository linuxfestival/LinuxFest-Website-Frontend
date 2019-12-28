<template>
    <section class="aboutEventWrapper">
        <div class="aboutEventContainer">
            <h1 class="aboutEvent-title">
            <i class="material-icons">{{aboutThisEventTitleIcon}}</i>
            {{aboutThiSEventTitle}}
        </h1>
        <p class="aboutEvent-description">{{aboutThisEventDescription}}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AboutEvent",
        data: function () {
            return {
                aboutThiSEventTitle : 'درباره این ایونت',
                aboutThisEventTitleIcon: 'keyboard_arrow_left',
                aboutThisEventDescription: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.'
            }
        }
    }
</script>

<style scoped>
    .aboutEventWrapper {
        width:100%;
        margin-top:5px;
        border-bottom:5px solid rgb(242,169,56);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        background: url("../../assets/img/pinguin.png") no-repeat left ;
        background-size:50%;
        background-color: #521c34;
    }

    .aboutEventContainer {
        max-width:1140px;
        display: flex;
        flex-direction : column;
        align-items : flex-start;
        justify-content : flex-start;   
    }

    .aboutEvent-title {
        color:rgb(242,169,56);
        font-family: 'iransans';
        font-size:23px;
        margin:15px 30px;
        display:flex;
        align-items:center;

    }

    .aboutEvent-description {
        color:white;
        font-family: 'iransans';
        margin:0 30px 30px;
        margin-bottom:30px;
        line-height:30px;
        text-align:justify;
    }
</style>