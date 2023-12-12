<template>
   <div class="staffSection">
        <h1>{{ section_name }}</h1>
        <hr>
        <div class="member-list">
            <div class="member-card" v-for="member_data in team" :class="{'head-card': member_data.head}">
                <div class="member">
                    <div class="ribbon" v-if="member_data.head"><span :class="{'front-ribon': member_data.position == 'Front-end Developer'}">Head Developer</span></div>
                    <img :src="member_data.img">
                    <h2>{{ member_data.name }}</h2>
                    <p class="position">{{ member_data.position }}</p>
                    <hr style="width: 100%;">
                    <div class="member-links">
                        <img style="width: 30px;" :src="require('../../../../public/logos/' + data.type + '.svg')" v-for="data in member_data.links" @click="() => window.open(data.url)" alt="social logo">
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name: 'staffSection',
    props: {
        team: {
            type: Object,
            default: () => ({}) // Set the default value as an empty object
        },
        section_name: {
            type: String,
            default: 'Test'
        }
    }
}
</script>

<style>

.staffSection {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    background-color: #f9f9f9bd;
    padding: 15px;
    border-radius: 10px;
}

hr {
    width: 100%;
}

.member-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: linear-gradient(
        0deg,
        #f9f9f9bd,
        #f9f9f9bd
      ),
      url("../../../assets/img/withEye.png") no-repeat center / 100%;
      background-size: contain;
}

.head-card {
    width: 100%;
}

.member-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ribbon {
  position: absolute;
  right: -5px; top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 120px; height: 120px;
  text-align: right;
}
.ribbon span {
    font-size: 10px;
    font-weight: bold;
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 120px;
    display: block;
    background: var(--mainColor);
    background: -webkit-gradient(linear, left top, left bottom, from(var(--mainColor)), to(var(--mainColor)));
    background: linear-gradient(var(--mainColor) 0%, var(--mainColor) 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 27px;
    right: -24px;
}
.ribbon span::before {
  content: "";
  position: absolute; left: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid var(--mainColor);
  border-right: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-top: 3px solid var(--mainColor);
}
.ribbon span::after {
  content: "";
  position: absolute; right: 0px; top: 100%;
  z-index: -1;
  border-left: 3px solid transparent;
  border-right: 3px solid var(--mainColor);
  border-bottom: 3px solid transparent;
  border-top: 3px solid var(--mainColor);
}

.front-ribon {
    background: linear-gradient(149deg, #eebe28, #2868ff) !important;
    background-size: 400% 400% !important;

    -o-animation: front-ribon 10s ease infinite;
    animation: front-ribon 10s ease infinite;
}

@-o-keyframes front-ribon {
    0%{background-position:15% 0%}
    50%{background-position:86% 100%}
    100%{background-position:15% 0%}
}
@keyframes front-ribon {
    0%{background-position:15% 0%}
    50%{background-position:86% 100%}
    100%{background-position:15% 0%}
}

.member {
    width: 250px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    transition: 250ms;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    margin: 25px 25px;
    position: relative;
}

.position {
    padding: 5px;
    border-radius: 10px;
    background: var(--mainColor);
    color: white;
    margin: 0px;
}

    /* .member:hover {
        padding: 0px 5px;
        font-size: 1.1rem;
        width: 260px;
        height: 350px;
    } */

    .member img {
        width: 130px;
        border-radius: 100%;
    }

    .member-links {
        display: flex;
        align-items: center;
        justify-content: center;
    }   

    h2 {
        font-size: 1.8rem;
        margin: 0px;
    }
</style>