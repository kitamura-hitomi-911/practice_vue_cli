<template>
  <div class="nav">
    <ul>
      <li><router-link to="/">ホーム</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/log">Log</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Nav'
  };
</script>

<style lang="scss">
  .nav{
    position: relative;
    padding:5px 10px;

    &::after{
      content:"";
      display: block;
      position: absolute;
      width:100%;
      height:5px;
      bottom:0;
      left:0;
      background-color:#000;
    }
    ul{
      display: flex;
      align-items: stretch;
    }
    li{
      padding:0 5px;
      a{
        display:block;
        min-width:100px;
        padding:5px 10px;
        border-top:2px solid #000;
        border-right:2px solid #000;
        border-left:2px solid #000;
        text-align: center;
        text-decoration: none;
        color:#000;
        background-color:#fff;

        &:hover{
          color:#fff;
          background-color:#333;
        }

        &.router-link-exact-active{
          color:#fff;
          background-color:#000;
         }
      }
    }
  }
</style>