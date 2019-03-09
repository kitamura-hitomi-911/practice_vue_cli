<template>
  <div class="l-wrapper">
    <div class="l-header"><Header/></div>
    <div class="l-nav"><Nav/></div>
    <div class="l-content"><router-view/></div>
    <Modal/>
    <div class="l-footer"><FooterMenu/></div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import Nav from '@/components/Nav.vue'
  import FooterMenu from '@/components/FooterMenu.vue'
  import Modal from '@/components/Modal.vue'

  export default {
    name: 'app',
    components: {
      Header,
      Nav,
      FooterMenu,
      Modal
    }
  }
</script>

<style lang="scss">
  @import "./assets/sass/reset";
  @import "./assets/sass/base";
  .l-wrapper{
    display:flex;
    flex-direction: column;
    height:100%;
    .l-content{
      flex:1 1 auto;
    }
  }
</style>
