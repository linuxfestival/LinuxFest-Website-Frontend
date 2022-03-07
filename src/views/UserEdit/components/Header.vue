<template>
  <div class="formHeader">
    <h2 class="formHeader-title">
      <i class="material-icons formHeader-title-icon">edit</i>
      ویرایش اطلاعات شخصی
    </h2>
    <div class="formHeader-line"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.formHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.formHeader-title {
  display: flex;
  align-items: center;

  color: #252040;
  margin: 10px;
}

.formHeader-title-icon {
  margin-left: 5px;
}

.formHeader-line {
  height: 3px;
  background-color: #fcc113;
  width: calc(100% - 300px);
}

@media only screen and (max-width: 576px) {
  .formHeader-line {
    display: none;
  }
}
</style>
