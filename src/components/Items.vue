<template>
  <section class="items">
    <item @click.native="select(item)" v-for="(item, index) in items" :item="item" :key="index"></item>
  </section>
</template>

<script>
  import Item from './Item'

  export default {
    components: { Item },

    props: {
      items: Array
    },

    methods: {
      select (item) {
        this.$emit('select', item)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../scss/classes.scss";

  .items {
    /*width: 50%;*/
    overflow-y: auto;
    height: 100%;
  }
</style>
