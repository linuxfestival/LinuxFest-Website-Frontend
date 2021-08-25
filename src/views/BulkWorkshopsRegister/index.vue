<template>
  <div class="parent">
    <p v-if="isLoading">Loading...</p>
    <PartialHeader
      title="ثبت نام در ارائه‌ها و سخنرانی‌ها"
      backgroundUrl="../assets/img/background2.png"
    />

    <div class="workshopsListWrapper">
      <div class="workshopsList">
        <WorkshopRegisterItem
          @select="handleSelect"
          v-for="workshop in workshops"
          :workshop="workshop"
          :isSelected="selectedWorkshops.includes(workshop)"
          :key="workshop.id"
        />
      </div>
    </div>

    <div class="workshopsListFooter">
      <SelectedWorkshops :count="selectedWorkshops.length" />
      <DiscountCard v-model="discountCode" />
      <RegisterButton @register="register" />
    </div>
  </div>
</template>

<script>
import WorkshopRegisterItem from "@/components/WorkshopRegisterItem";
import PartialHeader from "@/components/PartialHeader";

import SelectedWorkshops from "./components/SelectedWorkshops.vue";
import DiscountCard from "./components/DiscountCard.vue";
import RegisterButton from "./components/RegisterButton.vue";
import { REGISTER_STATUS } from "./constants";
import { fetchWorkshops, registerWorkshops } from "./requests";

export default {
  name: "BulkWorkshopsRegister",
  components: {
    WorkshopRegisterItem,
    PartialHeader,
    SelectedWorkshops,
    DiscountCard,
    RegisterButton,
  },
  data() {
    return {
      workshops: [],
      selectedWorkshops: [],
      isLoading: true,
      discountCode: "",
    };
  },
  created() {
    fetchWorkshops()
      .then((workshops) => {
        this.workshops = workshops.filter(({ isRegOpen }) => true);
        const {
          query: { workshop: workshopId },
        } = this.$route;

        if (!workshopId) {
          return;
        }

        const queriedWorkshop = this.workshops.find(
          ({ id }) => id === workshopId
        );
        this.handleSelect(queriedWorkshop);
      })
      .finally(() => {
        this.isLoading = false;
      });
  },

  methods: {
    register() {
      this.isLoading = true;
      registerWorkshops({
        workshops: this.selectedWorkshops,
        discountCode: this.discountCode,
      })
        .then(({ status, paymentUrl }) => {
          switch (status) {
            case REGISTER_STATUS.PAID:
              this.$notify({
                group: "auth",
                title: "موفقیت",
                text: "با موفقیت در ورکشاپ های رایگان ثبت نام کردید.",
                type: "success",
              });
              this.$router.push("/user/me");
            case REGISTER_STATUS.ERROR:
              this.$notify({
                group: "auth",
                title: "موفقیت",
                text: "خطایی رخ داده است. لطفا مجددا تلاش کنید.",
                type: "success",
              });
              this.$router.push("/user/me");
            case REGISTER_STATUS.REQUEST_PAYMENT:
              this.$notify({
                group: "auth",
                title: "موفقیت",
                text: "به درگاه بانکی وارد می شوید.",
                type: "success",
              });
              window.location = paymentUrl;
          }
        })
        .catch(({ response: { status } }) => {
          switch (status) {
            case 400:
              this.$notify({
                group: "auth",
                title: "خطا",
                text: "در کارگاه ثبت نام کرده اید و یا کارگاهی برای ثبت نام انتخاب نکرده اید ",
                type: "error",
              });
            default:
              this.$notify({
                group: "auth",
                title: "خطا",
                text: "خطایی در سرور رخ داده است. مجددا تلاش کن",
                type: "error",
              });
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    handleSelect(workshop) {
      const { id: workshopId } = workshop;

      const foundWorkshop = this.selectedWorkshops.find(
        ({ id }) => id === workshopId
      );
      if (!foundWorkshop) {
        this.selectedWorkshops.push(workshop);
        return;
      }

      const workshopIndex = this.selectedWorkshops.indexOf(foundWorkshop);
      this.selectedWorkshops.splice(workshopIndex, 1);
    },
  },
};
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
  font-family: "iransans";
}
</style>
