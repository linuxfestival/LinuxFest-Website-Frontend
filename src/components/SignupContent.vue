<template>
    <div>
        <div class="parent">
            <input type="text" v-model="user.name" placeholder="نام و نام خانوادگی">
            <input type="email" v-model="user.email" placeholder="ایمیل">
            <input type="password" v-model="user.password" placeholder="رمز عبور">
            <button></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Signup",
        data:function () {
            return{
                user: {
                    name: '',
                    email: '',
                    password: '',
                    status: 'pending'
                }
            }
        }
    }
</script>

<style scoped>
.parent{
    background-color: white;
}
</style>