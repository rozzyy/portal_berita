<template>
    <div>
        <!-- Navbar -->
       <nav id="nav" class="navbar navbar-expand-lg nav-transparent fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active px-2">
                            <a class="nav-link" href="#">Beranda<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Informasi <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">JFP & LITBANG <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Layanan <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">PPID <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Media <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Profil <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item px-2">
                            <a class="nav-link" href="#">Kontak <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- End of navbar -->
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    position: relative;
    color: #3366FF;
}

a:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    border-bottom: 2px solid #3366FF;
    transition: 0.4s;
}

a:hover:after {
    width: 100%;
}
.navbar-nav>li.active>a:after {
    width: 100%;
}
#nav.nav-transparent {
    background: #00000017;
}
</style>