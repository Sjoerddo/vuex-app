<template>
  <div class="item-view">
    <nav class="nav-shadow">
      <span class="nav-title">Informatie</span>
      <router-link to="list">
        <img src="../assets/arrow-left.svg" class="back icon"/>
      </router-link>
      <a :href="item.link" target="_blank">
        <img src="../assets/external-link.svg" class="item-link icon"/>
      </a>
    </nav>

    <content>
      <div class="item-view-top">
        <img class="item-poster" :src="item.poster"/>
        <div class="scores">
          <div>
            Audience
            <p class="score" :class="scoreColorClass(score.audience)">{{ score.audience }}</p>
          </div>
          <div>
            Critic
            <p class="score" :class="scoreColorClass(score.critic)">{{ score.critic }}</p>
          </div>
        </div>
      </div>
      <div class="text-info">
        <h2 class="item-title">{{ item.title }}</h2>
        <div @click="goToReservation" class="reserve">
          Reserveer
        </div>
      </div>
    </content>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { getItemReservation, getItemScores } from '../data/api'

  export default {
    data: () => ({
      score: {
        audience: '',
        critic: ''
      }
    }),

    async created () {
      this.score = (await getItemScores(this.item.title)).score
    },

    methods: {
      async goToReservation () {
        window.location = (await getItemReservation(this.item.link)).join('')
      },

      scoreColorClass (_score) {
        const score = parseInt(_score, 10)
        return score < 40 ? 'low-score'
          : score <= 60 ? 'medium-score'
            : 'high-score'
      }
    },

    computed: mapGetters({
      item: 'selectedItem'
    })
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../scss/classes.scss";

  .item-view {
    margin-bottom: auto;
    color: black;

    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 62px;
      border-bottom: 1px solid white;
      background-color: $nav-color;

      span {
        margin: 0;
      }
    }

    content {
      .item-view-top {
        display: flex;
        justify-content: space-around;

        img.item-poster {
          width: 300px;
          height: 450px;
          margin-top: 2px;
          border: 1px solid white;
        }

        .scores {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 100%;
          text-align: center;
          font-size: 18px;
          font-weight: bold;

          .score {
            font-size: 22px;
          }

          .low-score {
            color: $red;
          }

          .medium-score {
            color: $yellow
          }

          .high-score {
            color: $current-green;
          }
        }
      }

      .text-info {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        height: 160px;

        h2 {
          margin: 0;
          padding-top: 10px;
        }

        .reserve {
          width: 260px;
          height: 30px;
          padding: 10px;
          font-size: 20px;
          color: $current-green;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          border: 2px double $current-green;
        }
      }

      h2.item-title {
        margin-left: 16px;
        margin-right: 16px;
      }
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
