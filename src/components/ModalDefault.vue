<template>
  <div class="modal">
    <div class="modal-inner">
      <div class="modal-ttl">
        <h1>タイトル</h1>
      </div>
      <div class="modal-main">
        内容はいる<br>
        <a href="#" @click.prevent="close">閉じる</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ModalDefault',
    methods:{
      close(){
        this.$emit('close');
      }
    }
  };
</script>

<style lang="scss">

</style>