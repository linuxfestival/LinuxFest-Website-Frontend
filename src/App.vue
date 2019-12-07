<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style>
</style>
<script>
  import Header from "./components/Header";
  import Signup from "./views/Signup";
  import Signin from "./views/Signin";
  import Footer from "./components/Footer";
  export default {
    components: {Footer, Signin, Signup, Header}
  }
</script>