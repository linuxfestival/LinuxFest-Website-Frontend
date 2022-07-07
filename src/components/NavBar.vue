<script setup>
  import NavLink from '@/components/NavLink.vue'
  import NavDivider from '@/components/NavDivider.vue'
  import NavLoginLink from '@/components/NavLoginLink.vue';
  import Button from '@/components/Button/index.vue';
  import * as paths from '@/router/paths.js'

  function handleClick() {
    console.log('register clicked.')
  }
</script>

<template>
  <nav class="navbar">
    <NavLink :to="paths.HOME.path">خانه</NavLink>
    <NavDivider />
    <NavLink :to="paths.HOME.path">درباره جشنواره</NavLink>
    <NavDivider />
    <NavLink :to="paths.HOME.path">ارائه‌ها و سخنرانی‌ها</NavLink>
    <NavDivider />
    <NavLink :to="paths.HOME.path">ارائه دهندگان</NavLink>
    <NavDivider />
    <NavLink :to="paths.HOME.path">فرصت‌های شغلی</NavLink>

    <NavLoginLink />
    <NavDivider />
    <Button variant="secondary" class="navbar__button" @click="handleClick">
      ثبت‌نام ارائه‌ها
    </Button>
  </nav>
</template>

<style scoped>
.navbar {
  height: 60px;
  width: 100%;
  padding: 0 16px;

  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;

  background-color: #252040;
}

.navbar__button {
  margin-right: 12px;
}
</style>
