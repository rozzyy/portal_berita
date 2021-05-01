<template>
  <div style="display: flex; width: 100%;">
      <SideBarMenu :show="show" :show2="show2" />
      <div :class="{'content': isAct,}" style="width: 100%">
       <div class="shadow" style="width: 100%;">
         <div class="app-border" @click="showSidebar">
            <i class="fa fa-angle-left mt-3 pl-1 text-white" v-if="isShow"></i>
            <i class="fa fa-angle-right mt-3 pl-1 text-white" v-else></i>
         </div>
       </div>
        <div class="bg-custom">
          <div class="container">
            <router-view></router-view>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import SideBarMenu from '@/components/admin/Sidebar/SideBarMenu.vue'

export default {
  components: {
    SideBarMenu
  },
  name: 'App',
  data () {
    return {
      show: true,
      show2: false,
      isAct: true,
      isAct2: false,
      isShow: true
    }
  },
  methods: {
    showSidebar () {
      if (this.show == false) {
        this.show = true
        this.show2 = false
        this.isAct = true
        this.isAct2 = true
        this.isShow = true
      } else {
        this.show = false
        this.show2 = true
        this.isAct = false
        this.isAct2 = true
        this.isShow = false
      }
    }
  }
}
</script>

<style scoped>
.content {
  padding-left: 19%;
  transition: all 0.4s ease;
}

.app-border {
  cursor: pointer;
  font-size: 140%;
  height: 58px;
  width: 2%;
  border: none;
  background-image: linear-gradient(-90deg, rgb(15, 95, 185), rgba(9, 110, 226, 0.363)) ;
  transition: all 0.5s ease;
}
.bg-custom {
  background-color: rgb(240, 241, 243);
}
</style>

