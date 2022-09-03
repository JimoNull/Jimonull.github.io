<template>
  <div>
    <HeaderNav />
    <router-view />
  </div>
</template>

<script>
  import HeaderNav from './components/HeaderNav'

  export default {
    components: {
      HeaderNav
    },
    data() {
      return {
        msg: 'Hello World!'
      }
    },
    methods: {
      clear() {
        this.msg = ''
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>