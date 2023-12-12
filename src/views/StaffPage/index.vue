<template>
    <div class="StaffPage">
       <staffSection :team="front_team" section_name="Frontend" /> 
       <staffSection :team="front_team" section_name="Frontend" /> 
       <staffSection :team="front_team" section_name="Frontend" /> 
    </div>
</template>

<style scoped>
    .StaffPage {
        padding: 80px 50px;
        display: flex;
        width: 100%;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    
</style>

<script>
    const front_team = [
    {name: 'عقیقی head', head: true, position: 'Front-end Developer', links: [{type: 'github', url: 'https://github.com/AmirhosseinAghighi'}], img: 'https://thispersondoesnotexist.com/'},
    {name: 'امیرحسین عقیقی', head: false, position: 'Front-end Developer', links: [{type: 'github', url: 'https://github.com/AmirhosseinAghighi'}], img: 'https://thispersondoesnotexist.com/'},
    {name: 'امیرحسین عقیقی', head: false, position: 'Front-end Developer', links: [{type: 'github', url: 'https://github.com/AmirhosseinAghighi'}], img: 'https://thispersondoesnotexist.com/'},
    {name: 'امیرحسین عقیقی', head: false, position: 'Front-end Developer', links: [{type: 'github', url: 'https://github.com/AmirhosseinAghighi'}], img: 'https://thispersondoesnotexist.com/'},
    {name: 'امیرحسین عقیقی', head: false, position: 'Front-end Developer', links: [{type: 'github', url: 'https://github.com/AmirhosseinAghighi'}], img: 'https://thispersondoesnotexist.com/'}
    ]
    import staffSection from '@/views/StaffPage/components/staffSection.vue'
    export default {
        name: 'StaffPage',
        data() {
            return {
                front_team
            }   
        },
        components: {
            staffSection
        }
    }
</script>