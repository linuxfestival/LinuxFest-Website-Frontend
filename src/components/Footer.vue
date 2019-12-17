<template>
    <footer class="footer">
        <div class="footer-container">
            <!-- CEIT SSC Google Map iFrame -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1362.2287533063493!2d51.40939688664675!3d35.7029894660746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb68840e07e8e513!2sComputer%20Engineering%20%26%20IT%20Department!5e0!3m2!1sen!2s!4v1576590359730!5m2!1sen!2s" class="footer-map" frameborder="0" allowfullscreen="true"></iframe>
        </div>
        <div class="footer-copyright">
            <!-- Footer CEIT CSS Linked Logo here -->
            <a href="http://www.ceit-ssc.ir">
                <img src="" alt="">
            </a>
            <div class="footer-social">
                <!-- Footer social links here -->
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                socialLinks: [
                    {}
                ]
            }
        }
    }
</script>

<style scoped>
    .footer{
        background-color: black;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .footer-container {
        width:1140px;
        min-height:300px;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .footer-map {
        border-radius:15px;
        width:450px;
        height:300px;
        margin:20px;
    }

    .footer-copyright {
        display: flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
    }
</style>