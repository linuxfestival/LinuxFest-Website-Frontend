<template>
  <router-link :to="`careers/${company.id}`">
    <div class="company-item" dir="ltr">
        <img
          class="company-item--image"
          :src="company.avatar"
          :alt="company.name"
        />
      <div class="company-item--info">
        <h2 class="company-item--info-name">{{ company.name }}</h2>
        <br />
        <router-link
          class="company-item--info-moreButton"
          :to="`careers/${company.id}`"
        >
          See job opportunities
          <i class="material-icons">keyboard_arrow_left</i>
        </router-link>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'companyItem',
  props: {
    company: Object,
  },
}
</script>

<style scoped>
.company-item {
  border-radius: 15px;
  min-width: 380px;
  min-height: 200px;
  max-width: 400px;
  background-color: rgb(41, 41, 41);
  display: flex;
  cursor: pointer;
  transition: all 0.1s ease-in;
  margin: 20px;
}

.company-item:hover {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  background-color: #252040;
}

.company-item:hover > .company-item--info {
  color: rgb(242, 169, 56);
}
.company-item--info-moreButton {
  font-size: 12px;
}
.company-item:hover .company-item--info-moreButton {
  background-color: rgb(242, 169, 56);
  color: white;
}

.company-item--info {
  width: calc(50% - 3px);
  border-radius: 0 15px 15px 0;
  border-left: 3px solid white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: white;

}

.company-item--info-name {
  margin-top: 50px;

  font-size: 25px;
  text-align: center;
  padding-right: 5px;
  padding-left: 5px;
}

.company-item--info-moreButton {
  width: calc(100% - 20px);
  border-radius: 5px;
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  margin: auto 10px 10px 10px;

  border: none;
  cursor: pointer;
}

.company-item--image {
  width: 50%;
  height: 100%;
  padding: 30px;
  border-radius: 15px 0 0 15px;
  margin-top: auto;
  margin-bottom: auto;
}

@media only screen and (max-width: 405px) {
  .company-item {
    width: 100%;
    min-width: initial;
  }
}
</style>
