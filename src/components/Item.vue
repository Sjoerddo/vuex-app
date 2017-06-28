<template>
  <article class="item" :class="getColorClass">
    <h3 class="item-heading">{{ item.title }}</h3>
    <p class="item-release">{{ item.release || 'Beschikbaar' }}</p>
  </article>
</template>

<script>
  import { getColorClass } from '../mixins'

  export default {
    mixins: [getColorClass],

    props: {
      item: Object
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/classes.scss";

  .item {
    height: 82px;
    padding: 0 16px 12px 16px;
    color: white;
    border: 2px solid white;
  }
</style>
