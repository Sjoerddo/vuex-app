<template>
  <div class="item-view">
    <nav class="nav-shadow">
      <router-link to="list">
        <img src="../assets/arrow-left.svg" class="back icon"/>
      </router-link>
      <a :href="item.link" target="_blank">
        <img src="../assets/external-link.svg" class="item-link icon"/>
      </a>
    </nav>

    <content>
      <img class="item-poster" :src="item.poster"/>
      <h2 class="item-title">{{ item.title }}</h2>
    </content>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      item: 'selectedItem'
    })
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../scss/classes.scss";

  .item-view {
    height: 100%;
    margin-bottom: auto;
    color: white;

    nav {
      width: 100%;
      height: 62px;
      border-bottom: 1px solid white;
      background-color: $nav-color;
    }

    content {
    }

    h2.item-title {
      margin-left: 16px;
      margin-right: 16px;
    }

    img.item-poster {
      width: 300px;
      height: 450px;
      margin-top: 2px;
      border: 1px solid white;
    }

    .back.icon {
      position: absolute;
      top: 16px;
      left: 16px;
    }

    .item-link.icon {
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }
</style>
