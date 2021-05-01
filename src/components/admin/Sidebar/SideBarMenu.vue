<template>
    <nav :class="{'sidebar': show, 'sidebar2': show2 }">
        <div class="text-white">
            <div class="bg-primary">
                <div class="text-left py-2 container">
                    <img :src="logo" alt="logo" width="70%">
                </div>
            </div>
            <div class="menu py-3">
                <ul class="nav flex-column">
                    <li class="nav-item container active-link-1 py-1">
                        <a class="nav-link text-custom"><span class="px-2"><b-icon icon="house"></b-icon></span> Dashboard</a>
                    </li>
                    <li class="nav-item container active-link py-1">
                        <a class="nav-link text-custom" @click="showCollapse('collapse-1')">
                            <span class="px-2"><b-icon icon="shield-exclamation"></b-icon></span> 
                            Informasi 
                            <span class="float-right ani-caret" v-if="caretUp"><b-icon icon="caret-right"></b-icon></span>
                            <span class="float-right ani-caret" v-else><b-icon icon="caret-down"></b-icon></span>
                            </a>
                    </li>
                    <b-collapse id="collapse-1">
                       <ul class="nav ml-5 list-unstyled">
                           <li class="nav-item">
                               <a class="nav-link sub-custom" href="#"><span class="arrow-ani"><b-icon icon="arrow-right"></b-icon></span> Berita</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link sub-custom" href="#"><span class="arrow-ani"><b-icon icon="arrow-right"></b-icon></span> Pengumuman</a>
                           </li>
                       </ul>
                    </b-collapse>
                    <li class="nav-item container active-link py-1">
                        <a class="nav-link text-custom" @click="showCollapse('collapse-2')">
                            <span class="px-2"><b-icon icon="camera"></b-icon></span> 
                            Media
                            <span class="float-right ani-caret" v-if="caretUp2"><b-icon icon="caret-right"></b-icon></span>
                            <span class="float-right ani-caret" v-else><b-icon icon="caret-down"></b-icon></span>
                            </a>
                    </li>
                    <b-collapse id="collapse-2">
                       <ul class="nav ml-5 list-unstyled">
                           <li class="nav-item">
                               <a class="nav-link sub-custom" href="#"><span class="arrow-ani"><b-icon icon="arrow-right"></b-icon></span> Galeri</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link sub-custom" href="#"><span class="arrow-ani"><b-icon icon="arrow-right"></b-icon></span> Download</a>
                           </li>
                       </ul>
                    </b-collapse>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import logo from '@/assets/logob.png'

export default {
    props:{
        show: Boolean,
        show2: Boolean
    },
    data () {
        return {
            logo: logo,
            caretUp: true,
            caretUp2: true,
        }
    },
    methods: {
        showCollapse (collapse) {
            this.$root.$emit('bv::toggle::collapse', collapse)
           if (collapse == 'collapse-1') {
               if (this.caretUp == true) {
                   this.caretUp = false
               } else {
                   this.caretUp = true
               }
           } else {
               if (this.caretUp2 == true) {
                   this.caretUp2 = false
               } else {
                   this.caretUp2 = true
               }
           }
        }
    }
}
</script>

<style>
.sidebar {
    /* display: none; */
    background-color: rgb(24, 23, 23) ;
    width: 19%;
    position: fixed;
    min-height: 100vh;
    transition: all 0.4s ease;
}
.sidebar2 {
    /* display: none; */
    width: 0%;
    background-color: rgba(0, 0, 0, 0.788) ;
    min-height: 100vh;
    transition: all 0.4s ease;
}

.sidebar2 .menu {
    display: none;
    transition: all 0.9s ease;
}

.active-link-1 {
    background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0.199), rgb(29, 28, 28));
    border-left: 3px solid rgb(85, 172, 107) ;
    transition: all 0.2s ease;
}

.active-link:hover {
    background-image: linear-gradient(-90deg, rgba(255, 255, 255, 0.199), rgb(29, 28, 28));
    border-left: 3px solid rgb(226, 172, 90) ;
    transition: all 0.2s ease;
}

.active-link:hover .text-custom {
    color: rgb(165, 158, 158);
}

.active-link-1:hover .text-custom {
    color: rgb(165, 158, 158);
}

.text-custom {
    font-size: 1.9vh;
    color: rgb(206, 199, 199);
    cursor: pointer;
}

.sub-custom {
    font-size: 1.9vh;
    color: rgb(206, 199, 199);
}
.sub-custom:hover {
    color: rgb(165, 158, 158);
}

.arrow-ani {
    margin-right: 10px;
    transition: all 0.4s ease;
}
.sub-custom:hover .arrow-ani {
    margin-left: 10px;
    margin-right: 0px;
}
.ani-caret {
    transition: all 0.8s ease;
}
</style>