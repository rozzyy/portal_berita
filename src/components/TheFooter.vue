<template>
    <div>
         <!-- Footer -->
        <footer class="custom-bg">
            <div class="container py-5">
                <b-row class="text-white">
                    <b-col sm="4">
                        <img :src="logo" alt="logo" width="70%">
                        <div class="pt-2">
                            <b-icon icon="building"></b-icon> Jalan Delima No. 05 Tebing Tinggi Sumatera Utara
                        </div>
                        <div>
                            <b-icon icon="telephone"></b-icon> (0621) 21592
                        </div>
                        <div>
                            <b-icon icon="envelope"></b-icon> sekretariatbapp.d5@gmail.com
                        </div>
                        <div class="pb-3">
                            <b-icon icon="globe"></b-icon> bappeda.tebingtinggikota.go.id
                        </div>
                        <img :src="maps" alt="maps" width="60%">
                    </b-col>
                    <b-col sm="5">
                        <h5 class="font-weight-bold">KONTAK KAMI</h5>
                        <small class="text-justify">
                            Silahkan Kirim Tanggapan Anda Mengenai Website Ini Atau Sistem Kami Saat Ini. Tanggapan Anda Sangat Membantu Untuk Meningkatkan Pelayanan Kami Kepada Masyarakat.Apabila terdapat kendala dalam menemukan informasi yang dicari dapat mengunjungi halaman FAQ
                        </small>
                        <form class="py-2">
                            <b-row>
                                <b-col>
                                    <div class="form-group">
                                        <input type="text" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nama">
                                    </div>
                                </b-col>
                                <b-col>
                                    <div class="form-group">
                                        <input type="text" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                                    </div>
                                </b-col>
                            </b-row>
                            <div class="form-group">
                                <textarea class="form-control rounded-0" id="styled" rows="3" placeholder="Pesan"></textarea>
                            </div>
                            <b-button variant="danger" size="md"><b-icon icon="cursor"></b-icon> Kirim</b-button>
                        </form>
                    </b-col>
                    <b-col sm="3">
                        <div class="py-2">
                            <h5 class="font-weight-bold">INFORMASI</h5>
                            <div class="py-2">
                                <a href="#" class="link-info">Berita</a>
                            </div>
                            <div class="py-2">
                                <a href="#" class="link-info">Pengumuman</a>
                            </div>
                            <div class="py-2">
                                <a href="#" class="link-info">Download</a>
                            </div>
                            <div class="py-2">
                                <router-link to="/galeri" class="link-info">Galeri</router-link>
                            </div>
                        </div>
                        <div class="py-2">
                            <h5 class="font-weight-bold">TOTAL PENGUNJUNG</h5>
                            <div class="visitor">
                                12345
                            </div>
                            <div class="py-2">
                                <a href="#" class="visitor-link">Lihat Selengkapnya</a>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </footer>
        <div class="foot-back text-center py-2">
            <div>COPYRIGHT 2020 BAPPEDA KOTA TEBING TINGGI. ALL RIGHT RESERVED.</div>

        </div>
    </div>
</template>

<script>
import bappeda from '@/assets/logob.png'
import maps from '@/assets/images/maps.png'

export default {
    data () {
        return {
            logo: bappeda,
            maps: maps,
        }
    }
}
</script>

<style scoped>
.foot-back {
    background-color: #2e2c2c ;
    font-size: 1.5vh;
    color: #6e7070;
}

input[type=text] {
    background-color: #00000057 ;
    border: none;
}

input[type=text]:focus {
    background-color: #00000057 ;
    border: none;
    color: white;
}

textarea#styled {
    background-color: #00000057;
    border: none;
    color: white;
}

.custom-bg {
    background-color: #191a1a;
}

.link-info {
    color: white;
    font-size: 16px;
    transition: font-size 0.5s;
}

.link-info:hover {
    text-decoration: none;
    color: #cecfcfef;
    font-size: 20px;
}

.visitor {
    background-image: linear-gradient(0deg, black, rgb(53, 52, 52)) ;
    text-align: center;
    width: 50%;
    border-radius: 5px;
    padding: 4px 4px 4px 4px;
}
.visitor-link {
    color: white;
}
.visitor-link:hover {
    text-decoration: none;
    color: #cecfcfef;
}
</style>