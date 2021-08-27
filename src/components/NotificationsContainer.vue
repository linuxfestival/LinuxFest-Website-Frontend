<template>
  <notifications group="auth" position="top center" />
</template>

<script>
export default {
  name: 'NotificationsContainer',
}
</script>

<style scoped>
.notification-title {
  direction: rtl !important;
  text-align: right;
}

.notification-content {
  direction: rtl !important;
  text-align: right;
}
</style>
