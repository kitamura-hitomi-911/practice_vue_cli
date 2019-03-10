<template>
  <div class="modal">
    <div class="modal-inner">
      <div class="modal-ttl">
        <h1>{{params.title}}</h1>
      </div>
      <div class="modal-main">
        {{params.lead}}<br>
        <a href="#" @click.prevent="close">閉じる</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalDefault',
    props:{
      params:{
        type:Object,
        required:true
      }
    },
    methods:{
      close(){
        this.$emit('close');
      }
    }
  };
</script>

<style lang="scss">

</style>