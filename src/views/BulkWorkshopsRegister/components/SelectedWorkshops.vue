<template>
  <p>
    تعداد
    {{ count }}
    ورکشاپ برای ثبت نام انتخاب شده است.
  </p>
</template>

<script>
export default {
  name: 'BulkWorkshopsRegister',
  props: {
    count: {
      type: Number,
      default: () => 0,
    },
  },
}
</script>
