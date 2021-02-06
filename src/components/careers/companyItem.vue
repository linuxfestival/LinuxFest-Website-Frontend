<template>
  <div class="company-item" @click="showMore()">
    <img class="company-item--image"
         src="https://pbs.twimg.com/profile_images/1321901188510552069/FhZKhfmq_400x400.jpg"
         :alt="'logo ' + company.id + ' logo'">
    <div class="company-item--info">
      <h2 class="company-item--info-name">{{ company.name }}</h2>
      <br/>
      <p class="company-item--info-description">
        {{ company.description }}
      </p>
      <button class="company-item--info-moreButton" @click="showMore(company)">
        مشاهده فرصت های شغلی
        <i class="material-icons">keyboard_arrow_left</i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "companyItem",
  props: {
    company: {}
  },
  methods: {
    showMore: function () {
      this.$router.push('/companies/' + this.company._id)
    }
  }
}
</script>

<style scoped>
.company-item {
  border-radius:15px;
  min-width:380px;
  min-height:200px;
  max-width:400px;
  background-color: rgb(41,41,41);
  display:flex;
  cursor:pointer;
  transition:all 0.1s ease-in;
  margin:10px;
}

.company-item:hover {
  box-shadow:0 0 30px rgba(0,0,0,0.3);
  background-color: #521c34;
}

.company-item:hover > .company-item--info {
  color: rgb(242,169,56);
}

.company-item:hover  .company-item--info-moreButton {
  background-color: rgb(242,169,56);
  color:white;
}

.company-item--info {
  width:calc(50% - 3px);
  border-radius:15px 0 0 15px;
  border-right:3px solid white;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  flex-direction:column;
  color:white;
}

.company-item--info-name {
  margin-top:20px;
  font-family :'iransans','Arial';
  font-size:18px;
  text-align: center;
  padding-right:5px;
  padding-left: 5px;
}

.company-item--info-moreButton{
  width:calc(100% - 20px);
  border-radius:5px;
  display:flex;
  height:25px;
  align-items:center;
  justify-content: center;
  margin:auto 10px 10px 10px;
  font-family: 'iransans';
  border:none;
  cursor: pointer;
}
.company-item--image {
  width:50%;
  border-radius: 0 15px 15px 0;
}

@media only screen and (max-width: 405px) {
  .company-item {
    width:100%;
    min-width:initial;
  }
}
</style>