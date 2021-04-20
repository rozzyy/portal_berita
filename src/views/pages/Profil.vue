<template>
    <div class="py-5">
        <div class="py-5 text-center">
            <h2 class="font-weigh-bold">PROFIL</h2>
            <!-- Tombol -->
            <div class="py-4">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" :class="{'btn': true, 'btn-outline-primary': true, active: isActive}" @click="foto('tusa')">Tujuan dan Sasaran</button>
                    <button type="button" :class="{'btn': true, 'btn-outline-primary': true, active: isActive2}" @click="foto('struktur')">Struktur Organisasi</button>
                    <button type="button" :class="{'btn': true, 'btn-outline-primary': true, active: isActive3}" @click="foto('tusi')">Tujuan dan Fungsi</button>
                </div>
            </div>
            <div v-if="showTusa">
                <transition name="slide-fade"> 
                    <div class="container shadow p-2">
                        <h2 class="text-left border-custom text-primary">Tujuan dan Sasaran Bappeda Kota Tebing Tinggi</h2>
                        <p class="text-justify">
                            Tujuan BAPPEDA Kota Tebing Tinggi adalah <b>“Menjadi Institusi Perencana yang Bernilai Tinggi”</b> dengan sasaran yang akan dicapai adalah <b>“Terwujudnya perencanaan pembangunan daerah yang berkualitas”</b>.  
                        </p>
                        <p class="text-justify">
                            Tujuan BAPPEDA Kota Tebing Tinggi menjadi Institusi Perencana yang Bernilai Tinggi mempunyai makna bahwa BAPPEDA Kota Tebing Tinggi harus mampu menjadi penggerak pembanguan daerah dalam rangka mencapai tujuan Pemerintah Kota Tebing Tinggi, sehingga sasaran-sasaran yang telah ditetapkan Pemerintah Daerah melalui perencanaan yang didasarkan pertimbangan-pertimbangan rasional dalam menentukan strategi, arah kebijakan, dengan mempertimbangkan sumber daya yang dimiliki.
                        </p>
                        <p class="text-justify">
                            Rasionalitas dan basis data adalah ciri yang menjadi kunci kualitas perencanaan, dalam arti perencanaan yang disusun merupakan perencanaan yang berdasarkan pertimbangan atas pengetahuan, informasi, dan data yang terkini (evidence based dan knowledge based) dengan mekanisme pelaksanaan (delivery mechanism) secara partisipatif dan visioner (berorientasi ke depan). Berkenaan dengan permasalahan dan pelaksanaan tugas-fungsi terkait serta menunjang program pemerintah daerah Kota Tebing Tinggi dapat diuraikan sasaran perangkat daerah dan program perangkat daerah BAPPEDA Kota Tebing Tinggi yang termuat dalam draft cascading RPJMD Kota Tebing Tinggi 2017-2022 yaitu: “Terwujudnya Perencanaan Pembangunan Daerah yang Berkualitas”. Kualitas dimaksud ditunjukkan melalui ketercapaian sasaran-sasaran pembangunan daerah.
                        </p>
                        <p class="text-justify">
                            Maka BAPPEDA Kota Tebing Tinggi harus mampu menjadi instistusi perencanaan yang dapat menjamin perencanaan pembangunan yang dibuat dapat dilaksanakan dengan mempertimbangkan capaian sasaran yang telah ditetapkan.
                        </p>
                    </div>
                </transition>
            </div>
            <div v-else-if="showStruktur">
                <transition name="slide-fade">
                    <div class="container shadow">
                        <img :src="struktur" alt="struktur" width="100%">
                    </div>
                </transition>
            </div>
            <div v-else>
                <transition name="slide-fade">
                    <h1>Tujuan dan Fungsi</h1>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import struktur from '@/assets/images/struktur.png'

export default {
    data () {
        return {
            showTusa: true,
            showStruktur: false,
            showTusi: false,
            isActive3: false,
            isActive2: false,
            isActive: true,
            struktur: struktur
        }
    },
    methods: {
        foto (variable) {
            if (variable == 'tusa') {
                this.showTusa = true
                this.showStruktur = false
                this.showTusi = false
                this.isActive = true
                this.isActive2 = false
                this.isActive3 = false
            } else if (variable == 'struktur') {
                this.showTusa = false
                this.showStruktur = true
                this.showTusi = false
                this.isActive2 = true 
                this.isActive = false 
                this.isActive3 = false 
            } else {
                this.showTusa = false
                this.showStruktur = false
                this.showTusi = true
                this.isActive = false
                this.isActive2 = false
                this.isActive3 = true
            }
        }
    }
}
</script>

<style scoped>
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

.border-custom {
    border-bottom: 1px dashed rgba(80, 117, 236, 0.767);
    padding-bottom: 10px;
}
</style>