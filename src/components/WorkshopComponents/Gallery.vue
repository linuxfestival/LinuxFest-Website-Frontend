<template>
    <div class="albumWrapper">
        <div class="bigImageWrapper" v-if="fullScreenImage">
            <button @click="closeFullScreen()" class="bigImageWrapper-close"><i class="material-icons">close</i></button>
            <div class="bigImage-image" :style="'background: center / cover no-repeat url(' + selectedImageToFull.url + ')'"></div>
            <div class="fullScreenThumbnails">
                <div v-for="image in album" :style="'background: center / cover no-repeat url(' + image.url + ')'" class="album-imageThumbnail" @click="makeMeBig(album.indexOf(image))"></div>
            </div>
        </div>
        <div v-for="image in album" :style="'background: center / cover no-repeat url(' + image.url + ')'" class="album-imageThumbnail" @click="makeMeBig(album.indexOf(image))"></div>
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        props : {
            album: [],
        },
        data() {
            return {
                fullScreenImage : false,
                selectedImageToFull : {}
            }
        },
        methods : {
            makeMeBig: function(imageIndex) {
                console.log(this.album[imageIndex].url, ' is now big');
                this.selectedImageToFull = this.album[imageIndex];
                this.fullScreenImage = true;
            },
            closeFullScreen: function() {
                this.fullScreenImage = false;
            }
        }
    }
</script>

<style scoped>
    .albumWrapper {
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        z-index:1000;
    }

    .album-imageThumbnail {
        width:100px;
        height:100px;
        cursor:pointer;
        border-radius:15px;
        margin:10px;
    }

    .album-imageThumbnail:hover {
        box-shadow:0 0 20px rgba(0,0,0,0.2);
    }

    .fullScreenThumbnails {
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
        width:80%;
    }


    .bigImageWrapper {
        width:100%;
        height:100vh;
        position:fixed;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        top:0;
        left:0;
        background-color: rgba(0,0,0,0.9);
    }

    .bigImageWrapper-close {
        position:absolute;
        top:0;
        right:0;
        margin:10px;
        color:white;
        display:flex;
        align-items:center;
        justify-content:center;
        background:none;
        border:none;
        cursor:pointer;
    }

    .bigImageWrapper-close i.material-icons {
        font-size:30px;
    }

    .bigImage-image {
        width:80%;
        height:400px;
        margin-bottom:20px;
    }


</style>