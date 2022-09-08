<template>
<transition appear>
  <div>
      <HeaderNav />
    <router-view />
  </div>
  </transition>
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

  /* アニメーション中のスタイル */
  .v-leave-active,
  .v-enter-active {
    transition: opacity 1s;
  }

  /* 表示アニメーション */
  .v-enter {
    opacity: 0;
  }

  .v-enter-to {
    opacity: 1;
  }

  /* 非表示アニメーション */
  .v-leave {
    opacity: 1;
  }

  .v-leave-to {
    opacity: 0;
  }
</style>