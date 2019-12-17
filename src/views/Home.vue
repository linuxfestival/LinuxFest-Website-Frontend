<template>
    <div>
      <HomeHeader></HomeHeader>
      <AboutEvent></AboutEvent>
      <Workshops></Workshops>  
      <AboutEvent></AboutEvent>
    </div>
</template>

<script>
// @ is an alias to /src
// import HomeContent from '@/components/HomeContent.vue'

import AboutEvent from "@/components/HomeComponents/AboutEvent";
import Workshops from "@/components/HomeComponents/Workshops";
import HomeHeader from "@/components/HomeComponents/HomeHeader";

export default {
  name: 'home',
  components: {
    HomeHeader, AboutEvent, Workshops
  },
  mounted(){
    console.log("home route mounted.")
  }
}
</script>
