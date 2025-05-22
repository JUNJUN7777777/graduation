<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getData')
    this.$store.dispatch('getCheerio')
  }
}
</script>
<style>
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  position: absolute
}

::-webkit-scrollbar-thumb {
  background-color: #75AC47
}

::-webkit-scrollbar-track {
  background-color: #ddd
}
</style>
