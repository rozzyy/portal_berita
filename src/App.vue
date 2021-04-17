<template>
  <div id="app">
      <Navbar />
      <Background />
      <MainContent />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Background from './components/TheBackground.vue'
import MainContent from './components/TheMainContent.vue'

export default {
  components: {
    Navbar,
    Background,
    MainContent
  },
  name: 'App',
}
</script>

