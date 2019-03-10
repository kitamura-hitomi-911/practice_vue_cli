<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/input">入力</router-link>
    <router-link to="/about/confirm">確認</router-link>
  </div>
</template>
<script>
  // @ is an alias to /src


  export default {
    name: 'about',
    props:{
      action:{
        type:String
      }
    },
    watch: {
      action(val){
        this.updateView(val);
      }
    },
    methods:{
      updateView(page_name){
        switch(page_name) {
          case 'aboutInput':
            this.$event_bus.$emit('openModal',{
              component:'ModalDefault',
              params:{
                title:'toAboutInput',
                lead:'内容です'
              }
            });
            break;

          case 'aboutConfirm':
            this.$event_bus.$emit('openModal',{
              component:'ModalDefault',
              params:{
                title:'toAboutConfirm',
                lead:'内容です'
              }
            });
            break;

          default:
            this.$event_bus.$emit('closeModal');
        }
      }
    }
  }
</script>