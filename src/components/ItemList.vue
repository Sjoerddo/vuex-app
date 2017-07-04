<template>
  <div class="item-list">
    <nav class="nav-shadow">
      <span class="nav-title">Bioscoopoverzicht</span>
      <router-link to="list">
        <img src="../assets/cog.svg" class="settings icon"/>
      </router-link>
    </nav>
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
        this.$router.push('view')
      }
    },

    computed: mapGetters({
      item: 'selectedItem',
      items: 'allItems'
    })
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../scss/variables";
  @import "../scss/classes";

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 62px;
    border-bottom: 1px solid white;
    background-color: $nav-color;

    .settings {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
</style>
