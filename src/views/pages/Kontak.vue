<template>
    <div class="pt-5">
        <div class="py-5 container">
            <h2 class="text-center">KONTAK KAMI</h2>
            <div class="underline"></div>
            <b-row class="py-4">
                <b-col sm="5 shadow">
                    <h5 class="font-weight-bold">Hubungi Kami</h5>
                        <small class="text-justify">
                            Silahkan Kirim Tanggapan Anda Mengenai Website Ini Atau Sistem Kami Saat Ini. Tanggapan Anda Sangat Membantu Untuk Meningkatkan Pelayanan Kami Kepada Masyarakat.
                        </small>
                        <form class="py-4">
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
                <b-col sm="4">
                    <div class="list-group text-center">
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div>
                                <b-icon icon="geo-alt" font-scale="2.5"></b-icon>
                            </div>
                            <h5 class="font-weight-bold">Alamat</h5>
                            <div>
                                Jalan Delima No. 05 Tebing Tinggi Sumatera Utara
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div>
                                <b-icon icon="telephone" font-scale="2.5"></b-icon>
                            </div>
                            <h5 class="font-weight-bold">Telepon</h5>
                            <div>
                                (0621) 21592
                            </div>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div>
                                <b-icon icon="envelope" font-scale="2.5"></b-icon>
                            </div>
                            <h5 class="font-weight-bold">Email</h5>
                            <div>
                                sekretariatbapp.d5@gmail.com
                            </div>
                        </a>
                    </div>
                </b-col>
                <b-col sm="3">
                    <ul class="list-group">
                        <li class="list-group-item"><h5 class="font-weight-bold">Jam Kerja</h5></li>
                        <li class="list-group-item font-jadwal"><b-icon icon="clock"></b-icon> Senin - Kamis 07.30 - 16.00</li>
                        <li class="list-group-item font-jadwal"><b-icon icon="clock"></b-icon> Jumat 07.30 - 14.30</li>
                        <li class="list-group-item font-jadwal"><b-icon icon="clock"></b-icon> Sabtu - Minggu <span class="text-danger">Libur</span></li>
                    </ul>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<style scoped>
input[type=text] {
    background-color: #a3a3a32d ;
    border: none;
    border-radius: 9px;
}

input[type=text]:focus {
    background-color: #c0b5b557 ;
    border: none;
    color: rgb(36, 35, 35);
}

textarea#styled {
    background-color: #aaa8a831;
    border: none;
    color: rgb(36, 35, 35);
}

.font-jadwal {
    font-size: 1.7vh;
    font-weight: bold;
}

.underline {
    border-bottom: 5px solid red;
    width: 10%;
    margin: auto;
}
</style>