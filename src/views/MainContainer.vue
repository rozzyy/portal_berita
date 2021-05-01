<template>
  <div id="app">
      <Navbar />
      <div style="z-index: -1;">
        <router-view></router-view>
      </div>
      <Foot />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/TheFooter.vue'

export default {
  components: {
    Navbar,
    Foot
  },
  name: 'App',
}
</script>

<style>
</style>

