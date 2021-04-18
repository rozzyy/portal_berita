const Home = () => import(/* webpackChunkName: "home" */ '@/views/pages/Home.vue')
const Profil = () => import(/* webpackChunkName: "profil" */ '@/views/pages/Profil.vue')
const Berita = () => import(/* webpackChunkName: "berita" */ '@/views/pages/Berita.vue')
const Download = () => import(/* webpackChunkName: "download" */ '@/views/pages/Download.vue')
const Galeri = () => import(/* webpackChunkName: "galeri" */ '@/views/pages/Galeri.vue')
const Kontak = () => import(/* webpackChunkName: "kontak" */ '@/views/pages/Kontak.vue')
const Pengumuman = () => import(/* webpackChunkName: "pengumuman" */ '@/views/pages/Pengumuman.vue')


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profil',
        name: 'Profil',
        component: Profil
    },
    {
        path: '/berita',
        name: 'Berita',
        component: Berita
    },
    {
        path: '/download',
        name: 'Download',
        component: Download
    },
    {
        path: '/galeri',
        name: 'Galeri',
        component: Galeri
    },
    {
        path: '/kontak',
        name: 'Kontak',
        component: Kontak
    },
    {
        path: '/pengumuman',
        name: 'Pengumuman',
        component: Pengumuman
    }
]

export default routes