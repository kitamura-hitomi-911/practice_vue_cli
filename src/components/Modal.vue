<template>
  <transition name="fade">
    <div class="l-modal" v-if="is_active">
      <div class="l-modal-inner">
        <component :is="component" @close="close"/>
      </div>
    </div>
  </transition>
</template>

<script>
  import ModalDefault from '@/components/ModalDefault.vue'
  export default {
    name: 'Modal',
    data(){
      return {
        is_active:true,
        component:'ModalDefault'
      }
    },
    components:{
      ModalDefault
    },
    methods:{
      close(){
        this.is_active = false;
      }
    }
  };
</script>

<style lang="scss">
  .l-modal{
    position:absolute;
    top:0;
    left:0;
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.5);
    .l-modal-inner{
      width:95%;
      height:95%;
      border-radius:10px;
      background-color:#fff;
    }
  }

  .fade-enter-active,.fade-enter-to {
    opacity: 1
  }

  .fade-enter,.fade-enter-active,.fade-leave,.fade-leave-active {
    -webkit-transition: opacity .5s;
    transition: opacity .5s
  }

  .fade-enter,.fade-leave-to {
    opacity: 0
  }

  .fade2-enter-active,.fade2-enter-to {
    opacity: 1
  }

  .fade2-enter,.fade2-enter-active,.fade2-leave,.fade2-leave-active {
    -webkit-transition: opacity 2s;
    transition: opacity 2s
  }

  .fade2-enter,.fade2-leave-to {
    opacity: 0
  }
</style>