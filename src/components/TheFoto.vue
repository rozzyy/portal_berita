<template>
    <!-- Galeri -->
    <div class="container py-3">
        <div class="galeri-foto" v-if="showOv">
            <b-row>
                <b-col sm="1">
                    <span></span>
                    <div class="btn-pos pt-4 text-white">
                        <b-icon icon="caret-left" font-scale="2" @click="left(image)"></b-icon>
                    </div>
                </b-col>
                <b-col>
                    <img :src="dynamicImg" alt="foto" class="tinggi w-100">
                </b-col>
                <b-col sm="1">
                    <span class="text-white pl-5" @click="closeOv"><b-icon icon="x" font-scale="2"></b-icon></span>
                    <div class="btn-pos text-white">
                        <b-icon icon="caret-right" font-scale="2" @click="left(image2)"></b-icon>
                    </div>
                </b-col>
            </b-row>
        </div>
        <b-row>
            <b-col sm="4" class="py-3">
                <div class="box" @click="showFoto(image)">
                    <img :src="image" alt="galeri" width="100%" class="img-galeri" height="100%">
                    <div class="content-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa commodi minus dolorem.
                    </div>
                </div>
            </b-col>
            <b-col sm="4" class="py-3">
                <div class="box" @click="showFoto(image2)">
                    <img :src="image2" alt="galeri" width="100%" class="img-galeri" height="100%">
                    <div class="content-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa commodi minus dolorem.
                    </div>
                </div>
            </b-col>
            <b-col sm="4" class="py-3">
                <div class="box" @click="showFoto(image3)">
                    <img :src="image3" alt="galeri" width="100%" class="img-galeri" height="100%">
                    <div class="content-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa commodi minus dolorem.
                    </div>
                </div>
            </b-col>
            <b-col sm="4" class="py-3">
                <div class="box" @click="showFoto(image)">
                    <img :src="image" alt="galeri" width="100%" class="img-galeri" height="100%">
                    <div class="content-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa commodi minus dolorem.
                    </div>
                </div>
            </b-col>
            <b-col sm="4" class="py-3">
                <div class="box" @click="showFoto(image2)">
                    <img :src="image2" alt="galeri" width="100%" class="img-galeri" height="100%">
                    <div class="content-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa commodi minus dolorem.
                    </div>
                </div>
            </b-col>
            <b-col sm="4" class="py-3">
                <div class="box" @click="showFoto(image3)">
                    <img :src="image3" alt="galeri" width="100%" class="img-galeri" height="100%">
                    <div class="content-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa commodi minus dolorem.
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import image from '@/assets/images/bappeda.jpg'
import image2 from '@/assets/images/background.jpg'
import image3 from '@/assets/images/berita.jpeg'

export default {
    data () {
        return {
            image: image,
            image2: image2,
            image3: image3,
            showOv: false,
            dynamicImg: ''
        }
    },
    methods: {
        showFoto (id) {
            this.showOv = true
            document.documentElement.style.overflow = 'hidden'
            this.dynamicImg = id
        },
        closeOv () {
            this.showOv = false
            document.documentElement.style.overflow = 'auto'
            this.dynamicImg = ''
        },
        left (name) {
            this.dynamicImg = name
        }
    }
}
</script>

<style scoped>
.box {
    border: 0px solid black;
    height: 100%;
    overflow: hidden;
}
.content-title {
    position: absolute;
    font-weight: bold;
    overflow: hidden;
    color: white;
    font-size: 12px;
    bottom: 35%;
    margin-left: 10%;
    margin-right: 10%;
    display: none;
}
.img-galeri {
    transition: all 1s ease;
}

.box:hover .img-galeri {
    transform: scale(2);
    filter: brightness(30%);
    cursor: pointer;
}

.box:hover .content-title {
    display: block;
    cursor: pointer;
}
.galeri-foto {
  background-color: rgba(0, 0, 0, 0.822) ;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 3;
  cursor: pointer;
  /* display: none; */
}
.tinggi {
    height: 100%;
}
.btn-pos {
   margin-top: 400%;
}
</style>