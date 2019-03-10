<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/inputComment">コメント送信する</router-link>
    <router-link to="/about/inputComment2">コメント送信する2</router-link>
  </div>
</template>
<script>
  // @ is an alias to /src


  export default {
    name: 'about',
    props:{
      action:{
        type:String,
        default:''
      }
    },
    beforeRouteUpdate (to, from, next) {
      console.log(this);
      console.log(to, from, next);
      next();
    }
  }
</script>