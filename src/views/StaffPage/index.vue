<template>
    <div class="StaffPage">
        <div class="member">
            <img src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg">
            <p>Name</p>
            <div class="member-links">
                <span class="material-icons">github</span>
            </div>
        </div>

        
        <div class="member">
            <img src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg">
            <p>Name</p>
            <div class="member-links">
                <span class="material-icons">github</span>
            </div>
        </div>

        
        <div class="member">
            <img src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg">
            <p>Name</p>
            <div class="member-links">
                <span class="material-icons">github</span>
            </div>
        </div>

        
        <div class="member">
            <img src="https://img.freepik.com/premium-vector/gray-avatar-icon-vector-illustration_276184-163.jpg">
            <p>Name</p>
            <div class="member-links">
                <span class="material-icons">github</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .StaffPage {
        padding: 80px 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    
    .member {
        width: 150px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: rgb(233, 233, 233);
        border-radius: 10px;
        transition: 250ms;
        margin: 10px 0px;
        cursor: pointer;
    }

    .member:hover {
        padding: 0px 5px;
        width: 160px;
        height: 250px;
    }

    .member img {
        width: 130px;
        border-radius: 100%;
    }

    .member-links {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<script>
    const team = [{name: 'test name', links: [{type: '', url: ''}]}]
    export default {
        name: 'StaffPage',
        data() {
            return {
                team
            }
        }
    }
</script>