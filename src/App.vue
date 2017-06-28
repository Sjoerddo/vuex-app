<template>
  <div id="app">
    <item-list style="width: 50%;"></item-list>
    <item-view style="width: 50%;"></item-view>
  </div>
</template>

<script>
  import ItemList from './components/ItemList'
  import ItemView from './components/ItemView'

  export default {
    components: { ItemList, ItemView }
  }
</script>

<style>
  #app {
    display: flex;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
