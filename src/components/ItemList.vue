<template>
  <div class="item-list">
    <items
      :items="items"
      @select="onItemSelect"
    ></items>
    <spinner v-if="!items.length"></spinner>
  </div>
</template>

<script>
  import Items from './Items'
  import Spinner from './ui/Spinner'
  import { mapGetters } from 'vuex'

  export default {
    components: { Items, Spinner },

    created () {
      this.$store.dispatch('getAllItems')
    },

    methods: {
      onItemSelect (item) {
        this.$store.dispatch('selectItem', { item })
      }
    },

    computed: mapGetters({
      items: 'allItems'
    })
  }
</script>
