<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.path != '/map'"></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {

  },
}
</script>

<style>
.app {
  background-color: #F0F9EB;
}
</style>
