<template>
    <div>
        <div class="hero-text">
            <h5 class="text-center p-2 transparent-box text-warning font-mobile-1 font-weight-bold">Menjadi Institusi Perencana </h5>
            <h4 class="text-center p-2 transparent-box font-mobile-2 font-weight-bold">YANG BERNILAI TINGGI DEMI TERWUJUDNYA</h4>
            <h4 class="text-center p-2 transparent-box font-mobile-3 font-weight-bold">Perencanaan Pembangunan Daerah yang Berkualitas</h4>
        </div>
        <div class="apps-box w-100 py-4">
            <ul class="nav justify-content-center">
                <li class="nav-item px-3 text-white text-center">
                   <div><img :src="printIcon" alt="print" class="icon-size icon-border p-2"></div>
                   <div class="custom-size">E-DATA</div>
                </li>
                <li class="nav-item px-3 text-white text-center">
                   <div><img :src="printIcon" alt="print" class="icon-size icon-border p-2"></div>
                   <div class="custom-size">LAPOR!</div>
                </li>
                <li class="nav-item px-3 text-white text-center">
                    <div><img :src="printIcon" alt="print" class="icon-size icon-border p-2"></div>
                    <div class="custom-size">LPSE</div>
                </li>
            </ul>
        </div>
        <b-img :src="image" class="image-mobile"></b-img>
    </div>
</template>

<script>
// import imageBackground from '@/assets/images/bappeda.jpg'
import imageBackground from '@/assets/images/background.jpg'
import printIcon from '@/assets/icons/print.png'

export default {
    data () {
        return {
            image: imageBackground,
            printIcon: printIcon
        }
    }
}
</script>

<style>
/* .jumbotron {
  position: relative;
  background:none;
}
.jumbotron:after {
    content : "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity : 0.2;
    z-index: -1;
} */
@media only screen and (max-width: 600px) and (max-width: 750px) {
    .image-mobile {
        width: 100%;
        height: 640px;
        object-fit: cover;
        object-position: 50% 10%;
    }
}
.image-mobile {
    width: 100%;
}

.hero-text {
    position: absolute;
    margin: 10% 10% 10% 29%;
    color: white;
}

.icon-size {
    width: 70px;
}

@media only screen and (max-width: 600px) and (max-width: 750px) {
    .font-mobile-1 {
        font-size: 25px;
    }
    .font-mobile-2 {
        font-size: 15px;
    }
    .font-mobile-3 {
        font-size: 10px;
    }
    .hero-text {
        position: absolute;
        margin: 40% 6% 0% 6%;
        color: white;
    }

    .custom-size {
        font-size: 11px;
    }
}

.apps-box {
    position: absolute;
    margin-top: 50%;
    background-color: #00000065;
    height: 19%;
}

@media only screen and (max-width: 600px) and (max-width: 750px) {
    .apps-box {
        position: absolute;
        margin-top: 125%;
        background-color: #5855559d;
        height: 19%;
    }
}

.icon-border {
    border: 2px dotted white;
    border-radius: 40px;
}

.transparent-box {
    background-color: #00000070;
    border-radius: 5px ;
}
</style>