<template>
    <div class="py-5">
        <div class="py-5 text-center">
            <h2 class="font-weigh-bold">GALERI</h2>
            <!-- Tombol -->
            <div class="py-4">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" :class="{'btn': true, 'btn-outline-success': true, active: isActive}" @click="foto('foto')">Foto</button>
                    <button type="button" :class="{'btn': true, 'btn-outline-success': true, active: isActive2}" @click="foto('video')">Video</button>
                </div>
            </div>
            <div v-if="showFoto">
                <transition name="slide-fade"> 
                    <Foto />
                </transition>
            </div>
            <div v-else>
                <transition name="slide-fade">
                    <h1>Video</h1>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

import Foto from '@/components/TheFoto.vue'

export default {
    components: {
        Foto
    },
    data () {
        return {
            showFoto: true,
            showVideo: false,
            isActive: true,
            isActive2: false
        }
    },
    methods: {
        foto (variable) {
            if (variable == 'foto') {
                this.showFoto = true
                this.showVideo = false
                this.isActive = true
                this.isActive2 = false
            } else {
                this.showFoto = false
                this.showVideo = true
                this.isActive2 = true 
                this.isActive = false 
            }
        }
    }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .4s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0.6;
}
</style>
