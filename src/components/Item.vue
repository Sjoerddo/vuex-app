<template>
  <article class="item">
    <div class="item-info">
      <h3 class="item-heading">{{ cutTitle(item.title) }}</h3>
      <p class="item-release" :class="{ 'current-text': !item.release }">
        {{ item.release || 'Beschikbaar' }}
      </p>
    </div>
    <div class="item-icons">
      <img v-if="!item.release" src="../assets/check.svg" class="icon"/>
      <img v-else src="../assets/clock.svg" class="icon"/>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      item: Object
    },

    methods: {
      cutTitle (title) {
        if (title.length > 33) {
          return `${title.substr(0, 30)}...`
        } else {
          return title
        }
      }
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../scss/classes.scss";

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    cursor: pointer;

    .item-info {
      width: 85%;
      display: flex;
      flex-direction: column;

      h3 {
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
      }
    }

    .item-icons {
      margin-right: 16px;
    }
  }

  .current-text {
    color: $current-green;
  }

  @media (max-width: 516px) {
    .item {
      height: 103px;
    }
  }
</style>
