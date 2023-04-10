<template>
  <div>
    <h1>TODO</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style lang="stylus">
  #app
    font-family: Avenir, Helvetica, Arial, 'sans-serif'
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
