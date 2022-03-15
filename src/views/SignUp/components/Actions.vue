<template>
  <div class="bottom">
    <button :disabled="disabled">ایجاد حساب کاربری</button>
    <p>
      در صورت داشتن حساب کاربری به حساب خود
      <span>
        <router-link to="/signin" class="red">وارد</router-link>
      </span>
      شوید
    </p>
  </div>
</template>

<script>
export default {
  name: 'Actions',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
}

button {
  background-color: #252040;
  border-radius: 5px;
  border: none;
  padding: 12px 32px 12px 32px;
  font-size: 15px;
  color: white;

  cursor: pointer;
}

button:hover {
  background-color: rgb(242, 169, 56);
}

.bottom p {
  color: #252040;
  text-align: right;
  font-size: 13px;
}
</style>
