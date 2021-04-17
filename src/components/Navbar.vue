<template>
    <div>
        <!-- Navbar -->
       <nav id="nav" class="navbar navbar-expand-lg nav-transparent fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <!-- <img :src="logo" alt="Logo" width="150"> -->
                    NAVBAR
                </a>
                <span id="nav_btn" :class="{ active: isActive }" @click="menuEx"><span></span></span>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active px-2">
                            <a class="nav-link underline" href="#">BERANDA<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link text-link underline" href="#">INFORMASI <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link text-link underline" href="#">MEDIA <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link text-link underline" href="#">PROFIL <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link text-link underline" href="#">KONTAK <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- End of navbar -->

        <!-- mobile navbar-->
        <transition name="slide-fade">
            <div class="fixed-top" v-if="navbarShow">
                <div class="list-group" style="width: 100%; position: absolute; margin-top:20%; height: 100%;">
                    <a href="#" class="list-group-item list-group-item-action active">Beranda</a>
                    <a href="#" class="list-group-item list-group-item-action">Informasi</a>
                    <a href="#" class="list-group-item list-group-item-action">Media</a>
                    <a href="#" class="list-group-item list-group-item-action">Profil</a>
                    <a href="#" class="list-group-item list-group-item-action">Kontak</a>
                </div>
            </div>
        </transition>
        <!-- end of mobile navbar -->
    </div>
</template>

<script>
import bappeda from '@/assets/logob.png'

export default {
    data () {
        return {
            isActive: false,
            navbarShow: false,
            logo: bappeda
        }
    },
    methods: {
        menuEx () {
            if (this.isActive == false) {
                this.isActive = true
                this.navbarShow = true
            } else {
                this.isActive = false
                this.navbarShow = false
            }
        }
    } 
}
</script>

<style scoped>
.underline {
    text-decoration: none;
    position: relative;
    color: #3366FF;
}

.underline:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    border-bottom: 2px solid #3366FF;
    transition: 0.4s;
}

.underline:hover:after {
    width: 100%;
}
.navbar-nav>li.active>.underline:after {
    width: 100%;
}

#nav.nav-transparent {
    background: #000000a9;
}
.text-link {
    color: white;
}

@media only screen and (max-width: 800px) {
    #nav_btn{
    display: block;
    float: right;
    padding: 20px;
    cursor: pointer;
    }
    #nav_btn span, #nav_btn span::before, #nav_btn span::after{
    width: 28px;
    height: 4px;
    float: left;
    display: block;
    background: #fff;
    position: relative;
    text-indent: -9000px;
    }
    #nav_btn span{ margin: 8px 0; }
    #nav_btn span::before, #nav_btn span::after{
    content: '';
    position: absolute;
    }
    #nav_btn span::before{ top: -8px; }
    #nav_btn span::after{ bottom: -8px; }
    #nav_btn span, #nav_btn span:before, #nav_btn span:after{
    -webkit-transition: all 100ms ease-in-out;
    -moz-transition: all 100ms ease-in-out;
    -ms-transition: all 100ms ease-in-out;
    -o-transition: all 100ms ease-in-out;
    transition: all 100ms ease-in-out;
    }
    #nav_btn.active span{ background-color: transparent; }
    #nav_btn.active span::before, #nav_btn.active span::after{ top: 0; }
    #nav_btn.active span:before{
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    }
    #nav_btn.active span::after{
    transform: translateY(-10px) rotate(-45deg);
    -webkit-transform: translateY(-10px) rotate(-45deg);
    top: 10px;
    }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0.5;
}
</style>