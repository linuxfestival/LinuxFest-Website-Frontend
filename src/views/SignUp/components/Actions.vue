<template>
  <div class="bottom">
    <button>ایجاد حساب کاربری</button>
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
  name: "Actions",
};
</script>

<style scoped>
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
}

button {
  background-color: #521c34;
  border-radius: 5px;
  border: none;
  padding: 12px 32px 12px 32px;
  font-size: 15px;
  color: white;
  font-family: "iransans";
  cursor: pointer;
}

button:hover {
  background-color: rgb(242, 169, 56);
}

p {
  font-family: "iransans";
}

.bottom p {
  color: #521c34;
  text-align: right;
  font-size: 13px;
}
</style>
