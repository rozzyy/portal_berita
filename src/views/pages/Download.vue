<template>
    <div class="py-5">
        <div class="py-5 container-fluid">
            <b-row>
                <b-col sm="8">
                    <h2>Download</h2>
                    <table class="table table-bordered table-sm table-striped">
                        <thead>
                            <tr>
                            <th scope="col" class="bg-dark text-white">No</th>
                            <th scope="col" class="bg-dark text-white">Nama File</th>
                            <th scope="col" class="bg-dark text-white">File</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center" width="20px">1</td>
                                <td>
                                    <div class="pengumuman1">
                                        LPJK 2021
                                    </div>
                                </td>
                                <td class="text-center" width="20px">
                                    <a href="#" class="custom-button">Download</a>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">2</td>
                                <td>
                                    <div class="pengumuman1">
                                        RPIJMD 2020
                                    </div>
                                </td>
                                <td class="text-center" width="20px">
                                    <a href="#" class="custom-button">Download</a>
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

.custom-button {
    border: 1px solid red;
    padding: 2px;
    color: white;
    background-color: rgb(212, 39, 39);
    border-radius: 7px;
}

</style>