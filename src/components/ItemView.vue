<template>
  <div class="item-view" :class="getColorClass">
    <h2 class="item-title">{{ item.title }}</h2>
    <img class="item-poster" :src="item.poster"/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getColorClass } from '../mixins'

  export default {
    mixins: [getColorClass],

    computed: mapGetters({
      item: 'selectedItem'
    })
  }
</script>

<style lang="scss" scoped>
  @import "../scss/classes.scss";

  .item-view {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    margin-bottom: auto;
    color: white;
  }

  .item-title {
    width: 50%;
  }

  .item-poster {
    width: 300px;
    height: 450px;
    border: 1px solid white;
  }
</style>
