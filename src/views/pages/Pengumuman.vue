<template>
    <div class="py-5">
        <div class="py-5 container-fluid">
            <b-row>
                <b-col sm="8">
                    <h2>Pengumuman</h2>
                    <table class="table table-bordered table-sm table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col" class="bg-dark text-white">Tanggal</th>
                            <th scope="col" class="bg-dark text-white">Judul Pengumuman</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kamis, 12 Januari 2021</td>
                                <td>
                                <div class="pengumuman1">
                                    <a href="#" class="inner-text">Pengumuman Tentang Masalah Keuangan</a>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Jumat, 12 Januari 2021</td>
                                <td>
                                    <div class="pengumuman1">
                                        <a href="#" class="inner-text">Pengumuman Hari Ini Shalat Jumat</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
                <b-col sm="4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control rounded-5" placeholder="Cari berdasarkan judul" aria-label="Username" aria-describedby="basic-addon1">
                        <div class="input-group-append">
                           <b-button variant="dark" size="sm">Cari</b-button>
                        </div>
                    </div>
                    <h3>Pengumuman Terbaru</h3>
                    <div class="ml-3">
                        <div class="py-2">
                            <div class="big">
                                <a href="#" class="font-none">Pengumuman Tentang Masalah Keuangan</a>
                            </div>
                            <b-row class="border-custom">
                                <b-col class="side-text">
                                    <b-icon icon="calendar"></b-icon> 12 Januari 2021
                                </b-col>
                                <b-col sm="7" class="side-text">
                                    <b-icon icon="eye"></b-icon> 12 kali dibaca
                                </b-col>
                            </b-row>
                        </div>
                        <div class="py-2">
                            <div class="big">
                                <a href="#" class="font-none">Pengumuman Tentang Masalah Keuangan</a>
                            </div>
                            <b-row class="border-custom">
                                <b-col class="side-text">
                                    <b-icon icon="calendar"></b-icon> 12 Januari 2021
                                </b-col>
                                <b-col sm="7" class="side-text">
                                    <b-icon icon="eye"></b-icon> 12 kali dibaca
                                </b-col>
                            </b-row>
                        </div>
                        <div class="py-2">
                            <div class="big">
                                <a href="#" class="font-none">Pengumuman Tentang Masalah Keuangan</a>
                            </div>
                            <b-row class="border-custom">
                                <b-col class="side-text">
                                    <b-icon icon="calendar"></b-icon> 12 Januari 2021
                                </b-col>
                                <b-col sm="7" class="side-text">
                                    <b-icon icon="eye"></b-icon> 12 kali dibaca
                                </b-col>
                            </b-row>
                        </div>
                        <div class="py-2">
                            <div class="big">
                                <a href="#" class="font-none">Pengumuman Tentang Masalah Keuangan</a>
                            </div>
                            <b-row class="border-custom">
                                <b-col class="side-text">
                                    <b-icon icon="calendar"></b-icon> 12 Januari 2021
                                </b-col>
                                <b-col sm="7" class="side-text">
                                    <b-icon icon="eye"></b-icon> 12 kali dibaca
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<style scoped>
.inner-text {
    text-decoration: none;
}

.pengumuman1 {
    transition: all 1.5s ease;
}

.pengumuman1:hover {
    transform: translateX(20px);
}

input[type=text] {
    background-color: rgba(0, 0, 0, 0.295) ;
}

input[type=text]:focus {
    color: white;
}

.side-text {
    font-size: 2vh;
}

.border-custom {
    border-bottom: 1px dashed rgba(0, 0, 0, 0.404);
    width: 100%;
}

.big {
    transition: all 0.5s ease;
}

.big:hover {
    transform: scale(1.1);
}

.big:hover .font-none {
    text-decoration: none;
}

</style>